import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import HalamanLandpage from "./pages/HalamanLandPage/HalamanLandpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Home />} />
            <Route path="HalamanLandpage" element={<HalamanLandpage />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
