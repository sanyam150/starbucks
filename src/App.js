import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import RewardPage from "./pages/rewards/RewardPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<RewardPage />} />
        <Route path="/reward" element={<RewardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
