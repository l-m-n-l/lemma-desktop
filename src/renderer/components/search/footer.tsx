import React, { FormEvent, useState } from 'react';

import { PiArrowRightBold } from 'react-icons/pi';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
import { getRandomIcon } from '../../../helpers/util';


import { NoBorderInput, SubmitButton } from '../../styles/interactions';
import { FooterContainer, FooterSearchContainer, SpaceGraphNodeDnd, NoteBookGraphNodeDnd } from '../../styles/containers';

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

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return <FooterContainer style={{ flexDirection: "row", justifyContent: "center" }}>
        <FooterSearchContainer onSubmit={onSubmit}>
            <NoBorderInput onChange={onQueryChange} placeholder={"Ask this graph questions..."} />
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem"
            }}>
                <SubmitButton isValid={isValidQuery} type={"submit"}>
                    <PiArrowRightBold />
                </SubmitButton>
                <SpaceGraphNodeDnd
                    data-tooltip-content={"Drag to Create New Space"} 
                    data-tooltip-id={"info-tooltip-2"} 
                    onDragStart={(e) => onDragStart(e, "space")} 
                    draggable
                >
                    {getRandomIcon()}
                </SpaceGraphNodeDnd>
                <NoteBookGraphNodeDnd 
                    data-tooltip-content={"Drag to Create New Notebook"} 
                    data-tooltip-id={"info-tooltip-2"}
                    onDragStart={(e) => onDragStart(e, "notebook")}  
                    draggable
                >
                </NoteBookGraphNodeDnd>
                <ReactTooltip 
                    style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white" }} 
                    place={"top"} 
                    id={"info-tooltip-2"}
                />
            </div>
        </FooterSearchContainer>
    </FooterContainer>
};

export default FooterSearch;