/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "../../public/styles/dashboard.module.scss";
import React, {useState} from 'react'
import { useRouter } from "next/navigation";
import AddIcon from "../../public/icons/MenuIcon";
import MenuIcon from "../../public/icons/MenuIcon";
import LineChart from "../../public/icons/LineChart";
import Database from "../../public/icons/Database";
import Shuffle from "../../public/icons/Shuffle";
import Location from "../../public/icons/Location";
import Search from "../../public/icons/Search";
import Question from "../../public/icons/Question";
import ArrowDown from "../../public/icons/ArrowDown";
import Person from "../../public/icons/Person";
import ChatIcon from "../../public/icons/ChatIcon";
import BellIcon from "../../public/icons/BellIcon";
import Account from "../icons/Account";
import Setting from "../icons/Setting";
import Keyboard from "../icons/Keyboard";
import Speaker from "../icons/Speaker";
import Logout from "../icons/Logout";

const Dashboard = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };   
   
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/dashboard/" + page);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navmain}>
      <h2 className={styles.icon}>TRAVEL <span style={{color:"#3968fa"}}>AGENT</span></h2>
        <div className={styles.nav1}>
          
          <ul>
            <li>
            
              <Link href="#">Duities</Link>
              <span><ArrowDown/></span>
            
            </li>
            <ul className={styles.submenu}>
                <li>
                  <Link href="/addBooking">Add Booking</Link>
                </li>
                <li>
                  <Link href="#">All Booking</Link>
                  
                </li>
                <li>
                  <Link href="/attention">Attention</Link>
                </li>
               
              </ul>
          </ul>

          <ul>
            <li>
            
              <Link href="#">Operations</Link>
              <span><ArrowDown/></span>
            </li>
            <ul className={styles.submenu}>

            <li>
              <Link href="/availability">
                Availability
              </Link>
            </li>
            <li>
            <Link href="/addBooking">
            Booking
              </Link>
                  
            </li>

                <li>
                  <a href="/billing">Billing</a>
                </li>

                <li>
                  <Link href="/receipts">Receipts</Link>
                  
                </li>

                <li>
                <Link href="/vehicleExpense"> Vehicle Expenses</Link> 
                 
                </li>

                <li>
                <Link href="/vehicleFuel">Vehicle Fuel</Link>
                  
                </li>

                <li>
                <Link href="/sms">SMS Detail</Link>
                  
                </li>

                <li>
                <Link href="/whatsapp">Whatsapp Messages</Link>
                  
                </li>

              </ul>
          </ul>

          <ul>
            <li>
              {/* <span>
                <LineChart />
              </span> */}
              <Link href="#">Reports</Link>
            </li>
          </ul>

          <ul>
            <li>
            
              <Link href="#">Masters</Link>
              <span><ArrowDown/></span>
            </li>
            <ul className={styles.submenu}>

                <li>
                <Link href="#">Duty Types</Link>
                  
                </li>

                <li>
                <Link href="#">Categories - vehicle Groups</Link>
                  
                </li>

                <li>
                <Link href="#">Taxes</Link>
                  
                </li>

                <li>
                <Link href="#"> Customers</Link>
                 
                </li>

                <li>
                <Link href="#"> Suppliers</Link>
                 
                </li>

                <li>
                <Link href="#">My Drivers</Link>
                  
                </li>

                <li>
                <Link href="#">My Vehicles</Link>
                  
                </li>

                <li>
                <Link href="#"> Billing Items</Link>
                 
                </li> 

              </ul>
          </ul>

          <ul>
            <li>
              {/* <span>
                <Shuffle />
              </span> */}
              <Link href="#">Network</Link>
            </li>
          </ul>

          <ul>
            <li>
              {/* <span>
                <Location />
              </span> */}
              <Link href="#">Location Tracking</Link>
            </li>
          </ul>

        </div>
        <div className={styles.nav2}>
          <ul>
            <li>
              <span>
                <Search />
              </span>
            </li>
            <li>
              <span><ChatIcon/></span>
            </li>
            <li>
              <span><BellIcon/></span>
            </li>
          </ul>
        

          <ul>
            <li>
                <a href="#">
                  <img src="/assets/people.png" alt="people" />
                </a>
            </li>
            <ul className={styles.submenu2}>
                <li>
                  <span><Person/></span>
                  <Link href="#">Profile</Link>
                  
                </li>

                <li>
                <span><Account/></span>
                <Link href="#">Your Account </Link>
                  
                </li>

                <li>
                <span><Setting/></span>
                <Link href="#"> Business Settings </Link>
                 
                </li>

                <li>
                <span><Keyboard/></span>
                  <Link href="#">Keyboard Shortcuts </Link>
                  
                </li>

                <li>
                <span><Speaker/></span>
                  <Link href="#">What new in Cab9 ? </Link>
                  
                </li>

                <li>
                <span><Logout/></span>
                  <Link href="#">Logout </Link>
                  
                </li>
            
              </ul>
          </ul>

    
        </div>
      </div>
      
      
    </div>

  );
};

export default Dashboard;
