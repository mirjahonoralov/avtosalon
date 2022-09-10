import HomePage from "./pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/main/models" />} />
          <Route exact path="/main" element={<HomePage />} />
          <Route exact path="/main/*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
