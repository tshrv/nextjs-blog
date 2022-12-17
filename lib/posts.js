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