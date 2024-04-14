export default function RequestCard(props){
    return(
        <li>
            <div className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                {!props.request.editMode?
                    <span className="ml-1 w-[150px] overflow-hidden text-nowrap">{props.request.name}</span>:
                    <input className="ml-1 w-[150px] overflow-hidden text-nowrap bg-white" value={props.request.name} onChange={(e)=>{props.updateRequest(e,props.request.id)}}/>
                }
                <button className=" ml-3 rounded p-1 hover:bg-gray-300" onClick={()=>{props.toggleMode(props.request.id)}}>
                    <svg className="w-4 h-4 text-grey-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className=" mx-1 rounded p-1 hover:bg-gray-300" onClick={()=>{props.deleteRequest(props.request.id)}}>
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
    );
}