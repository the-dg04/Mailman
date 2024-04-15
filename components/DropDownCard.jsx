export default function DropDownCard(props){
    return(
        <li class="w-24 h-full hover:bg-gray-100">
            <button class=" w-24 h-full hover:bg-gray-100 text-left px-5" onClick={()=>{props.setRequestMethod(props.requestType);props.setDropdownToggle(!props.dropdownToggle)}}>{props.requestType}</button>
        </li>
    );
}