import fs from "fs";
import path from "path";
import { createResultsString } from "./objectParser.js";

const dirPath = "src/temp";
const fileName = "searchResults.txt";

const filePath = path.join(process.cwd(), dirPath, fileName);

function createFile(objects) {
  const file = fs.createWriteStream(filePath);
  file.on("error", function (err) {
    console.log("Error creating file", err);
  });

  file.write(createResultsString(objects));

  file.end();
}

export { filePath, createFile };
