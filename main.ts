// Loading Screen Gold: a tip in 200 characters.
// The build is not stuck — it is just thinking about what you did.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Tip: the build isn't stuck, it's just thinking about what you did. Go drink water. It will still be thinking when you get back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");

console.log("entry written:", ENTRY.length, "characters");
