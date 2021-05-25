import React from 'react'

const Link = ({href, children}) => {

    const serve = (e)=>{
        if(e.metaKey || e.ctrlKey){
            return;
        }
        e.preventDefault();
        window.history.pushState({}, '', href);

        // Broadcast navigation link change
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <div>
            <a href={href} className="item" onClick={(e)=>serve(e)}>
                {children}
            </a>
        </div>
    )
}

export default Link;