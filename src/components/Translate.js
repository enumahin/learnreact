import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaan',
        value: 'af'
    },{
        label: 'Arabic',
        value: 'ar'
    },{
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    //const [debouncedLanguage, setDebouncedLanguage] = useState(language);
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeID = setTimeout(()=>{
            //setDebouncedLanguage(language);
            setDebouncedText(text)
        }, 500);

        return () => {
            clearTimeout(timeID);
        }
    },[text])
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label"> Enter Text</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                    <Dropdown 
                        options={options} 
                        selected={language} 
                        onSelectedChange={setLanguage} 
                        title={'Select Language'}
                    />

                    <hr />
                    <h3 className="ui header">Output</h3>
                    <Convert text={debouncedText} language={language} />
            </div>
        </div>
    );
};
export default Translate;