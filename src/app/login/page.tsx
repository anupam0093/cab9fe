/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import styles from "../../../public/styles/login.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/login/" + page);
  };
  return (
    <main>
      <div className={styles.maindiv}>
        <div className={styles.mainlogo}>
          <img src="/assets/logo.png" className={styles.mainimg} alt="" />
        </div>
        <div className={styles.mainform}>
          <form className={styles.formbox}>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <Link href="#" >Forgot your password?</Link>
            <button >LOGIN</button>
          </form>

          <p>
            Dont have an account? <Link href="/signup">Register</Link>
          </p>
          <p className={styles.lastpara}>
            This site is protected by reCAPTCHA and the{" "}
            <Link href="https://policies.google.com/privacy">
              {" "}
              Google Privacy Policy
            </Link>{" "}
            and{"  "}
            <Link href="https://policies.google.com/terms">
              {" "}
              Terms of Service apply
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
