"use client";
import Editor from "@monaco-editor/react";
import { useEffect,useState } from "react";

export default function useBody(props){
    const [response,setResponse]=useState();
    const [responseCode,setResponseCode]=useState();
    const [requestURL,requestMethod,params,headers,body]=props;
    const [pretty,setPretty]=useState(false);

    const compileRequest=()=>{
        let headersDict={};
        let paramString=params.filter((param)=>param[0]).map((param)=>param[0]+"="+param[1]).join('&');
        headers.filter((header)=>header[0]).map((header)=>{headersDict[header[0]]=header[1]});
        let URLString=paramString?requestURL+"?"+paramString:requestURL;
        return [URLString,headersDict];
    }
    const fetchResponse=async (e)=>{
        e.preventDefault();<useRequestCardList />
        setPretty((value)=>{return false});
        setResponse("Fetching...");
        const [URLString,headersDict]=compileRequest();
        let options={
            method:requestMethod,
            headers: headersDict,
        };
        if(body) options.body=body;
        const res=await fetch(URLString,options);
            console.log(res);
        try{
                const responseText=await res.text();
                console.log(responseText);
                setResponse(responseText);
            setResponseCode(res.status);
        }catch(error){
            setResponse(String(error));
            setResponseCode(res.status);
        }
    };
    let parsedResponse;
    if(pretty){
        parsedResponse=JSON.stringify(JSON.parse(response),null,2);
    }else{
        parsedResponse=response;
    }
    const responseComponent=<>
        <div>Response Code: <span style={{'color':(responseCode>=200 && responseCode<=299)?"green":"red"}}>{responseCode}</span></div>
        <input type="checkbox" checked={pretty} onClick={()=>{setPretty(!pretty)}} /> Pretty JSON
        <Editor height="50vh" width="100vw" defaultLanguage="json" value={parsedResponse} options={{'readOnly':'true'}}/>
    </>
    return([responseComponent,fetchResponse]);
}