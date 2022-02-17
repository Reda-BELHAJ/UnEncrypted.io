import { FaTwitter } from "react-icons/fa";

function BlogShare({frontMatter}) {
  return (
    <>
      <div className="text-center py-5">
        <button className="bg-green-300 dark:bg-green-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <FaTwitter />
          <a
            className="twitter-share-button"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${
              frontMatter.title
            } by @RedatoB&url=https://unencrypted.vercel.app/blog/${
              frontMatter.title.split(" ").join("-").toLowerCase()
            }&hashtags=${frontMatter.tags}`}
          >
            Tweet
          </a>
        </button>
      </div>
    </>
  );
}

export default BlogShare;