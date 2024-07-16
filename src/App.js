import { useEffect, useState } from "react";
import Form from "./Form";
import ListItem from "./ListItem";

function App() {

  const [typeRequest, setTypeRequest] = useState('users'); // use state for type of request (user,posts, and comments)
  const [contents, setContents] = useState([]); // use state for storing data after fetch request later.
  const [ errMsg, setErrorMessage] = useState('')

  const URL_API = 'https://jsonplaceholder.typicode.com/'; // json place holder api

  useEffect(() => { // useEffect is used to operate whenever the dependency "typeRequest" trigged
   
    const fetchItem = async () => { // fucntion for fetch data from api

      try {
        
        const response = await fetch(`${URL_API}${typeRequest}`); // fetching data from the api and attaching the type request to associated info
        const data = await response.json(); // taking the response and convert them to json format
        setContents(data); // storing the converted format into conent useState above
      } catch (err) {
       
        console.log(err); // displays erors in the console log
        
      }
    }
    fetchItem(); // fetch function called
      
  }, [typeRequest]) // dependcy


  return (
    <div className="App">
      {/* 
       Form component receives type request 'users, posts, and comments' and set the type value accordingly
       ListItem component receives errMsg and useState contents to display the data stored into it.
      
      */}
      <Form
        typeRequest={typeRequest}
        setTypeRequest={setTypeRequest} /> 
      <ListItem
        errMsg={errMsg}
        contents={contents}
      />
      
      
    </div>
  );
}

export default App;
