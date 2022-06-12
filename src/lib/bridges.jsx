import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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

   return allData
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

export const getData = async (id) => {
   const fullPath = path.join(dataDirectory, `${id}.md`)
   const fileContents = fs.readFileSync(fullPath, 'utf8')

   const matterResult = matter(fileContents, { sections: true})

   const jaContent = await remark()
      .use(html)
      .process(matterResult.content)
   const jaHtml = jaContent.toString()

   let enHtml
   if (matterResult.sections.length === 1) {
      const enContent = await remark()
         .use(html)
         .process(matterResult.sections[0].content)
      enHtml = enContent.toString()
   } else {
      enHtml = jaHtml
   }

   return {
      id,
      ...matterResult.data,
      jaHtml,
      enHtml
   }
}
