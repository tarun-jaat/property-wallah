import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Homepage from "./Screens/Homepage";

function App() {
  return (
    <div className="body bg-richblack-5  h-screen w-full ">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
