import React, { FormEvent, useState } from 'react';

import { PiArrowRightBold } from 'react-icons/pi';

import { NoBorderInput, SubmitButton } from '../../styles/interactions';
import { FooterContainer, FooterSearchContainer } from '../../styles/containers';

const FooterSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [isValidQuery, setIsValidQuery] = useState<boolean>(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const onQueryChange= (e: React.FormEvent<HTMLInputElement>) => {
        const newQuery = e.currentTarget.value;
        setIsValidQuery(newQuery !== "");
        setQuery(newQuery);
    }

    return <FooterContainer style={{ flexDirection: "row", justifyContent: "center" }}>
        <FooterSearchContainer onSubmit={onSubmit}>
            <NoBorderInput onChange={onQueryChange} placeholder={"Ask this graph questions..."} />
            <SubmitButton isValid={isValidQuery} type={"submit"}>
                <PiArrowRightBold />
            </SubmitButton>
        </FooterSearchContainer>
    </FooterContainer>
};

export default FooterSearch;