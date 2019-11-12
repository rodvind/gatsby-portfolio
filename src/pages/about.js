import React from 'react';
import { Link } from 'gatsby'

// import Footer from '../components/footer'
// import Header from '../components/header'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About Me</h1>
      <p>I'm trying hard here to get experienced in this field</p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
  // return (
  //   <div>
  //     <Header />
  //     <h1>About Me</h1>
  //     <p>I'm trying hard here to get experienced in this field</p>
  //     <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
  //     <Footer />
  //   </div>
  // )
}

export default AboutPage