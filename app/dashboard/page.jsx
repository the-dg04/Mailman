"use client"
import {useState} from 'react';
import useRequest from './useRequest';
import useMethod from './useMethod';

export default function Page(){
    const [responseText,setResponseText]=useState("");
    const [requestComponent,requestURL,requestMethod]=useRequest();
    const methodComponent=useMethod();
    return(
        <>
            <div className="requestContainer">
                <form>
                    {requestComponent}
                    {methodComponent}
                </form>
            </div>
            <div className="queryContainer"></div>
            <div className="responseContainer">{responseText}</div>
        </>
    );
}