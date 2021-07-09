import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postDirectory = path.join(process.cwd(), "_content");

export const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(postDirectory, filename);
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    return {
      slug,
      ...frontmatter,
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx/, '')
      }
    };
  });
};

export const getPostdata = async (slug) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};

export const getAllBlogPosts = () => {
  const allFiles = fs.readdirSync(postDirectory);
  const allBlogs = [];

  allFiles.map((file) => {
    const filePath = path.join(postDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const readTime = readingTime(content);
    allBlogs.push({ data, readTime });
  });

  allBlogs.sort(function(a, b) {
    var dateA = new Date(a.data.date), dateB = new Date(b.data.date);
    return dateA - dateB;
});

  return allBlogs;
};