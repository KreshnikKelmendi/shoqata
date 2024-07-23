import React from 'react'
import Banner from '../components/Banner/Banner'
import ImportantDates from '../components/dates/ImportantDates'
import DataBanner from '../components/Banner/DataBanner'
import Sponsor from '../components/Banner/Sponsor'
import Description from '../components/venue/Description'
import PricingBanner from '../components/dates/PricingBanner'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Description />
      <ImportantDates />
      <PricingBanner />
      <Sponsor />
      <DataBanner />
    </>
  )
}

export default HomePage