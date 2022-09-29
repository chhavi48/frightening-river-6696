import React from 'react'
import styles from "./Yearly.module.css"

const MonthlyPage = () => {
  return (
    <div className={styles.pageContainer}>
        <div className={styles.free}>
            <div className={styles.freebox}>
                <div className={styles.bar}></div>
                <h2 className={styles.heading}>Free</h2>
                <h4 className={styles.subheading}>Simple time tracking and reporting for freelancers and small teams.</h4>
                <div className={styles.priceCont}>
                    <div className={styles.pricedollar}><i style={{color:"#57BB71"}} class="fa-regular fa-dollar-sign "></i>
                    <h5 className={styles.pricenum}>0</h5>
                    </div>
                    <h6 >Free for up to 5 users</h6>
                </div>
                <div  className={styles.getStarted}>
                    <p>Get Started</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Unlimited time tracking</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Unlimited projects</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#4a90e2"}}>Website integrations</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Unlimited reports</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Add time for others</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Export reports</p>
                </div>
            </div>
        </div>

        <div className={styles.lite}>
        <div className={styles.freebox}>
                <div style={{backgroundColor:"#93cbee"}} className={styles.bar}></div>
                <h2 className={styles.heading}>Lite</h2>
                <h4 className={styles.subheading}>More control, more features yet at a very affordable price.</h4>
                <div className={styles.priceCont}>
                    <div className={styles.pricedollar}><i style={{color:"#57BB71"}} class="fa-regular fa-dollar-sign "></i>
                    <h5 className={styles.pricenum}>5</h5>
                    </div>
                    <h6 >/ user / month, starting at 2 users</h6>
                </div>
                <div  className={styles.getStarted}>
                    <p>Get Started</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Up to 10 users</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Clients</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px"}}>Billable rates, costs, profit</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Budgets</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Invoicing</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Lock time entries at certain rules</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Reminders</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Schedule reports via email</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Fast and responsive support</p>
                </div>
            </div>
        </div>
        <div className={styles.team}>
        <div className={styles.freebox}>
                <div style={{backgroundColor:"#8eddb2"}} className={styles.bar}></div>
                <h2 className={styles.heading}>Team</h2>
                <h4 className={styles.subheading}>For teams and companies that need all features, plus best-in-class integrations.</h4>
                <div className={styles.priceCont}>
                    <div className={styles.pricedollar}><i style={{color:"#57BB71"}} class="fa-regular fa-dollar-sign "></i>
                    <h5 className={styles.pricenum}>8</h5>
                    </div>
                    <h6 >/ user / month, starting at 5 users</h6>
                </div>
                <div  className={styles.getStarted}>
                    <p>Get Started</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Unlimited users</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Time approval</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px"}}>Time tracking audits</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Time cards</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#4a90e2"}}>Time off</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Expenses</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Scheduling</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Optional screenshots</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Single sign-on (SSO)</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Retainers </p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Folders in reports</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Expenses</p>
                </div>
                <div className={styles.listCont}>
                    <div className={styles.checkBox}>
                    <i style={{color:"#57BB71"}} class="fa-solid fa-check"></i>
                    </div>
                    <p style={{fontSize:"14px", color:"#333333"}}>Priority support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MonthlyPage