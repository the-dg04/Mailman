"use client"
import { useEffect, useState } from "react";

export default function uitest(){
    const [showSidebar,setShowSidebar]=useState(false);
    const [showBackdrop,setShowBackdrop]=useState(false);
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
    <div className="flex w-full h-full flex-col">
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
       <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
             <div className="flex items-center justify-start">
                <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded" onClick={()=>{setShowSidebar(!showSidebar);setShowBackdrop(!showBackdrop);console.log(showSidebar);}}>
                   <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                   </svg>
                   <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                   </svg>
                </button>
                <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Windster Logo"/>
                <span className="self-center whitespace-nowrap">Windster</span>
                </a>
                <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                   <label for="topbar-search" className="sr-only">Search</label>
                   <div className="mt-1 relative lg:w-64">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                         <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                         </svg>
                      </div>
                      <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                   </div>
                </form>
             </div>
             <div className="flex items-center">
                <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                   <span className="sr-only">Search</span>
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                   </svg>
                </button>
                <div className="hidden lg:flex items-center">
                   <span className="text-base font-normal text-gray-500 mr-5">Open source ❤️</span>
                   <div className="-mb-1">
                      <a className="github-button" href="#" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub">Star</a>
                   </div>
                </div>
                <a href="#" className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                   <svg className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
                   </svg>
                   Upgrade to Pro
                </a>
             </div>
          </div>
       </div>
    </nav>
    <div className="flex overflow-hidden bg-white pt-16 grow">
        {/* <div className="absolute w-screen"> */}
            <aside id="sidebar" className={`fixed z-20 h-full top-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 ease-in-out duration-300 ${showSidebar?"left-0":"-left-64"}`} aria-label="Sidebar">
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 bg-white divide-y space-y-1">
                    <ul className="space-y-2 pb-2">
                        <li>
                            <div className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2">
                                {/* <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3">Dashboard</span> */}
                                <button className="bg-gray-200 px-3 rounded hover:bg-gray-300">New</button>
                            </div>
                        </li>
                        <li>
                            <div className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                                <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3 max-w-24 overflow-hidden">Dashbofdsfdsfdsfdsfard</span>
                                <button className=" ml-3 rounded p-1 hover:bg-gray-300">
                                    <svg className="w-4 h-4 text-grey-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </button>
                                <button className=" mx-1 rounded p-1 hover:bg-gray-300">
                                    <svg className="w-4 h-4 text-grey-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10 11V17" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M14 11V17" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M4 7H20" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </button>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </aside>
        <div className={`bg-gray-900 opacity-50 fixed inset-0 z-10 ${showBackdrop?"":"hidden"}`} id="sidebarBackdrop"></div>
    <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main>
             <div className="pt-6 px-4">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
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