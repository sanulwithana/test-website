import {createClient} from '@sanity/client'

const client = createClient({

  projectId: 'eeksv8lg',
  dataset: 'production',

  useCdn: false,
  apiVersion: '2024-03-31',
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})


// const data = await client.fetch(`count(*)`)
// console.log(`Number of documents: ${data}`)
// // uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "post"]')
//   return posts
// }

// export async function createPost(post) {
//   const result = client.create(post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({title})
//   return result
// }

export default client;

