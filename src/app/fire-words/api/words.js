import config from '../../../fire'

export const addWord = word => {
  return fetch(`${config.databaseURL}/words.json`, {
    method: 'post',
    body: JSON.stringify(word)
  })
  .then(data => {
    if (data.ok) {
      return data.json()
    } else {
      throw new Error('Adding Word failed.  Unable to reach database!')
    }
  })
}

export const removeWord = id => {
  return fetch(`${config.databaseURL}/words/${id}.json`, { method: 'delete' })
}

export const fetchAllWords = () => {
  return fetch(`${config.databaseURL}/words.json`)
  .then(data => data.json())
}
