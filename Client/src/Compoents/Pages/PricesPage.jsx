import React from 'react';
import styles from "./Prices.module.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import MonthlyPage from './MonthlyPage';
import YearlyPage from './YearlyPage';
import { Link } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Box
} from '@chakra-ui/react'

const PricesPage = () => {
  return (
    <div>
        <div className={styles.headContainer}>
          <h2 className={styles.heading}>Simple pricing</h2>
          <h4 className={styles.subheading}>Start with no commitment. Try everything. Subscribe when you love it.</h4>
        </div>
        {/* month year selector */}
        <div>
        <Tabs variant='soft-rounded'>
             <TabList className={styles.toggler} >
               <Tab _selected={{ color: 'green.400', bg: 'white', height:"26px" }}     >Monthly</Tab>
               <Tab _selected={{  color: 'green.400', bg: 'white', height:"26px" }}    >Yearly</Tab>
             </TabList>
             <TabPanels>
               <TabPanel>
                 <MonthlyPage/>
               </TabPanel>
               <TabPanel>
                <YearlyPage/>
               </TabPanel>
             </TabPanels>
       </Tabs>
            <div className={styles.currency}>
                <p>Currency</p>
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <p>USA</p>
                <i style={{color:"#575757"}} class="fa-sharp fa-solid fa-caret-down"></i>
            </div>
        </div>

        <div className={styles.qAndA}>
            <div className={styles.qAndALeft}>
              <div>
              <h2>Your questions. Answered!</h2>
              <h4 >Here is a list of the most frequently asked questions. Got others or some ideas? — <Link color='teal.500' href='#'>
              Contact us!
                </Link></h4> 
              </div>
              <div className={styles.imgcont}>
                <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp" alt="" />
              </div>
            </div>
            <div className={styles.qAndARight}>
                <Accordion  allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>What's the trial period purpose?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  When you sign up, you get a fully-functional account for 2 weeks, which gives you access to everything Everhour has to offer. After 14 days, you will need to pick a plan and enter your credit card details. We’ll email you a couple of days before your trial expires to remind you
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>What means 'Starting at x users'?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  Yes, you can upgrade your plan at any time. You will be credited for the remainder of your current plan and charged for your new plan when you upgrade
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>What means 'Starting at x users'?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  When you sign up, you get a fully-functional account for 2 weeks, which gives you access to everything Everhour has to offer. After 14 days, you will need to pick a plan and enter your credit card details. We’ll email you a couple of days before your trial expires to remind you
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>Can I change my plan later?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  Yes, you can upgrade your plan at any time. You will be credited for the remainder of your current plan and charged for your new plan when you upgrade. 
                  </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>Can I add or remove members at any time?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  Absolutely! Everhour is pay-as-you-go, and you can easily add or remove members from your account with a couple of clicks.
                  </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>What if I want to cancel my service?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  No problem. If you decide Everhour isn’t for you (or you just need to pause), simply cancel before your next billing period. This date is listed on your billing page. Unfortunately, we can’t refund you for partial use or the amount of time left in your subscription. Also, after cancelling, you can no longer subscribe to the legacy plans, only plans currently listed on our Pricing page. 
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>What kind of payment methods do you accept?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  We currently accept any credit or debit card with a MasterCard, Visa, Discover Network, American Express, Diners Club International or JCB logo. 
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                      <p style={{paddingTop:"10px", paddingBottom:"10px"}}>Which currency will I be charged in?</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  We charge you in US dollars. However, the debit currency depends on your card and your bank.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
        </div>

        <div className={styles.endpart}>
         <div className={styles.endpartLeft}>
         <h2 className={styles.heading}>Take control of your time with Everhour</h2>
          <h4 className={styles.subheading}>Beautiful integrations. Intuitive interface. No unexpected fees</h4>
            <div>
                  <div className={styles.inputbox}>
                  <input placeholder='Work email...' type="email" />
                  </div>
            </div>
         </div>
         <div className={styles.endpartRight}></div>
        </div>
    </div>
  )
}

export default PricesPage