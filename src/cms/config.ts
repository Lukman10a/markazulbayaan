const config: any = {
  local_backend: true,

  backend: {
    name: "git-gateway",
    repo: "Lukman10a/markazulbayaan",
    branch: "main",
  },

  media_folder: "public/images/uploads",
  public_folder: "/images/uploads",
  // publish_mode: "editorial_workflow",

  collections: [
    {
      name: "blog",
      label: "Blog",
      folder: "/public/_posts/",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Layout", name: "layout", widget: "hidden", default: "blog" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Featured Image", name: "thumbnail", widget: "image" },
        { label: "Author", name: "author", widget: "string" },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
};

export default config;
