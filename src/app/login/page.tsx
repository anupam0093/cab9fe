"use client";
import Image from "next/image";
import styles from "../../../public/styles/login.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/login/" + page);
  };
  return (
    <main>
        <button onClick={()=>router.push("/")} >Go to Home Page</button>
      <div className={styles.loginbox}>
        <div className={styles.mainlogin}>
            <div className={styles.imageC}>
                 <Image height={80} width={320} src="/assets/logo_240x.png" alt="logo"></Image> 
            </div>

        </div>
      </div>
    </main>
  );
};

export default Login;
