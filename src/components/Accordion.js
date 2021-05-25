import React,{useState} from 'react'


const Accordion = ({items}) => {

   const [activeIndex, setActiveIndex] = useState(null);

    const onItemClicked = (index) => {
        console.log('Toggle item with index', index);
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
       return (
       <React.Fragment key={item.title}>
           <div className={`title ${active}`} onClick={() => onItemClicked(index)}>
               <i className="dropdown icon"></i>
               {item.title}
           </div>
           <div className={`content ${active}`}>
               <p>{item.content}</p>
           </div>
       </React.Fragment>
       );
    })

    return (
         <div className="ui styled accordion">
             {renderedItems}
             
           <p>{activeIndex}</p>
             </div>
    );
};

export default Accordion;