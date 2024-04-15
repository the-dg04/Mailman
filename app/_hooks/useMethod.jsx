import { useState } from "react";
import useParams from './useParams';
import useHeaders from './useHeaders';
import useBody from "./useBody";

export default function useMethod(){
    const [paramsComponent,params,setParams]=useParams();
    const [headersComponent,headers,setHeaders]=useHeaders();
    const [bodyComponent,body,setBody]=useBody();
    const [currentMethod,setCurrentMethod]=useState("Params");
    const methodSelectorComponent=['Params','Headers','Body'].map((choice,idx)=>
        <div key={idx} className={`w-24 p-2 ${choice==currentMethod?"font-bold":""}`} onClick={()=>{setCurrentMethod(choice)}}>{choice}</div>     
    );
    let methodComponent;
    if(currentMethod=="Params") methodComponent=paramsComponent;
    if(currentMethod=="Headers") methodComponent=headersComponent;
    if(currentMethod=="Body") methodComponent=bodyComponent;
    return (
        [<>
            <div className="flex">
                {methodSelectorComponent}
            </div>
            {methodComponent}
        </>,
        params,setParams,headers,setHeaders,body,setBody]);
}