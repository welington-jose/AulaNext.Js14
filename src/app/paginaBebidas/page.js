export const metadata = {
    title: "Drinks",
    description: "Page drinks",
  };
import styles from "../styles/Home.module.css"
import Image from "next/image";
export default function bebidas() {
    return (
        <>
           
            <div className={styles.title}>
                <h1>
                    Página de bebidas
                </h1>
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