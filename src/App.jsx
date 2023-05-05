import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spinner from "./components/layout/Spinner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Spinner />
      </div>
    </>
  );
}

export default App;
