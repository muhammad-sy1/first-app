import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router";
import LogIn from "./log-routes/LogIn";
import Check from "./log-routes/Check";
import LogLayout from "./LogLayout";
import CreateAccount from "./log-routes/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route element={<LogLayout />}>
          <Route path="login" element={<LogIn />} />
          <Route path="check" element={<Check />} />
          <Route path="create-account" element={<CreateAccount />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
