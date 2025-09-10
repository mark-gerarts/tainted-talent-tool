import fs from "fs";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      // Vendored from https://github.com/lassejlv/vite-include-html-plugin.
      name: "vite-plugin-include",
      async transformIndexHtml(html) {
        const includeTagRegex = /<include\s+src="([^"]+)"><\/include>/g;
        const replacedHtml = await Promise.all(
          Array.from(html.matchAll(includeTagRegex), async ([match, src]) => {
            try {
              const content = await fs.promises.readFile(src, "utf-8");
              return { match, content };
            } catch (error) {
              console.error(`Error reading ${src}: ${error}`);
              return { match, content: match };
            }
          })
        );

        return replacedHtml.reduce((acc, { match, content }) => {
          return acc.replace(match, content);
        }, html);
      },
    }
  ],
});
