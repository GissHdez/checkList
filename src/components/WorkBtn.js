import React from 'react';
import styled from 'styled-components';

import BtnBase from '../components/BtnBase'
import ChekList from '../components/ChekList'

const WorkBtn = (props) => {
    return(
        <Tarea>   
            <div className="btnInfo">         
                <BtnBase title="Ver mas" to={`single/${props.id}`}/>
            </div>
            <div className="txtInfo">
                <h1>{props.title}</h1>
            </div>
            <div className="chekInfo">
                <ChekList/>
            </div>
        </Tarea>

    )
}

const Tarea = styled.article`
    width: 50%;
    background: rgb(242,181,68);
    background: linear-gradient(180deg, rgba(242,181,68,1) 0%, rgba(242,187,119,1) 100%);              
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1em;
    border-radius: 10px;
    height: 5em;
    margin-left: auto;
    margin-right: auto;
    .btnInfo{
        left: 1em;
        width: 20%;
        height: auto;
        margin-bottom: 1em;
    }
    .txtInfo{
        width: 60%;
        height: auto;
        h1{
            text-align: center;
        }
        a{
            display: inline-block;
            padding: .5em 1em;
            border: 1px solid #000;
            border-radius: 5px;
            color: #000;
        }
        a:hover{
            transform: scale(1.1);
        }
    }
    .chekInfo{
        width: 20%;
        height: auto;
        align-items: center;
    }
    
`

export default WorkBtn;