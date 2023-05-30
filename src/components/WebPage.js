import React from 'react'
import Header from './Header'
import Footer from './Footer'
import StickyFooter from './StickyFooter'
// import FaqComponent from './FaqComponent'
// import InviteFriend from './InviteFriend'

const WebPage = ({children}) => {
  return (
    <>
        <div className='container-fluid p-0' style={{backgroundColor: '#f9f5f3'}}>
            <Header />

                <main className='h-100vh'>

                    {children}

                </main>

            <Footer />
            <StickyFooter />
        </div>
    </>
  )
}

export default WebPage