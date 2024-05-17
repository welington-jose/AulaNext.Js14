
import styles from "../src/app/styles/Todo.module.css"

export async function getStaticProps() {
   
      const data = await fetch("https://jsonplaceholder.typicode.com/todos"); // Replace with your actual API endpoint
      const todos = await data.json();
      
      console.log(todos)

      return {
        props: {todos}
      }
     
}
  export default async  function Todos({todos}) {
    
    return (
      <>
        <h1>Lista de tarefas</h1>
        <ul className={styles.todoList}>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
      
          
        </ul>
      </>
    );
  }
  