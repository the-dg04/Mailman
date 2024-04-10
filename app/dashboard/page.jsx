"use client"
import {useState} from 'react';
import useParams from './useParams';
import useRequest from './useRequest';
import useHeaders from './useHeaders';

export default function Page(){
    const [responseText,setResponseText]=useState("");
    const [paramsComponent,params]=useParams();
    const [headersComponent,headers]=useHeaders();
    const [requestComponent,requestURL,requestMethod]=useRequest();
    return(
        <>
            <div className="requestContainer">
                <form>
                    {requestComponent}
                    {paramsComponent}
                    {/* {headersComponent} */}
                </form>
            </div>
            <div className="queryContainer"></div>
            <div className="responseContainer">{responseText}</div>
        </>
    );
}