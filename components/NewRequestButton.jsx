export default function NewRequestButton(props){
    return(
        <li>
            <div className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2">
                <button className="bg-gray-200 px-3 rounded hover:bg-gray-300" onClick={props.createNewRequest}>New</button>
            </div>
        </li>
    );
}