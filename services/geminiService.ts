
import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  private modelName = 'gemini-3-flash-preview';

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
  }

  async getChatResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      const chat = this.ai.models.generateContent({
        model: this.modelName,
        contents: [
          ...history.map(h => ({ role: h.role, parts: h.parts })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are the AI assistant for E-Tech Software, a technology company located in Eldoret, Kenya. 
          Your goal is to help visitors learn about our services: ${SERVICES.map(s => s.title).join(', ')}. 
          Be professional, helpful, and friendly. Mention our location in Eldoret if relevant. 
          Always try to guide the user towards booking a consultation or contacting our team.`,
          temperature: 0.7,
        }
      });

      const response = await chat;
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Hello! I'm currently having a bit of trouble connecting. Please feel free to reach out via our contact form!";
    }
  }
}

export const geminiService = new GeminiService();
