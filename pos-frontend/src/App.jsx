import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Auth, Orders } from "./pages";
import Headers from "./components/shared/Headers.jsx";

function App() {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  )
}
export default App