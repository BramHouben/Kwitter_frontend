import "./App.css";
import Router from "router/router";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
