import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams, useHistory, NavLink} from 'react-router-dom';
import axios from 'axios';

const Single = () => {
    const [tarea,setTarea] = useState([])    
    const {id} = useParams();
    const history =  useHistory();
    useEffect(() => {
        const URL = `http://localhost:3001/api/works/${id}`
                axios.get(URL)
                .then(function(response){
                    setTarea(response.data.data)
                })
                .catch(function(error){
                    alert('No se pudo realizar la conexión');
                })  
                .then(function (){
                    console.log('Todo carg+o correctamente')
                });        
    },[])
    const deleteWork = () => {
        const URL = `http://localhost:3001/api/works/${id}`
            axios.delete(URL)
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                alert('No se pudo realizar la conexión');
            })  
            .then(function (){
                history.push('/')
        });  

    }
    return(
        <WorkWrap>      
            <div className="infoSingle">         
                <h2 className="titlePrincipal">{tarea.title}</h2>                        
                <p>
                    <b>Descripción:</b><br/> 
                    {tarea.tarea}
                </p>
            </div> 
            <div className="btnSingle">
                <NavLink to={`/editWork/${id}`}>Editar</NavLink>
                <button onClick={deleteWork}>Borrar</button>
            </div>
        </WorkWrap>
    )
}

const WorkWrap = styled.section`
    width: 100%;
    padding-top: 2em 0;
    display: inline-block;
    .infoSingle{
        width: 100%;
        text-align: center;
        p{
            margin-top: 2em;
            b{
                font-size: 20px;
            }
        }
    }
    .btnSingle{
        height: 2em;
        width: 35%;        
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 5em;
        margin-left: auto;
        margin-right: auto;
        a{
            background: rgb(179,63,53);
            background: linear-gradient(185deg, rgba(179,63,53,1) 0%, rgba(240,148,140,1) 100%);
            width: 12em;
            height: 2em;
            text-align: center;
            line-height: 30px;
            font-style: none;
            color: #D9CAC1;
            border-radius: 10px;
        }
        button{
            background: rgb(179,63,53);
            background: linear-gradient(185deg, rgba(179,63,53,1) 0%, rgba(240,148,140,1) 100%);
            border:none;
            width: 15em;
            height: 2.5em;
            font-style: none;
            color: #D9CAC1;
            border-radius: 10px;
        }
        button:hover, a:hover{
            background: rgb(191,102,94);
            background: linear-gradient(185deg, rgba(191,102,94,1) 0%, rgba(240,148,140,1) 100%);
        }
    }
`

export default Single;