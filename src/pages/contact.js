import React from 'react';

// import Footer from '../components/footer'
// import Header from '../components/header'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>rod.danaei@gmai.com</p>
      <p>
        <a 
          href="https://twitter.com/@rodvindan" 
          target="_blank" 
          rel="noopener noreferrer"
        >@rodvindan
        </a>
      </p>
    </Layout>
  )
  // return (
  //   <div>
  //     <Header />
  //     <h1>Contact</h1>
  //     <p>rod.danaei@gmai.com</p>
  //     <p><a href="https://twitter.com/@rodvindan" target="_blank" rel="noopener noreferrer">@rodvindan</a></p>
  //     <Footer />
  //   </div>
  // )
}

export default ContactPage