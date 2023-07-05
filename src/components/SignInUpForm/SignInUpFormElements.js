import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 18px;

    max-width: 75%;
    min-width: 50%;
    height: 60%;
    margin-top: 5%;
    background: rgba(255, 255, 255, 0.46);
    border-radius: 10px;
`

export const Form = styled.form`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
`
export const SignInUpInputContainer = styled.div`
    width: 80%;
    height: 16%;
    display: flex;
    flex-direction: column;
    align-items: flex-start
`

export const SignInUpFormLabel = styled.label`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
`

export const SignInUpInput = styled.input`
    width: 100%;
    height: 50%;
    font-size: 14px;
    background: #FFFFFF;
    border: 1px solid #D2D6DA;
    border-radius: 8px;
    margin-top: 2%;
`

export const SignInUpButton = styled.input`
    border-radius: 8px;
    background:  green;
    white-space: nowrap; 
    padding: 12px 42px;
    width: 80%;
    height: 8%;
    color: '#010606';
    font-size: '20px';
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: white ;
    }
`