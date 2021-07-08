import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getAllBlogPosts } from './mdx'

export async function getAllTags(type) {
  const blogs = await getAllBlogPosts();

  let tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
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

  return tagCount
}