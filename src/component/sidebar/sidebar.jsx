import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ()=>{
        return(
            <div className="sidebar">
                <div className="top">
                    <span className="logo">Admin</span>
                </div>
                <hr/>
                <div className="center">
                    <ul>
                        <p className="title">Main</p>
                        <li >< DashboardIcon className="icon"/><span>DashBoard</span></li>
                        <p className="title">List</p>
                        <li><GroupIcon className="icon"/><span>Users</span></li>
                        <li><AccountCircleIcon className="icon"/><span>Products</span></li>
                        <li><ShoppingCartIcon className="icon"/><span>Orders</span></li>
                        <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
                        <p className="title">Useful</p>
                        <li><QueryStatsIcon className="icon"/><span>Stats</span></li>   
                        <li><NotificationsIcon className="icon"/><span>Notification</span></li>
                        <p className="title">Service</p>
                        <li><SystemSecurityUpdateGoodIcon className="icon" /><span>System Health</span></li>
                        <li><EngineeringIcon className="icon"/><span>Logs</span></li>
                        <li><SettingsSuggestIcon className="icon"/><span>Settings</span></li>
                        <p className="title">Profile</p>
                        <li><AccountBoxIcon className="icon"/><span>Profile</span></li>
                        <li><LogoutIcon className="icon"/><span>Logout</span></li>
                    </ul>
                </div>
                <div className="bottom">
                    <div className="colorOption"></div>
                    <div className="colorOption"></div>
                </div>
            </div>
        )
}

export  default Sidebar;