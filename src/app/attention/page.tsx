/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../../../public/layout/navbar.module";
import styles from "../../../public/styles/attention.module.scss";
import SettingIcon from "../../../public/icons/SettingIcon";
import ArrowDown from "../../../public/icons/ArrowDown";
import RightIcon from "../../../public/icons/RightIcon";
import LeftIcon from "../../../public/icons/LeftIcon";
import LongIcon from "../../../public/icons/LongIcon";
import Search from "../../../public/icons/Search";

const attention = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/attention/" + page);
  };
  return (
    <>
      <Dashboard />



      <div className={styles.contain1}>
        <span>
        <h1> <LeftIcon/> Duties</h1>
        </span>
        
        <span className={styles.contain2}>
          <button onClick={() => router.push("/addBooking")}>
            Add booking
          </button>
          <span>
            <SettingIcon />
            <ArrowDown />
          </span>
        </span>
      </div>
      {/* <hr /> */}
      <div className={styles.upcomingtab}>
        <ul>
          <li>Upcoming</li>
          <li>booked</li>
          <li>alloted</li>
          <li>dispatched</li>
          <li>completed</li>
          <li>billed</li>
          <li>cancelled</li>
          <li>all</li>
          <li>incoming</li>
          <li className={styles.active}>needs attention</li>
        </ul>
      </div>

      <div className={styles.searchsec}>
        <input
          type="search"
          placeholder="Type here to filter by name,number,city,duty type or booking ID"
        />
        <button>
          <Search />
        </button>
        <div className={styles.searchfilter}>
          <span>
            <LeftIcon />
            <input type="date" />
            <LongIcon />
            <input type="date" />
            <RightIcon />
          </span>
          <button>clear filters</button>
        </div>
      </div>

      <div className={styles.attentionsec}>
        <p>attention</p>
      </div>

      <div className={styles.nodutiesec}>
        <p>No duties.</p>
      </div>
    </>
  );
};

export default attention;
