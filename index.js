import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getSearchResults } from "./src/js/searchResults.js";
import { createFile } from "./src/js/fileHandler.js";
import { createResultsString } from "./src/js/objectParser.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("src"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const emptyInputMsg = "Vyhledávací pole by nemělo být prázdné";
const noResultsMsg = "Na váš dotaz nejsou žádné výsledky";
const errorMessage = "Chyba při hledání";

app.post("/", async (req, res) => {
  const searchString = req.body.search.trim();

  if (searchString !== "") {
    const response = await getSearchResults(searchString);

    if (response.results) {
      if (response.results.length !== 0) {
        // TODO render of results
        res.render("index.ejs", {
          results: response.results,
        });
        //creating temp file with results
        createFile(response.results);
      } else {
        res.render("index.ejs", { noResultsMsg: noResultsMsg });
      }
    } else {
      res.render("index.ejs", { errorMsg: `${errorMessage}: ${response}` });
    }
  } else {
    res.render("index.ejs", { emptyInputMsg: emptyInputMsg });
  }
});

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const folderPath = __dirname + "/src/temp";

app.get("/download", (req, res) => {
  res.download(folderPath + "/searchResults.txt", function (err) {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
