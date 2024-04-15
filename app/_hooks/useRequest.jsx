import { useState } from "react";

export default function useRequest(){
    const [requestURL,setRequestURL]=useState("");
    const [requestMethod,setRequestMethod]=useState("GET");
    const [dropdownToggle,setDropdownToggle]=useState(false);
    return (
        [<div className="flex flex-row w-full">
        <div>
        <button id="dropdownDefaultButton" onClick={()=>{setDropdownToggle(!dropdownToggle)}} class="mt-5 w-24 mx-2 h-12 text-black bg-white  border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">{requestMethod}
        </button>

        <div id="dropdown" className={`w-24 mx-2 fixed z-10 ${!dropdownToggle?"hidden":""} divide-y  divide-gray-100 shadow bg-white`}>
           <ul class="py-2 text-sm w-24" aria-labelledby="dropdownDefaultButton">
              <li class="w-24 h-full hover:bg-gray-100">
               <button class=" w-24 h-full hover:bg-gray-100 text-left px-5" onClick={()=>{setRequestMethod("GET");setDropdownToggle(!dropdownToggle)}}>GET</button>
              </li>
              <li class="w-24 h-full hover:bg-gray-100">
               <button class=" w-24 h-full hover:bg-gray-100 text-left px-5" onClick={()=>{setRequestMethod("POST");setDropdownToggle(!dropdownToggle)}}>POST</button>
              </li>
              <li class="w-24 h-full hover:bg-gray-100">
               <button class=" w-24 h-full hover:bg-gray-100 text-left px-5" onClick={()=>{setRequestMethod("PATCH");setDropdownToggle(!dropdownToggle)}}>PATCH</button>
              </li>
              <li class="w-24 h-full hover:bg-gray-100">
               <button class=" w-24 h-full hover:bg-gray-100 text-left px-5" onClick={()=>{setRequestMethod("DELETE");setDropdownToggle(!dropdownToggle)}}>DELETE</button>
              </li>
           </ul>
        </div>
        </div>
        <input className="h-12 my-5 grow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" value={requestURL} placeholder="Enter URL or paste text" onChange={(e)=>{setRequestURL(e.target.value)}} />
     </div>,requestURL,setRequestURL,requestMethod,setRequestMethod]
    );
}