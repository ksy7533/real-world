import React from 'react'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Container: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Container
