import { useState } from "react";

const useParams=()=>{
    const [params,setParams]=useState([["",""]]);
    const addParam=(e)=>{
        e.preventDefault();
        setParams(params.concat([["",""]]));
    }
    const handleParamChange=(i,e,key_or_value)=>{
        e.preventDefault();
        const new_params=params.slice();
        new_params[i][key_or_value]=e.target.value;
        setParams(new_params);
    }
    
    const deleteParam=(i,e)=>{
        e.preventDefault();
        setParams(params.filter((param,idx)=>idx!=i));
    }

    const paramsComponent=params.map((param,idx)=>{
        return(
            <div key={idx} className="flex">
                <input type="text" value={param[0]} onChange={(e)=>{handleParamChange(idx,e,0)}} placeholder='Key' className="h-12 my-2 mx-2 grow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 " />
                <input type="text" value={param[1]} onChange={(e)=>{handleParamChange(idx,e,1)}} placeholder='Value' className="h-12 my-2 mx-2 grow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 " />
                {/* <button onClick={(e)=>{deleteParam(idx,e)}}>Delete</button> */}
                <button className="w-1/6 my-2 h-12 mx-2 items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center" onClick={(e)=>{deleteParam(idx,e)}}>Delete</button>
            </div>
        );
    }).concat(<div key="addParam"><button className="w-12 my-2 h-12 mx-2 items-end text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl font-bold text-center" onClick={addParam}>+</button></div>);
    return([paramsComponent,params,setParams]);

}
export default useParams;