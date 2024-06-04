import Link from 'next/link';

export default async function Todo({ params }) {
    const {todoId} = params
    
  

    return(
        <>
        <Link href="/todos">
        Voltar
        </Link>
        
        <h1> Exibindo o todo: {todoId}</h1>
        <p> Cometário: ... Teste página 01 <Link href={`${todoId}/comment/1`}>Detalhes</Link></p>
        <p> Cometário: ... Teste página 02 <Link href={`${todoId}/comment/2`}>Detalhes</Link></p>
        <p> Cometário: ... Teste página 03 <Link href={`${todoId}/comment/3`}>Detalhes</Link></p>

        </>
    )
}
