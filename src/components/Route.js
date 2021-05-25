import {useEffect, useState} from 'react'

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        const onLocationChanges = ()=>{
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChanges);

        return () => {
            window.removeEventListener('popstate', onLocationChanges);
        };
    },[])

    return currentPath === path ? children : null;
}

export default Route;