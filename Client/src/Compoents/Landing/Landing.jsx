import React from 'react';

import  Navbar  from '../Navbar/Navbar'

import Frontpage from '../Frontpage/Frontpage'
import Section from '../Section/Section';
import Test from '../Section/Section';
import SplitScreen from '../Mproject/Mproject';
import Footer from '../../Footer/Footer';

const Landing = () => {
  return (
    <div>
             <Navbar/>
<Frontpage/>
<Test/>
{/* <Section/> */}
<SplitScreen/>
<Footer/>
    </div>
  )
}

export default Landing