
import {useState,useEffect} from 'react';
export default function App(){
const [error,setError]=useState(null);
const [data,setData]=useState(null);
useEffect(()=>{
  async function getValues(){
    try{
    const response=await fetch('http://localhost:5000/api/datasssssssssss');
    if(!response.ok){
      throw new Error('data is not fetched')
    }
    const resData=await response.json();
    
    setData(resData);

  }
  catch(error){
    setError({message:error.message||'error occured'});
  }
}
  getValues();
},[]);
if(error){
  return <h1>{error.message}</h1>
}
return(
<>
<h1>welcome this is my data</h1>
<h1>{JSON.stringify(data, null, 2)}</h1>
</>
)
}
