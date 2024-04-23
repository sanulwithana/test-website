import {createClient} from '@sanity/client'

const client = createClient({

  projectId: 'eeksv8lg',
  dataset: 'production',

  useCdn: true,
  apiVersion: '2024-03-31',
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})


export default client;

