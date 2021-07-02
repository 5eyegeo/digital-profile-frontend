import './App.css';
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./routers/PageRoute";

function App() {
  return (
    <BrowserRouter>
      <PageRouter />
    </BrowserRouter>
  );
}

export default App;
