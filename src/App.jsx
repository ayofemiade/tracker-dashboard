import { useState } from 'react'
import { Button, Box } from "@chakra-ui/react"

import Header from './components/Header'
import Footer from './components/Footer'
import ExpenseChart from './components/ExpenseChart'




function App() {


  return (
    <>
    
      <Header />
      <ExpenseChart />
      <Footer />
    </>
  )
}

export default App
