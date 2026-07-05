import "./config/dotenv.js";
import { llm } from "./config/llm.js";

async function main() {
  const response = await llm.invoke("Say Hello");

  console.log(response.content);
}

main();