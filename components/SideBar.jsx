import useRequestCardList from '@@/_hooks/useRequestCardList';
export default function SideBar(props){
    const requestCardListComponent=useRequestCardList()
    return(
        <>
            <aside id="sidebar" className={`fixed z-20 h-full top-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 ease-in-out duration-300 ${props.showSidebar?"left-0":"-left-64"}`} aria-label="Sidebar">
                <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 bg-white divide-y space-y-1">
                            {requestCardListComponent}
                        </div>
                    </div>
                </div>
            </aside>
            <div className={`bg-gray-900 opacity-50 fixed inset-0 z-10 ${props.showBackdrop?"":"hidden"}`} id="sidebarBackdrop"></div>
        </>
    );
}