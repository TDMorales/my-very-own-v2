import React from 'react'
import { FormContainer, Form, SignInUpInputContainer, SignInUpFormLabel, SignInUpInput, SignInUpButton } from './SignInUpFormElements'

const SignInUpForm = () => {
    return (
        <FormContainer>
            <Form>
                <SignInUpInputContainer>
                    <SignInUpFormLabel>Email</SignInUpFormLabel>
                    <SignInUpInput
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                </SignInUpInputContainer>
                <SignInUpInputContainer>
                    <SignInUpFormLabel>Password</SignInUpFormLabel>
                    <SignInUpInput
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                </SignInUpInputContainer>
                <SignInUpButton type='submit' />
            </Form>
        </FormContainer>
    )
}

export default SignInUpForm
