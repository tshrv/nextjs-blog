import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPosts() {
    const fileNames = fs.readdirSync(postsDirectory)
    const postsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const filePath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf-8')
        const matterResult = matter(fileContents)
        
        let postData = {
            id,
            ...matterResult.data
        }
        return postData

    })
    const sortedPostsData = postsData.sort((a, b) => {
        if (a.date > b.date) return 1
        else return -1
    })
    console.log(sortedPostsData)
    return sortedPostsData
}

export function getPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export function getPostData(slug) {
    console.log(slug)
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)
    const data = {
        slug,
        ...matterResult.data
    }
    console.log(data)
    return data
}