"use client"
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
export default function uitest(){
    const [showSidebar,setShowSidebar]=useState(false);
    const [showBackdrop,setShowBackdrop]=useState(false);
   //  const navbarComponent=navbar();
    useEffect(() => {
        if(window.innerWidth>=1024) setShowSidebar(true);
        if(window.innerWidth<1024) setShowSidebar(false);
        const handleResize = () => {
            console.log(window.innerWidth);
            if(window.innerWidth>=1024) setShowSidebar(true);
            if(window.innerWidth<1024) setShowSidebar(false);
            setShowBackdrop(false)
        };
 
        window.addEventListener('resize', handleResize);
 
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
    <div>
      <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} />
      <div className="flex overflow-hidden bg-white pt-16 ">
         <SideBar showSidebar={showSidebar} showBackdrop={showBackdrop} />
    <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main>
             <div className="pt-6 px-4">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-3">
                      <div className="flex items-center justify-between mb-4">
                         <div className="flex-shrink-0">
                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                            <h3 className="text-base font-normal text-gray-500">Sales this week</h3>
                         </div>
                         <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                            12.5%
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                               <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                         </div>
                      </div>
                      <div id="main-chart"></div>
                      dsfdsfdfdsfdsf
                      dsfdsfdfdsfdsfdsfdsf
                      sdfdsfdsf
                      <div>sadsadsadsad</div>
                      <div>sadsadsadsad</div>
                      <div>sadsadsadsad</div>
                      <div>sadsadsadsad</div>
                      <div>sadsadsadsad</div>
                      <div>sadsadsadsad</div>
                   </div>
                </div>
            </div>
        </main>
        </div>
        </div>
    </div>
    );
}