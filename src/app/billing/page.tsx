/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../../../public/layout/navbar.module";
import styles from "../../../public/styles/billing.module.scss";
import SettingIcon from "../../../public/icons/SettingIcon";
import ArrowDown from "../../../public/icons/ArrowDown";
import RightIcon from "../../../public/icons/RightIcon";
import LeftIcon from "../../../public/icons/LeftIcon";
import LongIcon from "../../../public/icons/LongIcon";
import Search from "../../../public/icons/Search";
import Edit from "../../../public/icons/Edit";

const billing = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/billing/" + page);
  };
  return (
    <>
      <Dashboard />

      <div className={styles.contain1}>
        <h1>Billing</h1>
        <span className={styles.contain2}>
          <button>Add Invoice</button>
          <span>
            <SettingIcon />
            <ArrowDown />
          </span>
        </span>
      </div>

      <div className={styles.searchsec}>
        <input
          type="search"
          placeholder="Type here to filter customer, bookedby, passenger or invoice number status"
        />
        <button>
          <Search />
        </button>
        <div className={styles.searchfilter}>
          <span>
            <LeftIcon />
            <input type="date" placeholder="Start Date" />
            <LongIcon />
            <input type="date" placeholder="End Date" />
            <RightIcon />
          </span>
          <button>clear filters</button>
        </div>
      </div>

      <div className={styles.nodutiesec}>
        <p>
          Before you can start invoices, you need to set an 'Code'. This would
          be the initial two letter of your invoice number. For example,if
          C178000001 is your invoice number you need to set the two initial
          letters 'IC'{" "}
        </p>
      </div>
      <div className={styles.attentionsec}>
        <button onClick={() => router.push("/editCompany")}>
          {" "}
          <span className={styles.svg}>
            <Edit />
          </span>{" "}
          Edit Company
        </button>
      </div>
    </>
  );
};

export default billing;
