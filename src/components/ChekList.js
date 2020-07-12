import React, {useState} from 'react';
import styled from 'styled-components';

const ChekList = () => {       
    return(
        <ChekForm>
            <div>
                <input type="checkbox"></input>
                <label>Realizada</label>
            </div>            
        </ChekForm>
    )
}

const ChekForm = styled.div`
    border: none;
    width: 1em;
    height: 1em;
    border-radius: 12px;
    display: flex;
    input + label{
        font-size: 0px;
    }
    input:checked + label{
        font-size: 15px;
        color: #D93240;
    }
`

export default ChekList;