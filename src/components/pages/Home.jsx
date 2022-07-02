import React from 'react'
import { Banner } from '../ui/Banner'
import { Exercises } from '../ui/Exercises'
import { HorizontalScrollbar } from '../ui/HorizontalScrollbar'
import { SearchExercises } from '../ui/SearchExercises'

export const Home = () => {
  return (
    <>
    <Banner />
    <SearchExercises />
    <HorizontalScrollbar />
    <Exercises />
    </>
  )
}
