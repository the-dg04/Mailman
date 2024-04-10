"use client"
import {useState} from 'react';
import useParams from './useParams';

export default function Page(){
    const [requestURL,setRequestURL]=useState();
    const [requestMethod,setRequestMethod]=useState("GET");
    const [responseText,setResponseText]=useState("asdasd");
    const [paramsComponent,params]=useParams();
    return(
        <>
            <div className="requestContainer">
                <form>
                    <select id="requestMethodSelection" onChange={(e)=>{setRequestMethod(e.target.value)}}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="DELETE">DELETE</option>
                        <option value="UPDATE">UPDATE</option>
                    </select>
                    <input type="text" value={requestURL} placeholder="Enter URL or paste text" onChange={(e)=>{setRequestURL(e.target.value)}} style={{'border':'1px solid black'}}/>
                    <button type="submit" onClick={(e)=>{e.preventDefault()}} style={{'color':'white','backgroundColor':'rgb(0, 76, 255)','border':'1px solid rgb(0, 76, 255)','marginLeft':'10px','borderRadius':'3px'}}>Send</button>
                    <div>{requestMethod}</div>
                    {paramsComponent}
                    <div>
                        <button onClick={addParam}>+</button>
                    </div>
                    {/* {paramDisplayer} */}
                </form>
            </div>
            <div className="queryContainer"></div>
            <div className="responseContainer">{responseText}</div>
        </>
    );
}