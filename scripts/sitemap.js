const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require('fs');
const path = require('path');

const postDirectory = path.join(process.cwd(), "_content");

(async () => {
    const links = [];
    const fileNames = fs.readdirSync(postDirectory);

    const posts = fileNames.map((filename) => {
        return {
            params: {
                slug: filename.replace(/\.mdx/, '')
            }
        };
    });;

    posts.map((post) => {
        links.push({
            url: `/blog/${post.params.slug}`,
        });
    });

    const pages = ["/about", "/tags", "/blog"];
    pages.map((url) => {
        links.push({
            url,
        });
    });

    const stream = new SitemapStream({
        hostname: 'https://unencrypted.vercel.app/',
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());
    
    fs.writeFileSync('public/sitemap.xml', xmlString);
})();