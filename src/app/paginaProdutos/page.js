export const metadata ={
    title: "Products",
    description: " Page products"
}
import Image from "next/image";
import styles from "../styles/Home.module.css"

export default function produtos() {
    return (
        <>
       
        <div className={styles.title}>
            <h1>
                Página de produtos
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