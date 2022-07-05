import { useState } from "react";
import styled from "styled-components";

const FormWrap = styled.div`
    display: block;
    padding: 20px 40px;
    width: 40%;
    height: 480px;
    border: 1px solid black;
    border-radius: 10px;
`

const StyledForm = styled.form`
`

const StyledInputWrap = styled.div`
    :not(:first-child){
        margin-top: 30px;
    }
`

const StyledInput = styled.input`
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    line-height: 22px;
    border: 1px solid black;
    border-radius: 5px;
`

const StyledTitle = styled.p`
    margin: 0;
    font-size: 16px;
`

const Button = styled.button`
    display: block;
    margin: auto;
    padding: 10px 20px;
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 10px;
    outline: 1px solid black;
    cursor: pointer;
    background: ${({color}) => (color ? 'grey' : 'transparent')};

    :hover{
        background: grey;
        box-shadow: 10px 5px 5px black
    }
`

const Input = ({setValue, value}) => {

    const onInput = (e) => {
        setValue(e.target.value)
    }

    return(
        <StyledInput onChange={onInput} value={value} type='text'></StyledInput>
    )
}


export const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')



    return (
        <FormWrap>
            <StyledForm>
                <StyledInputWrap>
                    <StyledTitle>Name:</StyledTitle>
                    <Input setValue={setName} value={name}></Input>
                </StyledInputWrap>
                <StyledInputWrap>
                    <StyledTitle>Email:</StyledTitle>
                    <Input setValue={setEmail} value={email}></Input>
                </StyledInputWrap>
                <StyledInputWrap>
                    <StyledTitle>Phone:</StyledTitle>
                    <Input setValue={setPhone} value={phone}></Input>
                </StyledInputWrap>
                <StyledInputWrap>
                    <StyledTitle>Address:</StyledTitle>
                    <Input setValue={setAddress} value={address}></Input>
                </StyledInputWrap>
            </StyledForm>
        </FormWrap>
    )
}