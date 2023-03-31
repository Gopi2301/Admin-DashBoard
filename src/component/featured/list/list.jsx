import Navbar from "../../navbar/navbar";
import Sidebar from "../../sidebar/sidebar";
import "./list.scss"

function List() {
    return(
        <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default List;