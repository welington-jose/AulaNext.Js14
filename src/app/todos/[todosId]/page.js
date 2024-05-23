import Link from "next/link"

import { useRouter } from "next/router"

export default function Todo({params}) {
    const router =useRouter()
    const todoId = router.query.todoId

    return(
        <>
        <Link href={"/"}>
        Voltar
        </Link>
        <h1>Exibindo a  todo: {params.todoId}</h1>
        <p>Comentário: Teste ...<Link href={`/todo/${todoId}/comments/1`}><a>Detalhes</a></Link></p>

        <p>Comentário: Teste02 ...<Link href={`/todo/${todoId}/comments/2`}><a>Detalhes</a></Link></p>

        <p>Comentário: Teste03 ...<Link href={`/todo/${todoId}/comments/3`}><a>Detalhes</a></Link></p>

        

        </>
    )
}