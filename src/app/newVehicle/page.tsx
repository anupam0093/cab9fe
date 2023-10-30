/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../../../public/layout/navbar.module";
import styles from "../../../public/styles/newVehicle.module.scss";
import SettingIcon from "../../../public/icons/SettingIcon";
import ArrowDown from "../../../public/icons/ArrowDown";
import RightIcon from "../../../public/icons/RightIcon";
import LeftIcon from "../../../public/icons/LeftIcon";
import LongIcon from "../../../public/icons/LongIcon";
import Search from "../../../public/icons/Search";
import Edit from "../../../public/icons/Edit";
import CheckIcon from "../../../public/icons/CheckIcon";

const newVehicle = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/newVehicle/" + page);
  };
  return (
    <>
      <Dashboard />
      
      <div className={styles.newbooking}>
        <span>
          <LeftIcon />
        </span>
        <h2>New Vehicle Expenses</h2>
      </div>

      <div className={styles.new1}>
        <form>
          <label>Vehicle*</label>
          <select>
            <option>Select ....</option>
            <option>Honda</option>
            <option>Maruti</option>
            <option>Toyota</option>
            <option>Renault</option>
          </select>
        </form>

        <form>
          <label>Vehicle Exp.No.:*</label>
          <input type="number" />
        </form>
      </div>

      <div className={styles.new2}>
        <form>
          <label>Supplier Garage*</label>
          <select>
            <option>Select ...</option>
            <option>Honda</option>
            <option>Maruti</option>
            <option>Toyota</option>
            <option>Renault</option>
          </select>
        </form>

        <form>
          <label>Date.:*</label>
          <input type="date" />
        </form>
      </div>

      <div className={styles.new3}>
        <form>
          <label>Expense Type*</label>
          <select>
            <option>Select ...</option>
            <option>Honda</option>
            <option>Maruti</option>
            <option>Toyota</option>
            <option>Renault</option>
          </select>
        </form>
      </div>

      <div className={styles.new3}>
        <form>
          <label>Vehicle Speedo KM*</label>
          <input type="number" />
        </form>
      </div>

      <div className={styles.new3}>
        <form>
          <label>Amount*</label>
          <input type="number" />
        </form>
      </div>

      <div className={styles.new3}>
        <form>
          <label>Payment mode*</label>
          <select>
            <option>Select..</option>
            <option>Paytm</option>
            <option>Phone Pay</option>
            <option>COD</option>
          </select>
        </form>
      </div>

      <div className={styles.new3}>
        <form>
          <label>Bank Account*</label>
          <select>
            <option>Select..</option>
            <option>Paytm</option>
            <option>Phone Pay</option>
            <option>COD</option>
          </select>
        </form>
      </div>

      <div className={styles.div4}>
        <span>
          <p>Receipts</p>
        </span>
        <button>Add Receipt</button>
      </div>

      <div className={styles.new3}>
        <form action="">
          <textarea placeholder="Notes"></textarea>
        </form>
      </div>
      <div className={styles.submit}>
       
        <button>  <span><CheckIcon/></span>SUBMIT</button>
      </div>
    </>
  );
};

export default newVehicle;
