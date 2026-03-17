import { useState } from "react";
import TodoList from "./components/todo/TodoList";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h1><button onClick={()=> setToggle(p=>!p)}>Toggle View</button></h1>
      {toggle && <TodoList />}
    </>
  );
}

export default App;
