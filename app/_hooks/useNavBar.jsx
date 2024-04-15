import NavBar from "@/components/NavBar";
export default function useNavbar(props){
    const [requestURL,requestMethod,params,headers,body,response,responseCode]=props.apiParams;
    const saveRequest=async ()=>{
        const res=await fetch(`/api/updateRequestById/${props.activeRequestId}`,
        {
            method:"PATCH",
            body:JSON.stringify({
                requestURL: requestURL,
                requestMethod: requestMethod,
                requestParams: JSON.stringify(params),
                requestHeaders: JSON.stringify(headers),
                requestBody: body,
                requestResponse: response,
                requestResponseCode: Number(responseCode)
            })
        })
    }
    return([<NavBar showSidebar={props.showSidebar} setShowSidebar={props.setShowSidebar} showBackdrop={props.showBackdrop} setShowBackdrop={props.setShowBackdrop} saveRequest={saveRequest}/>,saveRequest]);
}