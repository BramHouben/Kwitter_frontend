import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoadTweetsBtn from "./Components/LoadTweetsButton";
import Tweets from "./Components/Tweets";

function App() {
  const siteOnline = true;
  const name = "Kwitter";
  const [tweets] = useState([
    {
      id: 1,
      content: "This is tweet one",
    },
    {
      id: 2,
      content: "This is tweet two",
    },
  ]);

  return (
    <div className='App'>
      <Header />
      <h1>{name}</h1>
      <h2>{siteOnline ? "Site is online" : "Site is offline"}</h2>
      <LoadTweetsBtn />
      <Tweets tweets={tweets} />
      <Footer />
    </div>
  );
}

export default App;
