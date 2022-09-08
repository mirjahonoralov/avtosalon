import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ModelsPage from "./pages/ModelsPage";
import Model from "./components/Main/Model";

function App() {
  return (
    <>
      {/* <p>helo</p> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/main/*" element={<Main />} />
          {/* <Route exact path="/" element={<HomePage />} /> */}
          {/* <Route exact path="/main/models" element={<ModelsPage />} />
          <Route path="/id" element={<Main />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
