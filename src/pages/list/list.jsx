import Datatable from "../../component/datatable/datatable";
import Navbar from "../../component/navbar/navbar";
import Sidebar from "../../component/sidebar/sidebar";
import "./list.scss"

const List = ()=>{
    return(
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
               <Datatable /> 
            </div>
        </div>
    )
}

export  default List;