import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import SubmitComplaint from "./pages/submitcomplaint";
import ResolveComplaint from "./pages/resolvecomplaint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit" element={<SubmitComplaint />} />
        <Route path="/resolve" element={<ResolveComplaint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
