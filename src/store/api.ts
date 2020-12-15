import axios from 'axios'
import { CategoriesCallback, Entrie, ICallback, DetailCallback } from './models'

export const publicApi = axios.create({
  baseURL: 'https://api.publicapis.org'
})

export async function getAnimalsEntries (callback: ICallback) {
  await publicApi
    .get('/entries')
    .then(response => {
      callback(response.data.entries as Entrie[])
    })
    .catch(error => console.error(error))
}

export async function getCategories (callback: CategoriesCallback) {
  await publicApi
    .get('/categories')
    .then(response => {
      callback(response.data as string[])
    })
    .catch(error => console.error(error))
}

export async function getRandomApi (callback: DetailCallback) {
  await publicApi
    .get('/random')
    .then(response => {
      callback(response.data.entries[0] as Entrie)
    })
    .catch(error => console.error(error))
}

export async function getDetailsApi (title: string, callback: DetailCallback) {
  await publicApi
    .get('/entries?title=' + title)
    .then(response => {
      callback(response.data.entries[0] as Entrie)
    })
    .catch(error => console.error(error))
}

export async function getRelatedItems (callback: ICallback) {
  await publicApi
    .get('/entries', {
      params: {
        category: 'animals'
      }
    })
    .then(response => {
      callback(response.data.entries as Entrie[])
    })
    .catch(error => console.error(error))
}
