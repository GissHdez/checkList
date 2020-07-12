import React from 'react';
import {Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Create = () => {
    const history =  useHistory();
    return(<>
        <h1 className="titlePrincipal">Crear nueva tarea</h1>
        <Formik
            initialValues={{
                title: '',
                tarea: ''
            }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(20, 'Hasta 20 caracteres')
                    .required('Es requerido'),
                tarea: Yup.string()
                    .required('Es requerido')
            })}
            onSubmit = {(values, {setSubmitting})=>{
                const URL = `http://localhost:3001/api/works/`
                axios.post(URL,values)
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
                            <button type="submit" title="crear">Crear</button>
                        </BtnWrap> 
                    </FormWrap>
                )
            }
        </Formik>
    </>)
}

const FormWrap = styled.form`
    display:grid;
    grid-template: auto / 1fr 1fr;
    grid-gap:2%;
    margin-top:2em;
`
const MiInputWrap = styled.div`
    width: 100%;
    position: relative;
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
        display: inline-block;
        padding: .5em 1em;
        border: 1px solid #000;
        border-radius: 5px;
        color: #000;
        background: #fff;
    }
    button:hover{
        transform: scale(1.1);
    }
`
export default Create;