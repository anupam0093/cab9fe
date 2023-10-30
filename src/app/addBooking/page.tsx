"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Dashboard from "../../../public/layout/navbar.module";
import styles from "../../../public/styles/addbooking.module.scss";
import LeftIcon from "../../../public/icons/LeftIcon";
import PlusIcon from "../../../public/icons/PlusIcon";

const Booking = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/booking/" + page);
  };

  return (
    <>
      <Dashboard />

      <div className={styles.newbooking}>
          <span>
            <LeftIcon />
          </span>
        <h2>New Booking</h2>
      </div>
      {/* <hr /> */}
      <div className={styles.travelagent}>
        <p>
          Create booking for <b>Travel Agent</b>. <a href="#">Change</a>
        </p>
      </div>
      <div className={styles.customersec}>
        <p>customer*</p>
        <a href="#">View customer notes</a>
      </div>
      <div className={styles.travelagentsec}>
        <select name="" id="">
          <option value="">Travel Agent</option>
          <option value="">Aditya</option>
          <option value="">Anil</option>
          <option value="">Shazad</option>
          <option value="">Krishna</option>
          <option value="">Raz</option>
        </select>
        <button>Add new customer</button>
      </div>

      <div className={styles.bookedbysec}>
        <div className={styles.passengersec}>
          <h2>Booked By/Passenger</h2>
          <a href="#">Add additional contacts</a>
        </div>
        <div className={styles.inputsec}>
          <form action="">
            <div className={styles.firstform}>
              <input type="name" placeholder="Booked By Name" />
              <input type="number" placeholder="Booked By Phone Number" />
              <input type="email" placeholder="Booked By Email" />
            </div>
            <div className={styles.secondform}>
              <input type="name" placeholder="Passenger Name" />
              <input type="number" placeholder="Passenger Phone Number" />
              <input type="email" placeholder="Passenger Email" />
              <button>X</button>
            </div>
          </form>
        </div>
        <button>
          <span>
            <PlusIcon />
          </span>
          Add another passenger
        </button>
      </div>

      <div className={styles.servicesec}>
        <form action="">
          <label htmlFor="">From(service Location)*</label>
          <select>
            <option>(Selct Option)</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
          </select>
        </form>
        <form action="">
          <label htmlFor="">To</label>
          <select>
            <option>(Select Option)</option>
            <option>Pune</option>
            <option>Kashmir</option>
            <option>Kanyakumari</option>
            <option>Chennai</option>
          </select>
        </form>
        <form action="">
          <label htmlFor="">Vehicle Group*</label>
          <select>
            <option>(Select One)</option>
            <option>(Dzire)</option>
            <option>(Innova cryta)</option>
            <option>(Honda city)</option>
            <option>(BMW XLS)</option>
          </select>
        </form>
        <form action="">
          <label htmlFor="">Duty Type*</label>
          <select>
            <option>(Select One)</option>
            <option>(Select Two)</option>
            <option>(Select Three)</option>
          </select>
        </form>
      </div>

      <div className={styles.servicesec}>
        <form action="">
          <label htmlFor="">Start Date*</label>
          <input type="date" />
        </form>
        <form action="">
          <label htmlFor="">End Date*</label>
          <input type="date" />
        </form>
        <form action="">
          <label htmlFor="">Rep. Time*</label>
          <select>
            <option>00:00</option>
            <option>0:30</option>
            <option>01:00</option>
            <option>01:30</option>
            <option>02:00</option>
            <option>02:30</option>
            <option>03:00</option>
            <option>03:30</option>
            <option>04:00</option>
            <option>04:30</option>
            <option>05:00</option>
            <option>05:30</option>
            <option>06:00</option>
            <option>06:30</option>
            <option>07:00</option>
            <option>07:30</option>
            <option>08:00</option>
            <option>08:30</option>
            <option>09:00</option>
            <option>09:30</option>
          </select>
        </form>
        <form action="">
          <label htmlFor="">Start from garage before (in min)*</label>
          <input type="text" />
        </form>
      </div>

      <div className={styles.servicesec1}>
        <form action="">
          <label htmlFor="">Reporting Address</label>
          <input type="text" />
        </form>
        <form action="">
          <label htmlFor="">Drop Address</label>
          <input type="text" />
        </form>
      </div>

      <div className={styles.servicesec1}>
        <form action="">
          <label htmlFor="">Short Reporting Address (to be shown in duty listing) Date</label>
          <input type="text" />
        </form>
        <form action="">
          <label htmlFor="">Flight/Train Number</label>
          <input type="number" />
        </form>
         
      </div>

      <div className={styles.servicesec}>
        <form action="">
          <label htmlFor="">Bill To </label>
          <select>
            <option>Company/Customer(Default)</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
          </select>
        </form>
        <form action="">
          <label htmlFor="">Price</label>
           <input type="number" name="" id="" />
        </form>
        <form action="">
          <label htmlFor="">Per Extra KM Rate</label>
         <input type="number" name="" id="" />
        </form>
        <form action="">
          <label htmlFor="">Per Extra Hr Rate</label>
       <input type="number" name="" id="" />
        </form>
        <button className={styles.rateButton}>Get Price</button>
      </div>

      <div className={styles.Remarksec}>
        <form action="">
          <textarea placeholder="Remarks"></textarea>
        </form>
        <form action="">
          <textarea placeholder="Operator notes"></textarea>
        </form>
      </div>

      <div className={styles.attachmentsec}>
        <p>
          <b> Booking attachments:</b>
          <input type="file"></input>
        </p>
      </div>

      <div className={styles.labelform}>
        <form>
          <label>Labels</label>
          <select>
            <option>Select an option</option>
            <option>Business Class</option>
            <option>VIP Class</option>
            <option>Special Class</option>
          </select>
        </form>
      </div>

      <div className={styles.marksec}>
        <input type="checkbox" />
        <p>Mark as unconfirmed booking</p>
      </div>

      <div className={styles.feedbackline}>
        <p>
          If you would like to enable booking insurance for your customers
          contact <a href="#">support@gmail.com</a> to learn how to enable this
        </p>
      </div>

      <div className={styles.submitbutton}>
        <button>book</button>
      </div>
    </>
  );
};

export default Booking;
