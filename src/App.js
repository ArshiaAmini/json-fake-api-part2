import { useEffect, useState } from "react";
import Form from "./Form";
import ListItem from "./ListItem";

function App() {

  const [typeRequest, setTypeRequest] = useState('users');
  const [contents, setContents] = useState([]);
  console.log(contents)

  const URL_API = 'https://jsonplaceholder.typicode.com/';

  useEffect(() => {
   
    const fetchItem = async () => {

      try{
        const response = await fetch(`${URL_API}${typeRequest}`);
        const data = await response.json();
        setContents(data);
      } catch (err) {
        console.log(err);
        
      }
    }
    fetchItem()
      
  }, [typeRequest])


  return (
    <div className="App">
      <Form
        typeRequest={typeRequest}
        setTypeRequest={setTypeRequest} />
      <ListItem
        contents={contents}
        setContents={setContents}
      />
      
      
    </div>
  );
}

export default App;
