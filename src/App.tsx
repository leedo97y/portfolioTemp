import { Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import TestPage from "./pages/TestPage";
import Test2Page from "./pages/Test2Page";

function App() {
  return (
    <div className="w-full h-screen box-border">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/test1" element={<TestPage />} />
        <Route path="/test2" element={<Test2Page />} />
      </Routes>
    </div>
  );
}

export default App;
