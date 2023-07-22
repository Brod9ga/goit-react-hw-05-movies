import { fetchRevievs } from 'components/fetches'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

 const Revievs = () => {
const {filmId}=useParams()
const [revievList, setRevievList]=useState([])

useEffect(() => {
    const getListRevievs = async () => {
      try {
        const response = await fetchRevievs(filmId);
        setRevievList(response.data.results);
    } catch (error) {
        console.error(error);
    }
};

getListRevievs();
}, [filmId]);


  return (
    <div>
        <ul>
          
            {revievList.map((reviev,index)=>
            <li key={index}>
                <h3>{reviev.author}</h3>
                <p>{reviev.content}</p>
            </li>)}
        </ul>
       
    </div>
  )
}
export default Revievs