import React, { FormEvent, useState } from 'react';
import { LoginContainer, PatternedMainContainer } from '../styles/containers';
import { AppSignInButton, LoginButton, LoginInput } from '../styles/interactions';
import { TailSpin } from 'react-loader-spinner';
import { createNeDBDocument, DataStores } from '../../helpers/storage';

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

    const submitLogin = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const response = await fetch("http://localhost:80/auth/signin", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        console.log("response", response)

        if(response.status === 400) {
            setIsLoading(false);
            setIsEmailValid(false);
            setIsPasswordValid(false);
        }

        else {
            const { authorization, user_id } = await response.json();

            createNeDBDocument(DataStores.user, {
                user_id,
                authorization
            });
        }
    };

    return <PatternedMainContainer style={{ alignItems: "center", justifyContent: "center" }}>
        <form onSubmit={submitLogin}>
            <LoginContainer>
                <LoginInput isValid={isEmailValid} placeholder={"your email"} onChange={(e: any) => setEmail(e.target.value)} />
                <LoginInput isValid={isPasswordValid} placeholder={"your password"} onChange={(e: any) => setPassword(e.target.value)} type={"password"} />
                <LoginButton type={"submit"}>{
                    (!isLoading) ? "Sign In" : 
                        <TailSpin
                            height="19"
                            width="19"
                            color="white"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                }</LoginButton>
                <div style={{ width: "100%", display: "flex", alignItems: 'center', gap: "1rem" }}>
                    <AppSignInButton onClick={() => {}}>

                    </AppSignInButton>
                    <AppSignInButton onClick={() => {}}>

                    </AppSignInButton>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <span style={{ fontFamily: "Roboto, sans-serif"}}>Don't have an account? Sign Up</span>
                </div>
            </LoginContainer>
        </form>
    </PatternedMainContainer>
};

export default LoginPage;