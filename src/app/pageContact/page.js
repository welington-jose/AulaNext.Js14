export const metadata = {
    title: "Contact",
    description: "Page contacts",

};
import Image from "next/image";
import styles from "../styles/Home.module.css"




export default function contacts() {
    return (
        <>
            <div className={styles.title}>
                <h1>Pagina contatos</h1>
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
