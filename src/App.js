import CommentsForm from "./Components/Form/CommentsForm";
import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts"

function App() {
  const[entries, setEntries] = useState([{date: '11/23/2022'}])
  return ( 
    <div>
      <DisplayPosts parentEntries={entries} />
      <CommentsForm />
      
      
    
    </div>
  );
}

export default App; //calling
