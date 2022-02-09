import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
function App() {
  return (
    <div className="dark:bg-slate-900 min-h-screen">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
