import styled from 'styled-components';

export interface InteractionsProps {
    backgroundColor?: string,
    isValid?: boolean
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