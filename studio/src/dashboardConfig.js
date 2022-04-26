export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626867c7c1a824007a0d9afa",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gvj39g3x",
                  apiId: "8aa833b5-9276-45e3-b204-97f454f5a36f",
                },
                {
                  buildHookId: "626867c8d7009d008b038243",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-gj8vfptf",
                  apiId: "ea2f15db-355d-441a-b158-480494d7ec27",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/srouse/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-gj8vfptf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
