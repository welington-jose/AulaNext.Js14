import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "../src/app/styles/Main.module.css"



export default function MainContainer({children}) {
    return (
        <>
        <Navbar/>
        <div className= {styles.main}>{children}</div>
        
        <Footer/>
        </>
    );
}