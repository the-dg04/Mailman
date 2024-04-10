import { useState } from "react";

const useHeaders=()=>{
    const [headers,setHeaders]=useState([["",""]]);
    const addHeader=(e)=>{
        e.preventDefault();
        setHeaders(headers.concat([["",""]]));
    }
    const handleHeaderChange=(i,e,key_or_value)=>{
        e.preventDefault();
        const new_headers=headers.slice();
        new_headers[i][key_or_value]=e.target.value;
        setHeaders(new_headers);
    }
    
    const deleteHeader=(i,e)=>{
        e.preventDefault();
        setHeaders(headers.filter((header,idx)=>idx!=i));
    }

    const headersComponent=[<div>Headers</div>].concat(headers.map((header,idx)=>{
        return(
            <div key={idx} style={{'display':'flex'}}>
                <input type="text" value={header[0]} onChange={(e)=>{handleHeaderChange(idx,e,0)}} placeholder='Key' style={{'width':'80px'}}/>
                <input type="text" value={header[1]} onChange={(e)=>{handleHeaderChange(idx,e,1)}} placeholder='Value'/>
                <button onClick={(e)=>{deleteHeader(idx,e)}}>Delete</button>
            </div>
        );
    })).concat(<div key="addHeader">
        <button onClick={addHeader}>+</button>
    </div>);
    return([headersComponent,headers]);

}
export default useHeaders;