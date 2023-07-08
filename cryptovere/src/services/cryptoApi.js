import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "fa5a7c3cf3mshbbe5bc6bf78f47ap1a26acjsn9723c096bdd2",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = `https://coinranking1.p.rapidapi.com`;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (uuId) => createRequest(`/coin/${uuId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuId, timeperiod }) => createRequest(`coin/${uuId}/history?timeperiod=${timeperiod}`),
    }),
    // getExchanges: builder.query({
    //   query: () => createRequest('/exchanges'),
    // }),
    getExchanges: builder.query({
      query: () => createRequest('/gettopcoinsbymentions')
  }),
  getTopByFollowers: builder.query({
      query: () => createRequest('/gettopcoinsbyfollowers')
  }),
  getTopBySentiment: builder.query({
      query: () => createRequest('/gettopcoinsbysentiment')
  }),
  }),
});
export const { useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery, useGetTopByFollowersQuery,
  useGetTopBySentimentQuery } = cryptoApi;
