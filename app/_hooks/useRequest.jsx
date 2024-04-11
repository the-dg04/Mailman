import { useState } from "react";

export default function useRequest(){
    const [requestURL,setRequestURL]=useState();
    const [requestMethod,setRequestMethod]=useState("GET");
    return (
        [<>
            <select id="requestMethodSelection" onChange={(e)=>{setRequestMethod(e.target.value)}}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="DELETE">DELETE</option>
                <option value="UPDATE">UPDATE</option>
            </select>
            <input type="text" value={requestURL} placeholder="Enter URL or paste text" onChange={(e)=>{setRequestURL(e.target.value)}} style={{'border':'1px solid black'}}/>
        </>,requestURL,requestMethod]
    );
}