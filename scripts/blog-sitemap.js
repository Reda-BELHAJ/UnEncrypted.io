// import { getAllPostSlugs } from '../Lib/mdx'
// import { SitemapStream, streamToPromise } from 'sitemap'
// import { Readable } from 'stream'
// const fs = require('fs');

// export default async (req, res) => {
//     try {
//         const links = [];
//         const posts = getAllPostSlugs();

//         posts.map((post) => {
//             links.push({
//             url: `/blog/${post.params.slug}`,
//             changefreq: "daily",
//             priority: 0.9,
//             });
//         });

//         const pages = ["/about", "/tags", "/blog"];
//         pages.map((url) => {
//             links.push({
//             url,
//             changefreq: "daily",
//             priority: 0.9,
//             });
//         });
    
//         const stream = new SitemapStream({
//             hostname: `https://${req.headers.host}`,
//         });
    
//         res.writeHead(200);
    
//         const xmlString = await streamToPromise(
//             Readable.from(links).pipe(stream)
//         ).then((data) => data.toString());
    
//         res.end(xmlString);

//     } catch (e) {
//         console.log(e);
//         res.send(JSON.stringify(e));
//     }
// };