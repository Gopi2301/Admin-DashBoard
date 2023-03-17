import Chart from "../../component/chart/chart";
import Featured from "../../component/featured/featured";
import Navbar from "../../component/navbar/navbar";
import Sidebar from "../../component/sidebar/sidebar";
import Table from "../../component/table/table";
import Widget from "../../component/widget/widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
        <Featured />
        <Chart />
      </div>
      <div className="listContainer">
        <div className="listTitle">Lastest Transactions
        <Table />
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Home;
