import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/Header'

const options = [
    {
        label: 'Red',
        value: 'red'
    },{
        label: 'Blue',
        value: 'blue'
    },
    {
        label: 'Green',
        value: 'green'
    }
];

const items = [
    {
        title: "What is React",
        content: "React is a front end javascript library"
    },{
        title: "Why use react",
        content: "React is a favorite js library among engineers"
    },
    {
        title: "How do you use react",
        content: "We use react by creating components"
    }
];



const App = () => {

    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
                <div> 
                    <Header />
                    <Route path="/" >
                        <Accordion items={items}/>
                    </Route>
                    <Route path="/list" >
                        <Search/>
                    </Route>
                    <Route path="/dropdown" >
                    <Dropdown title={'Select a Color'} visibile={true} options={options} onSelectedChange={setSelected} selected={selected}/>
                    </Route>
                    <Route path="/translate" >
                        <Translate />
                    </Route>
                </div>
                
            )
};

export default App;