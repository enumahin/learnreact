import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Convert = ({language, text}) =>{

    const [output, setOutput] = useState('');
    
    useEffect(() => {
        if(text){
       (async () => {
           await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
              params: {
                  q: text,
                  target: language.value,
                  key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
              }
          }).then((res) => {
            setOutput(res.data.data.translations[0].translatedText);
       });
       })();
    }
    },[language, text]);

    return (
        <div>
            <h1 className="ui header">{output}</h1>
        </div>
    );
}

export default Convert;