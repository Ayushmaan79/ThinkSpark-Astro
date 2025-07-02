window.CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    media_folder: "public/images",
    public_folder: "/images",
    collections: [
      {
        name: "blog",
        label: "Blog",
        folder: "src/content/blog",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Date", name: "date", widget: "datetime" },
          { label: "Description", name: "description", widget: "string" },
          { label: "Body", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});
