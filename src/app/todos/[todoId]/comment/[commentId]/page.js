import Link from "next/link"


export default function Comment({params}) {

    const {todoId, commentId} = params
    return(
        <>
        <Link href={`/todos/${todoId}`}>Voltar</Link>
        <h1>Exibindo o comentário número: {commentId}</h1>
        
        <p>Do Todo: {todoId}</p>
        
        </>
    )
}