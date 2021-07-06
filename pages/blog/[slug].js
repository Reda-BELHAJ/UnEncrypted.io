import { getAllPostSlugs, getPostdata } from "../../Lib/mdx";
import matter from "gray-matter";

export default function Posts({ source, frontMatter }) {
  return (
    <>
      <div className="p-12 mx-auto max-w-5xl prose prose-green md:prose-lg lg:prose-xl text-gray-900 dark:text-gray-50">
          <h1>
            {frontMatter.title}
          </h1>
          <div>
            {source}
          </div>
      </div>
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