import { 
  GoogleGenAI, 
  Chat, 
  Type, 
  FunctionDeclaration, 
} from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { findOrder, searchProducts } from './mockBackend';

// 1. Define Tool Declarations
const getOrderStatusTool: FunctionDeclaration = {
  name: "getOrderStatus",
  description: "Get the status and delivery details of a specific order using its Order ID.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      orderId: {
        type: Type.STRING,
        description: "The unique Order ID (e.g., ORD-123).",
      },
    },
    required: ["orderId"],
  },
};

const searchProductsTool: FunctionDeclaration = {
  name: "searchProducts",
  description: "Search for products in the catalog based on category and usage.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      category: {
        type: Type.STRING,
        description: "The type of product (e.g., Laptop, Monitor, Keyboard).",
      },
      usage: {
        type: Type.STRING,
        description: "The intended usage (e.g., Gaming, Office, Work).",
      },
    },
  },
};

// 2. Initialize Chat: Get Gemini + System Rules + Tools
let chatSession: Chat | null = null;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is missing from environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      tools: [{ functionDeclarations: [getOrderStatusTool, searchProductsTool] }],
    },
  });
  
  return chatSession;
};

// 3. Handle Message Sending and Tool Execution Loop
export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Could not initialize chat session.");
  }

  try {
    // Send user message
    let result = await chatSession.sendMessage({ message: userMessage });
    
    // Check for tool calls (loop until model is satisfied)
    let functionCalls = result.functionCalls;

    while (functionCalls && functionCalls.length > 0) {
      const responseParts = [];

      for (const call of functionCalls) {
        console.log(`[Gemini] Calling tool: ${call.name}`, call.args);
        
        let apiResponse: any = { error: "Unknown tool" };
        
        try {
            if (call.name === "getOrderStatus") {
                const orderId = call.args['orderId'] as string;
                const order = findOrder(orderId);
                apiResponse = order ? order : { error: "Order ID not found." };
            } 
            else if (call.name === "searchProducts") {
                const category = call.args['category'] as string | undefined;
                const usage = call.args['usage'] as string | undefined;
                const products = searchProducts(category, usage);
                apiResponse = products.length > 0 ? products : { message: "No matching products found." };
            }
        } catch (toolError) {
            console.error(`Error executing tool ${call.name}:`, toolError);
            apiResponse = { error: "Failed to execute tool." };
        }

        // Correctly format the response part for the Gemini API
        // It must be wrapped in a 'functionResponse' object
        responseParts.push({
            functionResponse: {
                id: call.id,
                name: call.name,
                response: { result: apiResponse }
            }
        });
      }

      // Send the tool results back to the model
      result = await chatSession.sendMessage({
        message: responseParts 
      });

      // Check if the model wants to call more tools or if it's done
      functionCalls = result.functionCalls;
    }

    // Return the final text response
    return result.text || "I'm sorry, I couldn't generate a response.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error; // Re-throw to be handled by the UI
  }
};