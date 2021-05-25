import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange, title}) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        
        const onBodyClick = (event) => {
            if(ref.current != null){
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    
    }, []);

    const renderedItems = options.map((opt) => {
        if(opt === selected){
            return null;
        }
        return (
            <div 
                key={opt.value}
                onClick={() => onSelectedChange(opt)} 
                className="item">
                {opt.label}
            </div>
        )
    })

    return (
            <div className="ui form" ref={ref}>
                <div className="field">
                    <label className="label">{title}</label>
                    <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedItems}
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Dropdown;