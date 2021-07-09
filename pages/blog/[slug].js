import { getSlugs, getPostdata } from "../../Lib/mdx";
import matter from "gray-matter";
import BlogLayout from "../../Layouts/BlogLayout";

export default function Posts({ source, frontMatter }) {
  return (
    <>
      <BlogLayout source={source} frontMatter={frontMatter}/>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getSlugs();
  console.log(slugs)
  return {
    paths: slugs.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);

  return {
    props: {
      source: content,
      frontMatter: data
    }
  };
}