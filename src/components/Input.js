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
color:#890F0D
`

const Input =({label,...props}) =>{
    const [field,meta] = useField(props)
    return(
        <Control>
            <Label>{label}</Label>
            <TextInput {...field} {...props}/>
            {meta.touched && meta.erro ?(
                <ErrorMessage>{meta.error}</ErrorMessage>
            ): null}
        </Control>
    )
}

export default Input