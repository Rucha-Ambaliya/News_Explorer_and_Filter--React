import "./App.css";
import Filter from "./Components/Filter.js";
import Cards from "./Components/Cards";
import { S_URL, E_URL, categories } from "./data.js";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader.js";

function App() {
  const [URL, setUrl] = useState(S_URL+E_URL);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(URL);
      let output = await response.json();
      setData(output);
    }
    catch(error){
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">NEWS</h1>
      <Filter categories={categories} fetchData={fetchData} setUrl={setUrl} />
      {loading ? <Loader /> : <Cards articles={data.articles}/>}
    </div>
  );
}

export default App;
