import HomePage from "./pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/main/models" />} />
          <Route exact path="/main" element={<HomePage />} />
          <Route exact path="/main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
