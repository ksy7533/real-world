import React from 'react'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Container: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Container
