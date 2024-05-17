export const metadata = {
  title: "Home",
  decription: "Home page",
  };

import Image from "next/image";
import styles from "./styles/Home.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.title}>
        <h1>Hello world!</h1>
        <h2>Testando NextJs</h2>
      </div>
      
      <div className={styles.imgHome}>
                <Image src={"/lago.jpg"}
                    width={900}
                    height={500}
                />
            </div>
      
      

    </>
  );
}
