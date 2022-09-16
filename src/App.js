import CommentsForm from "./Components/Form/CommentsForm";
import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';




function App() {
  const[entries, setEntries] = useState([{date: '11/23/2022'}])
 

 

  return ( 
    <div>
      <NavBar />
      <CommentsForm />
      <DisplayPosts />
      
     
  
      
      
    
    </div>
  );
}

export default App; //instantiate
