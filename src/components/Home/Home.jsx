import React from 'react'
import Header from '../Header/Header'
import Catagory from './JobCatagory/Catagory'
import Jobs from './FeaturedJobs/Jobs'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Catagory></Catagory>
      <Jobs></Jobs>
    </div>
  )
}
