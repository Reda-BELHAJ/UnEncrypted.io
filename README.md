# UnEncrypted.io

Unencrypted is my personal slice of the internet that provides a platform for my writing and to showcase my latest work. Supports dark mode and easy to write blogs using markdown. So In this article, I'm going to break down how my blog works and why i build it.

## Running Locally

```bash
$ git clone ...
$ cd ...
$ yarn
$ yarn dev
```

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)
- [Frame Motion](https://www.framer.com/motion/)

For others plugins and dependencies take a look at [package.json](https://github.com/Reda-BELHAJ/UnEncrypted.io/blob/main/package.json) 

## Content Constraint

those are some constraint:

1. The filename should be the same as the title of the blog (content) and should be lowercase.
```
    Title :Test testy GTR
    Filename :test-testy-gtr
```

2. The frontMatter of the content:
```md
    ---
    title: "Test testy"
    date: "10-10-2020"
    author: "Reda BELHAJ"
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing."
    tags: ["Tailwindcss","Next.js", "React.js", "Web dev", "Test"]
    image: "/images/TheWeeknd.jpg"
    ---
```

3. For the tags just the first letter that has to be in uppercase the rest should be lowercase
