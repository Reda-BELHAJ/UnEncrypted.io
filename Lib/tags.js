import fs from 'fs'
import { getAllBlogPosts } from './mdx'

export async function getAllTags() {
    const blogs = await getAllBlogPosts();

    let tagCount = {}
    
    blogs.forEach(
        (blog) => blog.data.tags.forEach(
            (tag) => {
                const tagUpp = tag.toUpperCase()
                if (tagUpp in tagCount){
                    tagCount[tagUpp] += 1
                }
                else {
                    tagCount[tagUpp] = 1
                }
            }
        )
    )

    var sortable = [];
    for (var tag in tagCount) {
        sortable.push([tag, tagCount[tag]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    return sortable
}

export function getCatBlog({tag}){
    const Blogs = getAllBlogPosts();
    
    return Blogs.filter(
      blog => blog.data.tags.includes(tag)
    )
  }