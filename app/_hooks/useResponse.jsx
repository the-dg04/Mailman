"use client";
import Editor from "@monaco-editor/react";
import { useEffect,useState } from "react";

export default function useBody(props){
    const [response,setResponse]=useState();
    const [responseCode,setResponseCode]=useState();
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
                // mode:'no-cors',
                headers: headersDict,
            });
        try{
            if(res.status==200){

                const responseText=await res.json();
                console.log(responseText);
                console.log(res);
                setResponse(JSON.stringify(responseText,null,2));
            }else{
                setResponse(JSON.stringify(res,null,2));
            }
            setResponseCode(res.status);
        }catch(error){
            // console.log(res);
            setResponse(String(error));
            // console.log(error);
            setResponseCode(res.status);
        }
    };
    
    const responseComponent=<>
        <div>Response Code: <span style={{'color':responseCode==200?"green":"red"}}>{responseCode}</span></div>
        <Editor height="50vh" width="100vw" defaultLanguage="json" value={response} options={{'readOnly':'true'}}/>
    </>
    return([responseComponent,response,responseCode,fetchResponse]);
}