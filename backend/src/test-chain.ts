import "./config/dotenv.js";

import { llm } from "./config/llm.js";
import { moviePrompt } from "./prompts/movie.prompt.js";

async function main() {

  const chain = moviePrompt.pipe(llm);

  const response = await chain.invoke({
    genre: "Action",
    mood: "Excited",
    count: 3,
  });

  console.log(response.content);

}

main();