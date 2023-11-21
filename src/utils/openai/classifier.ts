import OpenAI from 'openai';

const openaiApiKey = process.env.OPENAI_API_KEY || '';
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function main(userMessage: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are an e-commerce search assistant that outputs only JSON based on the Format Instruction.
        - List of Categories: Electronics, Clothing, Home.
        - Identify whether user message matches any category from the List of Categories else it should be empty string.
        - Identify price range from user message.
        - Format Instructions for output JSON: { category: 'Only one category', minPrice: 'Minimum price if applicable else null', maxPrice: 'Maximum Price if applicable else null' }
        `,
      },
      { role: 'user', content: userMessage },
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
  });
  console.log(completion.choices[0].message.content);
  const outputJson = JSON.parse(completion.choices[0].message.content);
  console.log(typeof outputJson);
  console.log(outputJson.category);
}

export default main;
