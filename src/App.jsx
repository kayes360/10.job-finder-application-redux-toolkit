import Home from "./pages/Home";
import EditJob from "./pages/EditJob";
import AddNewJob from "./pages/AddNewJob";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editjob" element={<EditJob />}></Route>
          <Route path="/addnewjob" element={<AddNewJob />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
