import SideBar from "@/components/SideBar";
import useRequestCardList from "./useRequestCardList";

export default function useSideBar(props){
    const [requestCardListComponent,activeRequestId]=useRequestCardList(props.setRequestMethods);
    return([
        <SideBar requestCardListComponent={requestCardListComponent} showSidebar={props.showSidebar} showBackdrop={props.showBackdrop} />
    ,activeRequestId]);
}