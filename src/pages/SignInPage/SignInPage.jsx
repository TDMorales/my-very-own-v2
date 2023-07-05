import React from 'react'
import { SignInPageContainer, SignInPageForm } from './SignInPageElements'
import NavBar from '../../components/NavBar/NavBar'
import SignInUpForm from '../../components/SignInUpForm/SignInUpForm'
const SignInPage = () => {
    return (
        <SignInPageContainer id="sign-in">
            <SignInUpForm></SignInUpForm>
        </SignInPageContainer>
    )
}

export default SignInPage