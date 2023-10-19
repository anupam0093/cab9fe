/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "../../../public/styles/dashboard.module.scss";
import React, {useState} from 'react'
import { useRouter } from "next/navigation";
import AddIcon from "../../../public/icons/AddIcon";
import MenuIcon from "../../../public/icons/MenuIcon";
import LineChart from "../../../public/icons/LineChart";
import Database from "../../../public/icons/Database";
import Shuffle from "../../../public/icons/Shuffle";
import Location from "../../../public/icons/Location";
import Search from "../../../public/icons/Search";
import Question from "../../../public/icons/Question";
import ArrowDown from "../../../public/icons/ArrowDown";
import Person from "../../../public/icons/Person";
import ChatIcon from "../../../public/icons/ChatIcon";
import BellIcon from "../../../public/icons/BellIcon";
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
                <li>Add Booking</li>
                <li>All Booking</li>
                <li>Attention</li>
               
              </ul>
          </ul>

          <ul>
            <li>
            
              <Link href="#">Operations</Link>
              <span><ArrowDown/></span>
            </li>
            <ul className={styles.submenu}>
                <li>Booking</li>
                <li>Billing</li>
                <li>Receipts</li>
                <li>Vehicle Expenses</li>
                <li>Vehicle Fuel</li>
                <li>SMS Detail</li>
                <li>Whatsapp Messages</li>
               
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
                <li>Duty Types</li>
                <li>Categories - vehicle Groups</li>
                <li>Taxes</li>
                <li>Customers</li>
                <li>Suppliers</li>
                <li>My Drivers</li>
                <li>My Vehicles</li>
                <li>Billing Items</li>  
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
                <span></span>
                <Link href="#">Your Account </Link>
                  
                </li>

                <li>
                <span></span>
                <Link href="#"> Business Settings </Link>
                 
                </li>

                <li>
                <span></span>
                  <Link href="#">Keyboard Shortcuts </Link>
                  
                </li>

                <li>
                <span></span>
                  <Link href="#">What new in Cab9 ? </Link>
                  
                </li>

                <li>
                <span></span>
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
