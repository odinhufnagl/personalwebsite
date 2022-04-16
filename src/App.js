import logo from "./logo.svg";
import "./App.css";
import LandingScreen from "./screens/LandingScreen";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ReactConfirmAlert, { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Contact from "./components/Contact";
function App() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      console.log("scorlling");
      const header = document.getElementById("header");
      if (document.documentElement.scrollTop >= 200) {
        console.log("long scroll");

        header.classList.add("Header-transformed");
      } else {
        header.classList.remove("Header-transformed");
      }
    };
  }, []);

  return (
    <div>
      {showDialog && (
        <ReactConfirmAlert
          childrenElement={() => (
            <Contact
              hideDialog={() => {
                setShowDialog(false);
              }}
            ></Contact>
          )}
          onClickOutside={() => {
            setShowDialog(false);
          }}
          buttons={[]}
        ></ReactConfirmAlert>
      )}
      <div className="App">
        <div className="Header" id={"header"}>
          <Header
            showDialog={() => {
              setShowDialog(true);
            }}
          ></Header>
        </div>

        <LandingScreen></LandingScreen>
      </div>
    </div>
  );
}

export default App;
