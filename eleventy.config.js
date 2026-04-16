import { IdAttributePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(IdAttributePlugin);

  // Format dates as "Jan 20, 2025"
  eleventyConfig.addFilter("readableDate", (dateVal) => {
    const d = new Date(dateVal);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Sort songs by EO number (ascending)
  eleventyConfig.addCollection("songs", (collection) =>
    collection.getFilteredByGlob("src/songs/*.md")
      .sort((a, b) => a.data.eoNumber - b.data.eoNumber)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
