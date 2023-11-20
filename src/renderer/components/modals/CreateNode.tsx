import React, { useMemo, useState } from 'react';
import * as emoji from 'node-emoji';
import { PiArrowLeftBold, PiPlus, PiPlusBold, PiX, PiXBold, PiGitBranchBold, PiFolderFill, PiFilePlusFill, PiLinkBold, PiTrashBold } from 'react-icons/pi';
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
            flexDirection: "column"
        }}>
            <CreateNodeSourceButton>
                <PiLinkBold />
                From Link
            </CreateNodeSourceButton>
            <CreateNodeSourceButton>
                <PiFolderFill />
                From Local
            </CreateNodeSourceButton>
            <CreateNodeSourceButton>
                <PiPlusBold />
                Blank Note Book
            </CreateNodeSourceButton>
            <CreateNodeSourceButton>
                <PiTrashBold />
                Cancel
            </CreateNodeSourceButton>
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
        <ModalBackDrop style={{backgroundColor: "transparent"}} onClick={() => {
            setModalState(null, false, null);
        }} />
        <CreateNodeModalContainer style={{
            left: node.x + 100 + "px",
            top: node.y + "px",
        }}>
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box"
            }}>
                <div style={{
                    position: "relative"
                }}>
                    <CreateNodeIconButton style={{ fontSize: "1rem", width: "2rem" }} isValid={iconDropdownSelected} onClick={() => setIconDropdownSelected(!iconDropdownSelected)}>{emoji.get(icon)}</CreateNodeIconButton>
                    {(iconDropdownSelected) ? <IconSelection icon={icon} setIcon={setIcon} setIsOpen={setIconDropdownSelected} /> : <></>}
                </div>
                <CreateNodeNameInput style={{ fontSize: "0.75rem" }} placeholder={name} onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            {(node.type === "space") ? <CreateSpace setIsValid={setIsValid} /> : <CreateNotebook setIsValid={setIsValid} />}
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