import styled from 'styled-components';

export interface InteractionsProps {
    backgroundColor?: string,
    isValid?: boolean,
    windowButtonType?: string
}

export const LoginInput = styled.input<InteractionsProps>`
    font-size: 1rem;
    padding: 1rem;
    width: 20rem;
    border-radius: 0.5rem;
    outline: none;
    border: ${(props) => (props.isValid === false) ? "2px solid red" : "2px solid gray"};

    &:focus {
        border: ${(props) => (props.isValid === false) ? "2px solid #e32200" : "2px solid black"};
    }
`;

export const LoginButton = styled.button`
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    background-color: black;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AppSignInButton = styled.button<InteractionsProps>`
    width: 4rem;
    aspect-ratio: 1 / 1;
    border-radius: 0.5rem;
    border: none;
`;

export const SideNavButton = styled.button<InteractionsProps>`
    font-size: 1.25rem;
    background-color: ${(props) => (props.isValid) ? "black" : "transparent"};
    border: none;
    border-radius: 1rem;
    color: ${(props) => (props.isValid) ? "white" : "black"};;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    &:hover {
        background-color: ${(props) => (props.isValid) ? "black" : "rgb(0, 0, 0, 0.1)"};
        transition: all 0.3s ease 0.1s;
    }
`;

export const NoBorderInput = styled.input`
    width: 100%;
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    border: none;
    outline: none;
`;

export const SubmitButton = styled.button<InteractionsProps>`
    width: 2rem;
    aspect-ratio: 1 / 1;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.isValid) ? "black" : "lightgray"};
    border-radius: 0.5rem;
    color: ${(props) => (props.isValid) ? "white" : "gray"};
`;

export const WindowButton = styled.button<InteractionsProps>`
    border-radius: 10000px;
    width: 0.7rem;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: ${(props) => (props.windowButtonType === "quit") ? "#FF605C" : (props.windowButtonType === "maximize") ? "#00CA4E" : "#FFBD44"};
    color: black;
    -webkit-app-region: no-drag;
    font-size: 0.5rem;
    cursor: pointer;

    &:hover {
        color: rgb(255, 255, 255, 1);
    }
`;

export const SettingsButton = styled.button<InteractionsProps>`
    font-size: 1rem;
    padding: 0.5rem;
    width: 12rem;
    display: flex;
    justify-content: left;
    gap: 0.5rem;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    background-color: ${(props) => (props.isValid) ? "black" : "transparent"};
    color: ${(props) => (props.isValid) ? "white" : "gray"};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.isValid) ? "black" : "rgb(0, 0, 0, 0.1)"};
        transition: all 0.3s ease 0.1s;
    }
`;