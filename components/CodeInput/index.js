import React from 'react';


const CodeInput = ({onchange, code}) => {
    return (
        <div>
            <input className="border-2 border-gray-500 rounded-md p-2" type="text" value={code} onChange={onchange} />
        </div>
    );
};



export default CodeInput;