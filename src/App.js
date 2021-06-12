import './App.css';
import {useState} from "react";
import APIS from "./constants/EndPoint";
import usePostHookNoAuth from "./customHooks/usePostHookNoAuth";
import {BrowserRouter} from "react-router-dom";
import PageRouter from "./routers/PageRoute";


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
    <div className="App">
      <BrowserRouter>
        <PageRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
