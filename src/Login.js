import React, { Component, Fragment } from 'react';
import styled from 'styled-components/macro';

// colors
// DodgerBlue
// chartreuse
// darkcyan
// steelblue
// darkseagreen

const Title = styled.h2`
    font-family: 'ZCOOL KuaiLe', sans-serif;
    font-size: 2.5rem;
    text-align: center;
`;

const Form = styled.form`
    font-size: 1.5rem;
    margin: 0 4%;
    padding: 2em;
    background-color: steelblue;
    border-radius: 4px;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const UsernameWrapper = styled.div`
    grid-column: span 2;
`;

const UsernameLabel = styled.label`
    order: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const Username = styled.input`
    padding: 0.5em;
    border: none;
    border-radius: 4px;
`;

const PasswordWrapper = styled.div`
    grid-column: span 2;
`;

const PasswordLabel = styled.label`
    order: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const Password = styled.input`
    padding: 0.5em;
    border: none;
    border-radius: 4px;
`;

const Submit = styled.button`
    margin-top: 1em;
    grid-column: -1 / -2;
    border: none;
    border-radius: 4px;
    padding: 0.4em 0.6em;
    transition: letter-spacing 0.2s ease-out,
                background-color 0.2s ease-out;

    &:hover {
        letter-spacing: 6px;
        cursor: pointer;
        background-color: darkseagreen;
    }
`;

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        loggedIn: false,
    }

    render() {
        return (
            <Fragment>
                <Title>Supa Cool Form</Title>
                <Form action="POST">
                    <UsernameWrapper>
                        <UsernameLabel 
                            htmlFor="username"
                            >
                            Username
                        </UsernameLabel>
                        <Username 
                            id="username" 
                            placeholder="Username" 
                        />
                    </UsernameWrapper>
                    <PasswordWrapper>
                        <PasswordLabel 
                            htmlFor="password"
                        >
                            Password
                        </PasswordLabel>
                        <Password 
                            id="password" 
                            placeholder="Password"/>
                    </PasswordWrapper>
                    <Submit>Log In</Submit>
                </Form>
            </Fragment>
        )
    }
}
