import React, { useMemo, useState } from 'react';
import * as emoji from 'node-emoji';
import { PiArrowLeftBold, PiPlus, PiPlusBold, PiX, PiXBold, PiGitBranchBold, PiFolderFill, PiFilePlusFill } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useGraph from '../../../hooks/useGraph';
import useTabs from '../../../hooks/useTabs';
import { ModalType } from '../../../types/contexts';
import { ModalBackDrop, CreateNodeModalContainer, ModalContent, ModalHeader, GraphIconContainer } from '../../styles/containers';
import { CloseModalButton, CreateNodeButton, CreateNodeIconButton, CreateNodeNameInput, CreateNodeSourceButton } from '../../styles/interactions';
import { GraphTileTitle } from '../../styles/typography';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
import IconSelection from '../dropdowns/IconSelection';

const CreateSpace = ({ ...props }) => {
    const {
        setIsValid
    } = props;

    return <ModalContent>
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: 'center',
            gap: "1rem",
            paddingTop: "2rem",
            paddingBottom: "2rem"
        }}>
            <CreateNodeSourceButton
                data-tooltip-content={"From Repository"} 
                data-tooltip-id={"info-tooltip-5"}
            >
                <PiGitBranchBold />
            </CreateNodeSourceButton>
            <CreateNodeSourceButton
                data-tooltip-content={"From Local Folder"} 
                data-tooltip-id={"info-tooltip-5"}
            >
                <PiFolderFill />
            </CreateNodeSourceButton>
            <ReactTooltip 
                style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white" }} 
                place={"bottom"} 
                id={"info-tooltip-5"}
            />
        </div>
    </ModalContent>
}

const CreateNotebook = ({ ...props }) => {
    const {
        setIsValid
    } = props;

    const [newNotebookSelected, setNewNotebookSelected] = useState(false);

    return <ModalContent>
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: 'center',
            gap: "1rem",
            paddingTop: "2rem",
            paddingBottom: "2rem"
        }}>
            <CreateNodeSourceButton
                data-tooltip-content={"New Notebook"} 
                data-tooltip-id={"info-tooltip-5"}
                onClick={() => {
                    setIsValid(true);
                }}
                isValid={newNotebookSelected}
            >
                <PiFilePlusFill />
            </CreateNodeSourceButton>
            <CreateNodeSourceButton
                data-tooltip-content={"From Repository"} 
                data-tooltip-id={"info-tooltip-5"}
            >
                <PiGitBranchBold />
            </CreateNodeSourceButton>
            <CreateNodeSourceButton
                data-tooltip-content={"From Local Folder"} 
                data-tooltip-id={"info-tooltip-5"}
            >
                <PiFolderFill />
            </CreateNodeSourceButton>
            <ReactTooltip 
                style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "black", color: "white" }} 
                place={"bottom"} 
                id={"info-tooltip-5"}
            />
        </div>
    </ModalContent>
}

const _createNodeModal = ({ graph, node, setModalState }) => {
    const dispatch = useDispatch();

    const [icon, setIcon] = useState(node.icon);
    const [name, setName] = useState(node.title);
    const [index, setIndex] = useState(0);
    const [isValid, setIsValid] = useState(false);

    const [iconDropdownSelected, setIconDropdownSelected] = useState(false);

    const sources = ["git"];

    return <>
        <ModalBackDrop onClick={() => {
            setModalState(null, false, null);
        }} />
        <CreateNodeModalContainer>
            <ModalHeader style={{
                justifyContent: "right"
            }}>
                {/* <CloseModalButton onClick={() => setModalState(null, false, null)}>
                    <PiArrowLeftBold />
                </CloseModalButton> */}

                <CloseModalButton onClick={() => setModalState(null, false, null)}>
                    <PiXBold />
                </CloseModalButton>
            </ModalHeader>
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box",
                gap: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1rem"
            }}>
                <div style={{
                    position: "relative"
                }}>
                    <CreateNodeIconButton isValid={iconDropdownSelected} onClick={() => setIconDropdownSelected(!iconDropdownSelected)}>{emoji.get(icon)}</CreateNodeIconButton>
                    {(iconDropdownSelected) ? <IconSelection icon={icon} setIcon={setIcon} setIsOpen={setIconDropdownSelected} /> : <></>}
                </div>
                <CreateNodeNameInput placeholder={name} onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            {(node.type === "space") ? <CreateSpace setIsValid={setIsValid} /> : <CreateNotebook setIsValid={setIsValid} />}
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
                boxSizing: "border-box",
                padding: "1rem"
            }}>
                <CreateNodeButton isValid={isValid}>
                    <PiPlusBold />
                    {(node.type === "notebook") ? "Note Book" : "Space"}
                </CreateNodeButton>
            </div>
        </CreateNodeModalContainer>
    </>
}

const CreateNodeModal = ({ graph }) => {
    const {
        currentTab: {
            state: {
                modal
            }
        },
        fns: {
            setModalState
        }
    } = useTabs();

    return (modal.isOpen && modal.type === ModalType.createNode && modal.data) ? <_createNodeModal graph={graph} node={modal.data} setModalState={setModalState} /> : <></>
};

export default CreateNodeModal;