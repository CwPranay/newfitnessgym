'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating inspiring fitness quotes or tips.
 *
 * - generateFitnessMotivation - A function that generates a fitness motivation message.
 * - AiFitnessMotivationInput - The input type for the generateFitnessMotivation function.
 * - AiFitnessMotivationOutput - The return type for the generateFitnessMotivation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiFitnessMotivationInputSchema = z.object({
  type: z
    .enum(['quote', 'tip'])
    .optional()
    .describe('Optional: Specify "quote" to get a fitness quote or "tip" to get a fitness tip. If not specified, a general motivational message will be provided.'),
});
export type AiFitnessMotivationInput = z.infer<typeof AiFitnessMotivationInputSchema>;

const AiFitnessMotivationOutputSchema = z.object({
  motivation: z.string().describe('An inspiring fitness quote or tip.'),
});
export type AiFitnessMotivationOutput = z.infer<typeof AiFitnessMotivationOutputSchema>;

export async function generateFitnessMotivation(
  input: AiFitnessMotivationInput
): Promise<AiFitnessMotivationOutput> {
  return aiFitnessMotivationFlow(input);
}

const aiFitnessMotivationPrompt = ai.definePrompt({
  name: 'aiFitnessMotivationPrompt',
  input: { schema: AiFitnessMotivationInputSchema },
  output: { schema: AiFitnessMotivationOutputSchema },
  prompt: `You are an inspiring fitness coach. Your task is to provide motivational content for gym members.

{{#if type}}
  {{#eq type "quote"}}
    Generate a short, inspiring fitness quote. Make it punchy and encouraging.
  {{/eq}}
  {{#eq type "tip"}}
    Generate a short, actionable fitness tip that motivates users to improve their health.
  {{/eq}}
{{else}}
  Generate either a short, inspiring fitness quote or an actionable fitness tip. Keep it concise and highly motivating.
{{/if}}

Respond with only the quote or tip, formatted as a JSON object with a single 'motivation' field.`,
});

const aiFitnessMotivationFlow = ai.defineFlow(
  {
    name: 'aiFitnessMotivationFlow',
    inputSchema: AiFitnessMotivationInputSchema,
    outputSchema: AiFitnessMotivationOutputSchema,
  },
  async (input) => {
    const { output } = await aiFitnessMotivationPrompt(input);
    return output!;
  }
);
