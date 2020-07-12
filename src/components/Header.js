import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <HeaderWrap>
            <nav>
                <NavLink to="/">
                    List To Do
                </NavLink>            
            
                <NavLink to="/newWork">
                    Nueva tarea
                </NavLink>
            </nav>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 5%;
    nav{          
        padding: .8em 0em;      
        border-radius: 10px;        
        display: flex;
        align-items: center;
        justify-content: space-around;
        a{
            font-style: none;
            color: #102540;
            padding: .8em 1.8em;                  
            border-radius: 10px;            
            background: rgb(242,181,68);
            background: linear-gradient(185deg, rgba(242,181,68,1) 0%, rgba(242,187,119,1) 100%); 
        }
        a:hover{
            color: #D9CAC1;
            background: rgb(242,181,68);
            background: linear-gradient(185deg, rgba(242,181,68,1) 0%, rgba(89,58,39,1) 100%);
        }
    }
`
export default Header;