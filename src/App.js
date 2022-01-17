import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// let name = "Hamza";
function App() {
  const [brown, updateBrown] = useState("light");
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const brownMode = () => {
    if (brown === "light") {
      updateBrown("#cd6133");
      document.body.style.background = "#cd6133";
    } else {
      updateBrown("light");
      document.body.style.background = "white";
    }
  };
  const togleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#1e2c7e";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Text Utils - Dark Mode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  };
  return (
    <>
      {/* // <Router> */}
      {/* <Navbar /> */}
      <Navbar
        title="Text Utils"
        mode={mode}
        togleMode={togleMode}
        brownMode={brownMode}
      />
      <Alert alert={alert} />
      {/* <Switch> */}
      {/* <Route exact path="/about"> */}
      {/* <About /> */}
      {/* </Route> */}
      {/* <Route path="/"> */}
      <TextForm heading="Enter the Text to Analyze Below" mode={mode} />
      {/* </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
