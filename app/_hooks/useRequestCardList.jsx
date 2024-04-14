import RequestCard from "@/components/RequestCard";
import NewRequestButton from "@/components/NewRequestButton";
import { useState,useEffect } from "react";
export default function useRequestCardList(props){
    const [allRequests,setAllRequests]=useState([]);
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
    useEffect(()=>{
        fetchAllRequests()
    },[])
    const deleteRequest=async (_id)=>{
        const res=await fetch(`/api/deleteRequestById/${_id}`,{method:"DELETE"})
        setAllRequests(allRequests.filter((request)=>request.id!=_id))
    }

    const getNameById=(requestId)=>{
        return allRequests.filter((req)=>req.id==requestId)[0].name
    }
    const saveRequest=async (requestId)=>{
        const newName=getNameById(requestId);
        const res=await fetch(`/api/updateRequestById/${requestId}`,{
            method:"PATCH",
            body:JSON.stringify({requestName:newName})
        })
    }

    const toggleMode=(requestId)=>{
        setAllRequests(
            allRequests.map((req)=>{
                if(req.id==requestId){
                    if(req.editMode) saveRequest(requestId)
                    return {'name':req.name,'id':req.id,'editMode':!req.editMode}
                }
                return req
            }
        ))
    }
    const updateRequest=(e,requestId)=>{
        e.preventDefault();
        setAllRequests(
            allRequests.map((req)=>{
                if(req.id==requestId){
                    return {'name':e.target.value,'id':req.id,'editMode':req.editMode}
                }
                return req
            }
        ))
    }
    const createNewRequest=async ()=>{
        const res=await fetch('/api/newRequest',{
            method:"POST",
            body:JSON.stringify({
                requestURL: "",
                requestMethod: "",
                requestParams: "",
                requestHeaders: "",
                requestBody: "",
                requestResponse: ""
            })
        })
        const newRequest=await res.json()
        setAllRequests(allRequests.concat([newRequest.result]))
    }
    return(
        <ul className="space-y-2 pb-2">
            <NewRequestButton createNewRequest={createNewRequest} />
            {allRequests.map((request,idx)=>
                <RequestCard request={request} updateRequest={updateRequest} toggleMode={toggleMode} deleteRequest={deleteRequest} key={idx}/>
            )}
        </ul>
    );
}