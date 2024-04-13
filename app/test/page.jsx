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
                setAllRequests(responseText.result)
            }catch(err){
                console.log(String(err));
            }
        }
        fetchAllRequests()
    },[])
    // const deleteRequest(_id){

    // }
    return (
        <>
            {allRequests.map((request,idx)=>
                <div key={idx}>{request.requestName}</div>
            )}
        </>
    );
}