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

    const paramsComponent=[<div>Params</div>].concat(params.map((param,idx)=>{
        return(
            <div key={idx} style={{'display':'flex'}}>
                <input type="text" value={param[0]} onChange={(e)=>{handleParamChange(idx,e,0)}} placeholder='Key' style={{'width':'80px'}}/>
                <input type="text" value={param[1]} onChange={(e)=>{handleParamChange(idx,e,1)}} placeholder='Value'/>
                <button onClick={(e)=>{deleteParam(idx,e)}}>Delete</button>
            </div>
        );
    })).concat(<div key="addParam">
        <button onClick={addParam}>+</button>
    </div>);
    return([paramsComponent,params]);

}
export default useParams;