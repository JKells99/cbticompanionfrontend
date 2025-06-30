import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./componets/login.jsx";
import Register from "./componets/register.jsx";
import Menu from "./componets/menu.jsx";

function App() {

  return (
      <div className={"app"}>
          <Menu/>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
      </div>


    )
}

export default App
