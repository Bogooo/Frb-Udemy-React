import SearchBar from "./components/SearchBar";
import searchImg from "./api";
import {useState} from "react";
import ImageList from "./components/ImageList";

function App() {

  const [images,setImages]=useState([]);
  const handleSubmit=async (term)=>{
    const results=await searchImg(term);
    setImages(results);
  }

  return <div>

    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
  </div>;
}

export default App;
