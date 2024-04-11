"use client";
import Editor from "@monaco-editor/react";
import { useEffect,useState } from "react";

export default function useBody(props){
    const [response,setResponse]=useState();
    const [requestURL,requestMethod,params,headers,body]=props;

    const compileRequest=()=>{
        let headersDict={};
        let paramString=params.filter((param)=>param[0]).map((param)=>param[0]+"="+param[1]).join('&');
        headers.filter((header)=>header[0]).map((header)=>{headersDict[header[0]]=header[1]});
        let URLString=paramString?requestURL+"?"+paramString:requestURL;
        return [URLString,headersDict];
    }
    const fetchResponse=async (e)=>{
        e.preventDefault();
        const [URLString,headersDict]=compileRequest();
        const res=await fetch(URLString,
            {
                method:'GET',
                headers: headersDict,
            });
        const responseText=await res.json();
        console.log(responseText);
        setResponse(JSON.stringify(responseText,null,2));
    };
    
    const responseComponent=<Editor height="50vh" width="100vw" defaultLanguage="json" value={response} options={{'readOnly':'true'}}/>
    return([responseComponent,response,fetchResponse]);
}