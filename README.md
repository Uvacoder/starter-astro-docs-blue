# eccentricvamp.github.io

## Commands Cheatsheet

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

To deploy your site to production, check out our [Deploy an Astro Website](https://docs.astro.build/guides/deploy) guide.

## New to Astro?

Welcome! Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Customize This Theme

### Site metadata

`src/config.ts` contains several data objects that describe metadata about your site like title, description, language, and image. You can customize these to match your project.

## Page metadata

Astro uses frontmatter in Markdown pages to choose layouts and pass properties to those layouts. If you are using the default layout, you can customize the page in many different ways to optimize SEO and other things. For example, you can use the `title` and `description` properties to set the document title, meta title, meta description, and Open Graph description.

```markdown
---
title: Example title
description: Really cool docs example that uses Astro
layout: ../../layouts/Default.astro
---

# Page content...
```

### Sidebar navigation

The sidebar navigation is controlled by the `SIDEBAR` variable in your `src/config.ts` file. You can customize the sidebar by modifying this object. A default, starter navigation has already been created for you.

```ts
export const SIDEBAR = {
  "Section Header": [
    { text: "Introduction", link: "introduction" },
    { text: "Page 2", link: "page-2" },
    { text: "Page 3", link: "page-3" },
  ],

  "Another Section": [
    { text: "Page 4", link: "page-4" },
  ],
};
```
