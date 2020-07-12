import React, {useEffect, useState}  from 'react';
import styled from 'styled-components';
import axios from 'axios';

import WorkBtn from '../components/WorkBtn';

const All = () => {
    const [tareas,setTareas] = useState([])
    useEffect(() => {
        //const {loading, setLoading} = useState(true);
        const URL = `http://localhost:3001/api/works/`
                axios.get(URL)
                .then(function(response){
                    setTareas(response.data.data)
                })
                .catch(function(error){
                    //handle error
                    alert('No se pudo realizar la conexión');
                })  
                .then(function (){
                    console.log('Todo ha cargado correctamente')
                });
    },[])
    return(
        <AllWrap>
            {tareas.map(item=>{
                return(
                    <WorkBtn key={item._id} id={item._id} title={item.title}/>
                )
            })}
        </AllWrap>
    )
}

const AllWrap = styled.section`
    padding-top: 1.5em;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap:wrap;
`

export default All;