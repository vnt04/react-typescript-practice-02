import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
