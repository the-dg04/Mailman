"use client"
import {useState} from 'react';
import useRequest from '@@/_hooks/useRequest';
import useMethod from '@@/_hooks/useMethod';

export default function Page(){
    const [responseText,setResponseText]=useState("");
    const [requestComponent,requestURL,requestMethod]=useRequest();
    const [methodComponent,params,headers,body]=useMethod();
    const compileRequest=(e)=>{
        e.preventDefault();
        let headersDict={};
        let paramString=params.filter((param)=>param[0]).map((param)=>param[0]+"="+param[1]).join('&');
        params.map((header)=>{headersDict[header[0]]=header[1]});
        let URLString=paramString?requestURL+"?"+paramString:requestURL;
        console.log(URLString);
        console.log(requestMethod);
        console.log(headersDict);
        console.log(body);
    }
    return(
        <>
            <div className="requestContainer">
                <form>
                    {requestComponent}
                    <button type="submit" onClick={compileRequest} style={{'color':'white','backgroundColor':'rgb(0, 76, 255)','border':'1px solid rgb(0, 76, 255)','marginLeft':'10px','marginBottom':'20px','borderRadius':'3px'}}>Send</button>
                    {methodComponent}
                </form>
            </div>
            <div className="queryContainer"></div>
            <div className="responseContainer">{responseText}</div>
            <div></div>
        </>
    );
}