import React, {useEffect, useState} from 'react';
import {Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Update = () => {
    const [tarea,setTarea] = useState({})    
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
                        console.log('Todo funciona correctamente')
                    });        
        },[])
    return(<>
        <h1 className="titlePrincipal">Editar tarea</h1>
        {tarea.title &&
            <Formik
            initialValues={{
                title: tarea.title,
                tarea: tarea.tarea
            }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(20, 'Hasta 20 caracteres')
                    .required('Es requerido'),
                tarea: Yup.string()
                    .required('Es requerido')
            })}
            onSubmit = {(values, {setSubmitting})=>{
                const URL = `http://localhost:3001/api/works/${id}`
                axios.put(URL,values)
                .then(function(response){
                    setSubmitting(false)
                    console.log(response)
                    history.push('/')
                })
                .catch(function(error){
                    console.log(error)
                    alert('Error inesperado intenta mas tarde')
                })  
            }}
        >
            {
                formik => (
                    <FormWrap onSubmit={formik.handleSubmit}>
                        <MiInputWrap>
                            <Field 
                                name="title" type="text" as={MiInput}
                                placeholder="Título de la tarea" />
                            <ErrorMessage
                                component={MiError} name="title"/>
                        </MiInputWrap>                               
                        

                        <MiInputWrap>
                            <Field 
                                name="tarea" type="text" as={MiInput}
                                placeholder="Describe el contenido" />
                            <ErrorMessage
                                component={MiError} name="tarea"/>
                        </MiInputWrap>  

                        <BtnWrap> 
                            <button type="submit" title="crear">Guardar</button>
                        </BtnWrap> 
                    </FormWrap>
                )
            }
        </Formik>
        }
    </>)
}


const FormWrap = styled.form`
    display:grid;
    grid-template: auto / 1fr;
    grid-gap:2%;
    margin-top:2em;
`
const MiInputWrap = styled.div`
    width: 50%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
`
const MiInput = styled.input`
    width:100%;
    display: block;
    margin-bottom:1em;
    border:1px solid #989898;
    padding:.8em 1.5em;
    border-radius:5px;
    outline: none;
`

const MiError = styled.div`
    display: inline-block;
    background: red;
    position: absolute;
    color: #fff;
    z-index: 9998;
    top: 0;
    right: 0;
    padding: .6em 5em;
    border-radius: 0 5px 5px 0;
`

const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    button{
        background: rgb(179,63,53);
        background: linear-gradient(185deg, rgba(179,63,53,1) 0%, rgba(240,148,140,1) 100%);
        height: 3em;
        width: 10em;
        font-size: 15px;
        color: #D9CAC1;
        border: none;
        display: inline-block;
        padding: .5em 1em;
        border-radius: 5px;
    }
    button:hover{
        transform: scale(1.1);
        background: rgb(191,102,94);
        background: linear-gradient(185deg, rgba(191,102,94,1) 0%, rgba(240,148,140,1) 100%);
    }
`

export default Update;