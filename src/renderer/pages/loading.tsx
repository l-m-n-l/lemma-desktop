import React from 'react';
import { PatternedMainContainer } from '../styles/containers';
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
    return <PatternedMainContainer style={{ alignItems: "center", justifyContent: "center" }}>
        <TailSpin
            height="50"
            width="50"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="3"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </PatternedMainContainer>
};

export default Loading;