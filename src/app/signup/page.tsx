/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import styles from "../../../public/styles/signup.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/signup/" + page);
  };
  return (
    <main>
      <div className={styles.maindiv}>
        <div className={styles.mainlogo}>
          <img src="/assets/logo.png" className={styles.mainimg} alt="" />
        </div>
        <div className={styles.mainform}>
          <form className={styles.formbox}>
            <p>Register</p>
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Your name" />
            <input type="tel" placeholder="Phone" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Re-enter password" />

            <button>CREATE ACCOUNT</button>
          </form>

          <div className={styles.paradiv}>
            <p className={styles.lastpara}>
              By creating an account, you are agreeing to our{" "}
              <Link href="#">Privacy Policy</Link> and{" "}
              <Link href="#">Terms of Use</Link> .
            </p>
            <p>
              If you already have an account <Link href="/login">sign in</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
