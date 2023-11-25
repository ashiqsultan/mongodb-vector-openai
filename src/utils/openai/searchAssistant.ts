import OpenAI from 'openai';

const openaiApiKey = process.env.OPENAI_API_KEY || '';
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function main(userMessage: string): Promise<any> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are an e-commerce search assistant. Follow the below list of instruction for generating the response.
        - You should only output JSON strictly following the Output Format Instructions.
        - List of Categories: Books, Clothing, Electronics, Home & Kitchen, Sports & Outdoors.
        - Identify whether user message matches any category from the List of Categories else it should be empty string. Do not invent category outside the provided list.
        - Identify price range from user message. minPrice and maxPrice must only be number or null.
        - Output Format Instructions for JSON: { category: 'Only one category', minPrice: 'Minimum price if applicable else null', maxPrice: 'Maximum Price if applicable else null' }
        `,
      },
      { role: 'user', content: userMessage },
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
  });
  const outputJson = JSON.parse(completion.choices[0].message.content);
  return outputJson;
}

export default main;
