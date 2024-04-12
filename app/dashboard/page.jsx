"use client"
import {useState} from 'react';
import useRequest from '@@/_hooks/useRequest';
import useMethod from '@@/_hooks/useMethod';
import useResponse from "@@/_hooks/useResponse";

export default function Page(){
    const [requestComponent,requestURL,requestMethod]=useRequest();
    const [methodComponent,params,headers,body]=useMethod();
    const [responseComponent,fetchResponse]=useResponse([requestURL,requestMethod,params,headers,body]);
    return(
        <>
            <div className="requestContainer">
                <form>
                    {requestComponent}
                    <button type="submit" onClick={fetchResponse} style={{'color':'white','backgroundColor':'rgb(0, 76, 255)','border':'1px solid rgb(0, 76, 255)','marginLeft':'10px','marginBottom':'20px','borderRadius':'3px'}}>Send</button>
                    {methodComponent}
                </form>
            </div>
            <div className="queryContainer"></div>
            <div className="responseContainer">{responseComponent}</div>
            <div></div>
        </>
    );
}