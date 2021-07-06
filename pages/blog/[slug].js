import { getAllPostSlugs, getPostdata } from "../../Lib/mdx";
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
  const paths = getAllPostSlugs();
  return {
    paths,
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