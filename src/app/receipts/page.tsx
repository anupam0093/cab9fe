/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../../../public/layout/navbar.module";
import styles from "../../../public/styles/receipts.module.scss";
import SettingIcon from "../../../public/icons/SettingIcon";
import ArrowDown from "../../../public/icons/ArrowDown";
import RightIcon from "../../../public/icons/RightIcon";
import LeftIcon from "../../../public/icons/LeftIcon";
import LongIcon from "../../../public/icons/LongIcon";
import Search from "../../../public/icons/Search";
import Edit from "../../../public/icons/Edit";

const receipts = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/receipts/" + page);
  };
  return (
    <>
      <Dashboard />
      <div className={styles.contain1}>
         <h1>Receipts</h1>
         <span className={styles.contain2}>
          <button>
            Add New Receipt
          </button>
          <span>
            <SettingIcon />
            <ArrowDown />
          </span>
         </span>
     </div>
     <hr />
     

     <div className={styles.searchsec}>
       <input type="search" placeholder='Type here to filter customer, name, customer group or receipt number '/>
       <button>
       <Search />
       </button>
       <div className={styles.searchfilter}>
         <span>
          <LeftIcon />
          <input type="date" placeholder='Start Date' />
          <LongIcon />
          <input type="date" placeholder='End Date' />
          <RightIcon />
         </span>
         <button>
          clear filters
         </button>
       </div>
     </div>

     


  

    </>
  );
};

export default receipts;
