'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized service recommendations based on user profile and browsing history.
 *
 * - `getPersonalizedServiceRecommendations` - An exported function that calls the Genkit flow to get personalized service recommendations.
 * - `PersonalizedServiceRecommendationsInput` - The input type for the `getPersonalizedServiceRecommendations` function, including user profile and browsing history.
 * - `PersonalizedServiceRecommendationsOutput` - The output type for the `getPersonalizedServiceRecommendations` function, which is a list of recommended services with descriptions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedServiceRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, including their interests and goals.'),
  browsingHistory: z
    .string()
    .describe('A description of the user browsing history on the InsightEdge website.'),
});
export type PersonalizedServiceRecommendationsInput = z.infer<
  typeof PersonalizedServiceRecommendationsInputSchema
>;

const RecommendedServiceSchema = z.object({
  serviceName: z.string().describe('The name of the recommended service.'),
  description: z.string().describe('A short description of why this service is recommended.'),
});

const PersonalizedServiceRecommendationsOutputSchema = z.array(
  RecommendedServiceSchema
);
export type PersonalizedServiceRecommendationsOutput = z.infer<
  typeof PersonalizedServiceRecommendationsOutputSchema
>;

export async function getPersonalizedServiceRecommendations(
  input: PersonalizedServiceRecommendationsInput
): Promise<PersonalizedServiceRecommendationsOutput> {
  return personalizedServiceRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedServiceRecommendationsPrompt',
  input: {schema: PersonalizedServiceRecommendationsInputSchema},
  output: {schema: PersonalizedServiceRecommendationsOutputSchema},
  prompt: `Based on the user profile: {{{userProfile}}} and their browsing history: {{{browsingHistory}}},
  recommend the most relevant InsightEdge services (e.g., workshops, consulting, statistical services).
  Explain why each service is recommended for this specific user. Return a JSON array of service recommendations.
  Each object in the array should have "serviceName" and "description" fields.
`,
});

const personalizedServiceRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedServiceRecommendationsFlow',
    inputSchema: PersonalizedServiceRecommendationsInputSchema,
    outputSchema: PersonalizedServiceRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
