import "./config/dotenv.js";
import { llm } from "./config/llm.js";

async function main() {
  const response = await llm.invoke("Write a short story about a robot learning to love.");

  console.log(response.content);
}

main();