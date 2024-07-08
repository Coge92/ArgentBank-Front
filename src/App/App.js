import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import Page404 from "../pages/404";
import { Provider } from "react-redux";
import { store } from "./reduxStore";


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/signin" element={<SignIn></SignIn>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="*" element={<Page404></Page404>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;