import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages";
import Headers from "./components/shared/Headers.jsx";

function App() {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables  />} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </Router>
    </>
  )
}
export default App