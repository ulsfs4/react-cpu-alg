import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-mist-900 w-screen min-h-screen flex flex-col items-center ">
      <Header />
      <Main />
    </div>
  );
}

export default App;
