import React, { useContext, useEffect } from 'react';
import { DrawerContainer } from '../../styles/containers';
import { useSpring, animated } from 'react-spring';
import { DrawerContext } from '../../../providers/DrawerProvider';
import { DrawerType } from '../../../types/contexts';

const HistoryDrawer = () => {
    const drawerContext = useContext(DrawerContext);

    useEffect(() => {
        console.log("drawerContext", drawerContext)
    }, [drawerContext])

    const animation = useSpring({
        transform: (drawerContext?.vars.type === DrawerType.history && drawerContext?.vars.isOpen) ? `translateX(0)` : `translateX(100%)`,
        config: { mass: 1, tension: 280, friction: 30 },
    });

    return (drawerContext?.vars.type === DrawerType.history && drawerContext?.vars.isOpen) ? <DrawerContainer style={animation}>
        
    </DrawerContainer> : <></>
};

export default HistoryDrawer;