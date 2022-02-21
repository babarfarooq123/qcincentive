import logo from './logo.svg';
import React from 'react';
import './App.css';
import auth from './config/firebase';
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const [accessToken, setAccessToken] = React.useState("");

  const sign_in_with_email = () => {
    signInWithEmailAndPassword(auth, "incentiveuser@gmail.com", "222222")
      .then((res) => {
        setAccessToken(res.user.accessToken);
        console.log(res.user.accessToken);
      })
      .catch((err) => {
        console.log("ERR: ", err.message);
      });
  };

  React.useEffect(() => {
    sign_in_with_email();
  }, []);

  React.useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://us-central1-dentrack-46b48.cloudfunctions.net/api/fortbend/patient/24963",
      header: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((resp) => {
        console.log("resp => ", resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <div className="App">
      API Testing :)
    </div>
  );
}

export default App;
