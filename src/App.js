import "App.css";
import Router from "router/router";
import Header from "components/header";
import Footer from "components/footer/footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
