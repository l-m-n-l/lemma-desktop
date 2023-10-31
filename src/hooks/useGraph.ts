import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useGraph = () => {
    const selectedGraphId = useSelector();
    const graphs = useSelector();
};

export default useGraph;