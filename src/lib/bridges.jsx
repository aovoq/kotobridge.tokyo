import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dataDirectory = path.join(process.cwd(), 'bridge-data')

export const getSortedData = () => {
   const fileNames = fs.readdirSync(dataDirectory)
   const allData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '')

      const fullPath = path.join(dataDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents)

      return { id, ...matterResult.data }
   })
}

export const getAllDataIds = () => {
   const fileNames = fs.readdirSync(dataDirectory)

   return fileNames.map((fileName) => {
      return {
         params: {
            id: fileName.replace(/\.md$/, ''),
         },
      }
   })
}

export const getData = (id) => {
   const fullPath = path.join(dataDirectory, `${id}.md`)
   const fileContents = fs.readFileSync(fullPath, 'utf8')

   const matterResult = matter(fileContents)

   return {
      id,
      ...matterResult.data,
   }
}
