import './App.css';
import {useState} from "react";
import APIS from "./constants/EndPoint";
import usePostHookNoAuth from "./customHooks/usePostHookNoAuth";


const initialFormData = Object.freeze({
  email: "",
  password: ""
});


function App() {
  const url = APIS.LOGIN
  const [formData, updateFormData] = useState(initialFormData);
  const [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg] = usePostHookNoAuth()


  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await mutate({url, formData})
    } catch (e) {
      console.log(e)
    }
  };


  return (
    <div className="App" style={{marginTop: "20px"}}>
      <label>
        Email
        <input type={"email"} name="email" onChange={handleChange}/>
      </label>
      <br/>
      <label>
        Password
        <input type={"password"} name="password" onChange={handleChange}/>
      </label>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
