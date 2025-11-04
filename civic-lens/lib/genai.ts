export const CONFIG = {
  enableGemini: false,
};

export async function askGemini(prompt: string): Promise<string> {
  console.warn("Gemini disabled. Returning empty string.");
  return "";
}