import { readFileSync, writeFileSync } from 'fs';

let articles = JSON.parse(readFileSync("blog/_.json", "utf8")).articles;

for (let i = 0; i < articles.length; i++) {
    articles[i].md_content = readFileSync(`blog/markdown/${articles[i].slug}.md`, "utf8")
}

//write to json file
writeFileSync("./src/lib/blog_posts.json", JSON.stringify(articles), "utf-8");
