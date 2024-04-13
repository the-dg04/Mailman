"use client"
// import { MongoClient } from "mongodb";
// import nextConnect from 'next-connect';
import { useEffect, useState } from "react";
export default function test(){
    const [allRequests,setAllRequests]=useState([]);
    useEffect(()=>{
        const fetchAllRequests=async ()=>{
            try{
                console.log("E");
                const res=await fetch('/api/getAllRequests')
                const responseText=await res.json()
                setAllRequests(responseText.result.map((response)=>{return {'name':response.requestName,'id':response._id,'editMode':false}}))
            }catch(err){
                console.log(String(err));
            }
        }
        fetchAllRequests()
    },[])
    const deleteRequest=async (_id)=>{
        const res=await fetch(`/api/deleteRequestById/${_id}`,{method:"DELETE"})
        setAllRequests(allRequests.filter((request)=>request.id!=_id))
    }
    // const changeMode=
    return (
        <>
            {allRequests.map((request,idx)=>
                <div key={idx} style={{'display':'flex'}}>
                    {!request.editMode?<div>{request.name}</div>:<input type="text" value={request.name}/>}
                    <button onClick={()=>{setAllRequests(allRequests.map((req)=>{
                        if(req.id==request.id){
                            // req.editMode=!req.editMode
                            return {'name':req.name,'id':req.id,'editMode':!req.editMode}
                        }
                        return req
                    }))}}>Change Mode</button>:<button onClick={()=>{deleteRequest(request.id)}}>DELETE</button>
                </div>
            )}
        </>
    );
}