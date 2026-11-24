// Loading Screen Gold: a tip in 200 characters.
// The build isn't stuck — it's just thinking about what you did.
// Fresh rewrite in this session for the retry entry.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: the build isn't stuck, it's just thinking about what you did. Go drink water. It will still be thinking when you get back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP + "\n");
console.log("entry written:", TIP.length, "characters");
