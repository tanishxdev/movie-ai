import './config/dotenv.js';

import { llm } from './config/llm.js';
import { moviePrompt } from './prompts/movie.prompt.js';

async function main() {
  const messages = await moviePrompt.invoke({
    genre: 'Action',

    mood: 'Excited',

    count: 3,
  });

  console.log(messages);
}
main();
