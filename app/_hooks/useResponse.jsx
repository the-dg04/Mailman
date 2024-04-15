"use client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
export const dynamic = 'force-dynamic';
export default function useResponse(props){
    const [response,setResponse]=useState("");
    const [responseCode,setResponseCode]=useState("");
    const [requestURL,requestMethod,params,headers,body]=props;

    const compileRequest=()=>{
        let headersDict={};
        let paramString=params.filter((param)=>param[0]).map((param)=>param[0]+"="+param[1]).join('&');
        headers.filter((header)=>header[0]).map((header)=>{headersDict[header[0]]=header[1]});
        let URLString=paramString?requestURL+"?"+paramString:requestURL;
        return [URLString,headersDict];
    }
    const fetchResponse=async (e)=>{
        e.preventDefault();<useRequestCardList />
        setResponse("Fetching...");
        const [URLString,headersDict]=compileRequest();
        let options={
            method:requestMethod,
            headers: headersDict,
        };
        if(body) options.body=body;
        try{
            const res=await fetch(URLString,options);
            console.log(res);
            const responseText=await res.text();
            console.log(responseText);
            setResponse((cur_val)=>{return responseText});
            setResponseCode((cur_val)=>{return res.status});
        }catch(error){
            setResponse((cur_val)=>{return String(error)});
            setResponseCode((cur_val)=>{return 0});
        }
        
    };
    let parsedResponse=response;
    try{
        parsedResponse=JSON.stringify(JSON.parse(response),null,2);
    }catch(error){
        console.log(String(error));
    }
    const responseComponent=<>
        <div className="flex w-full justify-start">
            <div>Response Code: <span style={{'color':(responseCode>=200 && responseCode<=299)?"green":"red"}}>{responseCode}</span></div>
        </div>
        <Editor height="50vh" defaultLanguage="json" value={parsedResponse} options={{'readOnly':'true'}}/>
    </>
    return([responseComponent,fetchResponse,response,setResponse,responseCode,setResponseCode]);
}