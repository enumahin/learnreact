import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');
    const [results, setResults] = useState([]);

useEffect(() => {
    if(term){
    const timerId = setTimeout(() => {
        setDebouncedTerm(term);
    }, 1000);

    return () => {
        clearTimeout(timerId);
    };
}
},[term])

    useEffect(() => {
       /* (async () => {
            await axios.get('');
        })();*/
        const search = async () => {
            const baseURL = "https://en.wikipedia.org/w/api.php"; 
           const { data } = await axios.get(baseURL, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
         }
         if(debouncedTerm){
            search();
         }
        //  if(debouncedTerm && !results){
        //      search();
        //  }else{
        //     const timeoutId = setTimeout(() => {
        //         if(debouncedTerm){
        //             search();
        //         }
        //      }, 500);
             
        //      return () => {
        //         clearTimeout(timeoutId);
        //      };
        //  }
    }, [debouncedTerm, results.lenght]);

    const renderedItems = results.map((data) => {
      return (
        <div className="item" key={data.pageid}>
            <div className="right floated content">
                <a
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${data.pageid}`}
                    >
                        Go
                    </a>
            </div>
            <div className="content">
                <div className="header">
                    {data.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: data.snippet}}></span>
            </div>
        </div>
      );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedItems}
            </div>
        </div>
    );
};

export default Search;