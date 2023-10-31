import React, { useContext } from 'react';
import { DrawerContainer } from '../../styles/containers';
import { useSpring, animated } from 'react-spring';
import { ModalContext } from '../../../providers/ModalProvider';

const HistoryDrawer = () => {
    const modalContext = useContext(ModalContext);

    console.log("modalContext", modalContext);

    // const animation = useSpring({
    //     transform: isOpen ? `translateX(0)` : `translateX(100%)`,
    //     config: { mass: 1, tension: 280, friction: 60 },
    // });

    return <DrawerContainer side={"right"}>

    </DrawerContainer>
};

export default HistoryDrawer;