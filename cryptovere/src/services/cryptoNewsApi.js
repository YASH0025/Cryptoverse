import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'fa5a7c3cf3mshbbe5bc6bf78f47ap1a26acjsn9723c096bdd2',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
  const baseUrl = `https://bing-news-search1.p.rapidapi.com`

  const createRequest= (url) => ({url, headers: cryptoNewsHeaders})
 

export const cryptoNewsApi= createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints:(builder) =>({
        getCryptoNews : builder.query({
            query:({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} =  cryptoNewsApi