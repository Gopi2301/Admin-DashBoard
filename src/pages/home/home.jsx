import Navbar from "../../component/navbar/navbar";
import Sidebar from "../../component/sidebar/sidebar";
import "./home.scss"


const Home = ()=>{
        return(
            <div className="home">
             <Sidebar />
             
             <div className="home-container"> 
             <Navbar />
             
             Home container</div>
            </div>
        )
}

export  default Home;