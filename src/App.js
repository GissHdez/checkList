import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header'
import All from './pages/All'
import Create from './pages/Create'
import Update from './pages/Update'
import Single from './pages/Single'


function App(){
    return(
        <Router>
            <GlobalStyle/>
            <Header/>
            <section className="wrap">
                <Switch>
                  <Route exact path="/" component={All}/>                  
                  <Route path="/single/:id" component={Single}/> 
                  <Route path="/newWork" component={Create}/>                  
                  <Route path="/editWork/:id" component={Update}/>
                </Switch>
            </section>
        </Router>
    );
}
const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td{background: transparent;border: 0;margin: 0;padding: 0;vertical-align: baseline} a{text-decoration:none}
    /*GENERALES*/
    *, *:after ,:before{
        -ms-box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box;
        box-sizing:border-box;
    }
    .animado, a, button{
        -ms-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    .wrap{
        width: 90%;
        margin: auto
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    body{
        font-family: 'Muli', sans-serif;
        font-size: 16px;
        background: rgb(184,204,217);
        background: linear-gradient(180deg, rgba(184,204,217,1) 0%, rgba(16,37,64,1) 100%);
    }
    .space{
        width: 100%;
        height: 50px;
    }
    .titlePrincipal{
        font-family: 'Noto Serif', serif;
        text-align: center;
        margin-top: 1em;
        color: #102540;
        font-size: 2em;
    }

`

export default App;