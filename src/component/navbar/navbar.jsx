import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>  
        <div className="items">
            <div className="item">
                <LanguageOutlinedIcon className="icon"/>
                English
            </div>
            <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
            </div>
            <div className="item">
           <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
            </div>
            <div className="item">
            <ChatOutlinedIcon className="icon"/>
            <div className="counter">2</div>

            </div>
            <div className="item">
            <ListOutlinedIcon className="icon"/>
            </div>
            <div className="item">
            <img src="https://images.pexels.com/photos/5774804/pexels-photo-5774804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ttps://www.pexels.com/photo/girl-in-her-avatar-halloween-costume-5774804/"
            alt="" className="avatar"  />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
