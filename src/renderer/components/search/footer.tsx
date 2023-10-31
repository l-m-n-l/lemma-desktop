import React, { FormEvent, useEffect, useState } from 'react';

import { PiArrowRightBold } from 'react-icons/pi';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
import { getRandomIcon, getRandomName } from '../../../helpers/util';

import * as emoji from 'node-emoji';

import { NoBorderInput, SubmitButton } from '../../styles/interactions';
import { FooterContainer, FooterSearchContainer, SpaceGraphNodeDnd, NoteBookGraphNodeDnd } from '../../styles/containers';

const FooterSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [isValidQuery, setIsValidQuery] = useState<boolean>(false);

    const [spaceNodeIcon, setSpaceNodeIcon] = useState<string>("");
    const [noteBookNodeIcon, setNoteBookNodeIcon] = useState<string>("");

    useEffect(() => {
        setSpaceNodeIcon(getRandomIcon());
        setNoteBookNodeIcon(getRandomIcon())
    }, [])

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const onQueryChange= (e: React.FormEvent<HTMLInputElement>) => {
        const newQuery = e.currentTarget.value;
        setIsValidQuery(newQuery !== "");
        setQuery(newQuery);
    }

    const onDragStart = (event, nodeData) => {
        event.dataTransfer.setData('application/reactflow', nodeData);
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
                <div style={{
                    width: "2px",
                    backgroundColor: "lightgray",
                    height: "100%"
                }} />
                <SpaceGraphNodeDnd
                    data-tooltip-content={"Drag to Create New Space"} 
                    data-tooltip-id={"info-tooltip-2"} 
                    onDragStart={(e) => onDragStart(e, JSON.stringify({
                        icon: spaceNodeIcon,
                        title: getRandomName(),
                        type: "space"
                    }))}  
                    onDragEnd={() => setSpaceNodeIcon(getRandomIcon())}  
                    draggable
                >
                    {emoji.get(spaceNodeIcon)}
                </SpaceGraphNodeDnd>
                <NoteBookGraphNodeDnd 
                    data-tooltip-content={"Drag to Create New Notebook"} 
                    data-tooltip-id={"info-tooltip-2"}
                    onDragStart={(e) => onDragStart(e, JSON.stringify({
                        icon: noteBookNodeIcon,
                        title: getRandomName(),
                        type: "notebook"
                    }))}
                    onDragEnd={() => setNoteBookNodeIcon(getRandomIcon())}  
                    draggable
                >
                    {emoji.get(noteBookNodeIcon)}
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