import { useField } from "formik";
import styled from "styled-components";

const Control = styled.div`
    margin-bottom:15px;
`

const Label = styled.label`
    color:#EEEDDE;
    display:block;
    margin-bottom:10px;
    font-size: 2em;
`

const TextInput = styled.input`
    color:#203239;
    display:block;
    padding:10px 15px;
    font-size: 1.5em;
    border-radius:10px;
    background-color: #ffffff;
    margin-bottom: 20px;
    width: 100%;
`

const ErrorMessage = styled.div`
color:#FF8C32;
font-weight:bold;
font-size:1.5em;
`

const Input =({label,placeholder,...props}) =>{
    const [field,meta] = useField(props)
    return(
        <Control>
            <Label>{label}</Label>
            <TextInput placeholder={placeholder} {...field} {...props}/>
            {meta.touched && meta.error?(
                <ErrorMessage>{meta.error}</ErrorMessage>
            ): null}
        </Control>
    )
}

export default Input