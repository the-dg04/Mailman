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
    const headersComponent=headers.map((header,idx)=>{
        return(
            <div key={idx} className="flex">
                <input type="text" value={header[0]} onChange={(e)=>{handleHeaderChange(idx,e,0)}} placeholder='Key' className="h-12 my-2 mx-2 grow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 " />
                <input type="text" value={header[1]} onChange={(e)=>{handleHeaderChange(idx,e,1)}} placeholder='Value' className="h-12 my-2 mx-2 grow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 " />
                <button className="w-1/6 my-2 h-12 mx-2 items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center" onClick={(e)=>{deleteHeader(idx,e)}}>Delete</button>
            </div>
        );
    }).concat(<div key="addHeader"><button className="w-12 my-2 h-12 mx-2 items-end text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl font-bold text-center" onClick={addHeader}>+</button></div>);
    return([headersComponent,headers,setHeaders]);

}
export default useHeaders;