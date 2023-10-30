/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../../../public/layout/navbar.module";
import styles from "../../../public/styles/newFuel.module.scss";
import SettingIcon from "../../../public/icons/SettingIcon";
import ArrowDown from "../../../public/icons/ArrowDown";
import RightIcon from "../../../public/icons/RightIcon";
import LeftIcon from "../../../public/icons/LeftIcon";
import LongIcon from "../../../public/icons/LongIcon";
import Search from "../../../public/icons/Search";
import Edit from "../../../public/icons/Edit";
import CheckIcon from "../../../public/icons/CheckIcon";

const newFuel = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/newFuel/" + page);
  };
  return (
    <>
      <Dashboard />

      <div className={styles.newbooking}>
        <span>
          <LeftIcon />
        </span>
        <h2>New Vehicle Fuel</h2>
      </div>

      <div className={styles.new1}>
        <form>
          <label>Supplier*</label>
          <select>
            <option>Select ....</option>
            <option>Honda</option>
            <option>Maruti</option>
            <option>Toyota</option>
            <option>Renault</option>
          </select>
        </form>

        <form>
          <label>Fuel Entry No.:*</label>
          <input type="number" />
        </form>
      </div>

      <div className={styles.new2}>
        <form>
          <label>Driver*</label>
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
          <label>Fuel Receipt number*</label>
          <input type="text" />
        </form>
      </div>

      <div className={styles.new2}>
        <form>
          <label>Vehicle*</label>
          <select>
            <option>Select..</option>
          </select>
        </form>
        <form>
          <label>Fuel Type*</label>
          <select>
            <option>Select..</option>
          </select>
        </form>
      </div>

      <div className={styles.new3}>
        <form>
          <label>Amount*</label>
          <input type="number" />
        </form>
      </div>

      <div className={styles.check}>
        <form>
          <input type="checkbox" />
          <p>Fuel Intent</p>
        </form>
        <form>
          <input type="checkbox" />
          <p>Fuel Tank?</p>
        </form>
      </div>

      <div className={styles.new2}>
        <form>
          <label>Fuel Station*</label>
          <select>
            <option>Select..</option>
            <option>1..</option>
            <option>2..</option>
            <option>3..</option>
          </select>
        </form>
        <form>
          <label>City*</label>

          <select>
            <option>Select..</option>
            <option>Kanpur</option>
            <option>Dellhi..</option>
            <option>Haryana..</option>
            <option>Punjab..</option>
          </select>
        </form>
      </div>

      <div className={styles.new2}>
        <form>
          <label>Quantity(in litres)*</label>
        <input type="number" />
        </form>
        <form>
        <p >Receipt</p>
        <input type="file"></input>
        </form>
      </div>
     
      <div className={styles.new4}>
        <form>
          <label>Current km</label>
          <input type="text" />
        </form>
      </div>

      <div className={styles.new4}>
        <form>
          <label>Amount</label>
          <input type="number" />
        </form>
      </div>

      <div className={styles.new4}>
        <form>
          <label>Paid by</label>
          <select>
          <option>Select...</option>
          <option>Paytm...</option>
          <option>Google Pay...</option>
          <option>Wallet...</option>
          <option>Amazon Pay...</option>
          </select>
        </form>
      </div>

      <div className={styles.submit}>
       
        <button>  <span><CheckIcon/></span>SUBMIT</button>
      </div> 
    </>
  );
};

export default newFuel;
