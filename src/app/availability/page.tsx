/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../../../public/layout/navbar.module";
import styles from "../../../public/styles/availability.module.scss";
import SettingIcon from "../../../public/icons/SettingIcon";
import ArrowDown from "../../../public/icons/ArrowDown";
import RightIcon from "../../../public/icons/RightIcon";
import LeftIcon from "../../../public/icons/LeftIcon";
import LongIcon from "../../../public/icons/LongIcon";
import Search from "../../../public/icons/Search";

const availability = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/availability/" + page);
  };
  return (
    <>
      <Dashboard />

      <div className={styles.contain1}>
        <span>
          <h1>
            <LeftIcon />
            Availability
          </h1>
        </span>

        <span className={styles.contain2}></span>
      </div>
      {/* <hr /> */}

      <div className={styles.searchsec}>
        <input
          type="search"
          placeholder="Type here to filter by vehicle,name,number,vehicle group, driver DCO supplier "
        />
        <button>
          <Search />
        </button>
        <div className={styles.searchfilter}>
          <span>
            <input type="date" />
            <LongIcon />
            <input type="date" />
          </span>
          <button>clear filters</button>
        </div>
      </div>

      <div className={styles.nodutiesec}>
        <p>
          Please select driver / vehicles / suppliers to see their availability
        </p>
      </div>
    </>
  );
};

export default availability;
