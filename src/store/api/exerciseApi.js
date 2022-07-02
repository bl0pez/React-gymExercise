import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const exerciseApi = createApi({

    reducerPath: 'exercises',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://exercisedb.p.rapidapi.com',
    }),
    endpoints: (builder) => ({
        getExercises: builder.query({
            query: (bodypart) => (
                
                {
                url: '/exercises',
                headers: {
                    'X-RapidAPI-Key': 'c608a3fc65msh977080463705dcfp1468c0jsn6fc88ae12e0f',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                  }
            }),
        }),
        getBodyParts: builder.query({
            query: () => ({
                url: '/exercises/bodyPartList',
                headers: {
                    'X-RapidAPI-Key': 'c608a3fc65msh977080463705dcfp1468c0jsn6fc88ae12e0f',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                  }
            }),
        }),
    })

});


export const { useGetExercisesQuery, useGetBodyPartsQuery } = exerciseApi;