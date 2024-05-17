export const metadata = {
    title: "Cart",
    description: "Shopping cart page",
};
import Image from "next/image";
import styles from "../styles/Home.module.css"
export default function carrinho() {
    return (
        <>
            <div className={styles.title}>
                <h1>
                    Página do carrinho
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