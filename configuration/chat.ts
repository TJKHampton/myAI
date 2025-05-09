import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. Please ask any questions about our menu or our subscription box!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `It was great talking with you! Let's take a break and we can talk again later.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
