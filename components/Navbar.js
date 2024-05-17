import Link from 'next/link'
import styles from '../src/app/styles/Navbar.module.css'

export default function Navbar() {
    return(
        <>
            <ul className={styles.navbar}>
                <div className={styles.linkNavbar}>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/todos">
                            Todos
                        </Link>
                    </li>
                    <li>
                        <Link href="/paginaProdutos">
                             Página de Produtos
                        </Link>
                    </li>
                    <li>
                        <Link href="/paginaBebidas">
                            Página de bebidas
                        </Link>
                    </li>
                    <li>
                        <Link href="/paginaCarrinho">
                            Página de carrinho
                        </Link>
                    </li>
                    <li>
                        <Link href="/pageContact">
                            Página de contato
                        </Link>
                    </li>
                </div>
                
                
            </ul>
        </>
    );
}