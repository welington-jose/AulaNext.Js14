
import styles from "../src/app/styles/Todo.module.css"

export default async function getStaticProps( ) {

const data = await fetch("https://jsonplaceholder.typicode.com/todos"); 
const todos = await data.json();      

  
    return(
      <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      </>
    )
  }