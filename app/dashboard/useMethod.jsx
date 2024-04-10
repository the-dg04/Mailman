import { useState } from "react";
import useParams from './useParams';
import useHeaders from './useHeaders';
import useBody from "./useBody";

export default function useMethod(){
    const [paramsComponent,params]=useParams();
    const [headersComponent,headers]=useHeaders();
    const bodyComponent=useBody();
    const [currentMethod,setCurrentMethod]=useState("Params");
    const methodSelectorComponent=['Params','Headers','Body'].map((choice,idx)=>
            <span key={idx}>
                <input type="radio" name="method" value={choice} checked={currentMethod==choice} onClick={()=>{setCurrentMethod(choice)}} />
                {choice}
            </span>
    );
    let methodComponent;
    if(currentMethod=="Params") methodComponent=paramsComponent;
    if(currentMethod=="Headers") methodComponent=headersComponent;
    if(currentMethod=="Body") methodComponent=bodyComponent;
    return (
        <>
            <div>
                {methodSelectorComponent}
            </div>
            {methodComponent}
        </>
    );
}