import RequestCard from "@/components/RequestCard";
import NewRequestButton from "@/components/NewRequestButton";
import { useState,useEffect } from "react";
export default function useRequestCardList(props){
    const [allRequests,setAllRequests]=useState([{'name':"Loading..."}]);
    const [activeRequestId,setActiveRequestId]=useState("");
    const [setRequestURL,setRequestMethod,setParams,setHeaders,setBody,setResponse,setResponseCode]=props;

    const createNewRequest=async ()=>{
        const res=await fetch('/api/newRequest',{
            method:"POST",
            body:JSON.stringify({
                requestURL: "",
                requestMethod: "GET",
                requestParams: "[]",
                requestHeaders: "[]",
                requestBody: "",
                requestResponse: "",
                requestResponseCode:0
            })
        })
        const newRequest=await res.json()
        setAllRequests(allRequests.concat([newRequest.result]))
        setActiveRequestId(newRequest.result.id)
    }
    const createNewRequestAfterDeletion=async ()=>{
        const res=await fetch('/api/newRequest',{
            method:"POST",
            body:JSON.stringify({
                requestURL: "",
                requestMethod: "GET",
                requestParams: "[]",
                requestHeaders: "[]",
                requestBody: "",
                requestResponse: "",
                requestResponseCode:0
            })
        })
        const newRequest=await res.json()
        setAllRequests([newRequest.result])
        setActiveRequestId(newRequest.result.id)
    }

    const fetchAllRequests=async ()=>{
        try{
            console.log("E");
            const res=await fetch('/api/getAllRequests')
            const responseText=await res.json()
            if(responseText.result.length==0){
                createNewRequestAfterDeletion()
            }else{
                setAllRequests(()=>{
                    return responseText.result.map((response)=>{return {'name':response.requestName,'id':response._id,'response':response,'editMode':false}})
                })
                if(activeRequestId==""){
                    setActiveRequestId(responseText.result[0]._id)
                }
            }
            console.log("actveRequestId : ",activeRequestId);
        }catch(err){
            console.log(String(err));
        }
    }
    const fetchAllRequestsAfterDeletion=async ()=>{
        try{
            console.log("E");
            const res=await fetch('/api/getAllRequests')
            const responseText=await res.json()
            if(responseText.result.length==0){
                createNewRequestAfterDeletion()
            }else{
                setAllRequests(()=>{
                    return responseText.result.map((response)=>{return {'name':response.requestName,'id':response._id,'response':response,'editMode':false}})
                })
                    setActiveRequestId(responseText.result[0]._id)
            }
            console.log("actveRequestId : ",activeRequestId);
        }catch(err){
            console.log(String(err));
        }
    }

    useEffect(()=>{
        console.log(activeRequestId);
        const updateActiveRequest=()=>{
            try{
                if(activeRequestId!=""){
                    const activeRequestParams=allRequests.filter((req)=>req.id==activeRequestId)[0]
                    console.log(activeRequestParams.response);
                    setRequestURL(activeRequestParams.response.requestURL)
                    setRequestMethod(activeRequestParams.response.requestMethod)
                    setParams(JSON.parse(activeRequestParams.response.requestParams))
                    setHeaders(JSON.parse(activeRequestParams.response.requestHeaders))
                    setBody(activeRequestParams.response.requestBody)
                    setResponse(activeRequestParams.response.requestResponse)
                    setResponseCode(Number(activeRequestParams.response.requestResponseCode))
                }
            }catch(error){
                console.log("error");
            }
        }
        updateActiveRequest()
    },[activeRequestId])

    useEffect(()=>{
        fetchAllRequests()
    },[])
    const deleteRequest=async (_id)=>{
        const res=await fetch(`/api/deleteRequestById/${_id}`,{method:"DELETE"})
        const responseText=await res.json()
        console.log(responseText);
        setAllRequests(allRequests.filter((request)=>request.id!=_id))
        if(_id==activeRequestId){
            await fetchAllRequestsAfterDeletion()
        }
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
                    return {'name':req.name,'id':req.id,'response':req.response,'editMode':!req.editMode}
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
                    return {'name':e.target.value,'id':req.id,'response':req.response,'editMode':req.editMode}
                }
                return req
            }
        ))
    }
    
    const getRequestById=async (requestId)=>{
        const res=fetch(`/api/getRequestById/${requestId}`)
        const fetchedRequest=await res.json()
    }
    return(
        [<ul className="space-y-2 pb-2">
            <NewRequestButton createNewRequest={createNewRequest} />
            {allRequests.map((request,idx)=>
                <RequestCard request={request} activeRequestId={activeRequestId} setActiveRequestId={setActiveRequestId} updateRequest={updateRequest} toggleMode={toggleMode} deleteRequest={deleteRequest} key={idx}/>
            )}
        </ul>,activeRequestId]
    );
}