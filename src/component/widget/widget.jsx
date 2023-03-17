import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Widget = ({type})=>{
    let data 
    // temporary 
    const amount = 100;
    const diff = 20;
    switch (type) {
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all Users",
                icon:(
                    <AccountCircleIcon  className="icon" style={{
                        color:"crimson",
                        backgroundColor:"rgba(218,165,32,0.2)"
                    }}/>
                )
            }
            break;
            case "order":
            data={
                title:"Orders",
                isMoney:false,
                link:"View all Orders",
                icon:(
                    <ShoppingCartIcon className="icon" style={{
                        color:"goldenrod",
                        backgroundColor:"rgba(218,165,32,0.2)"
                    }}/>
                )
            }
            break;
            case "earning":
            data={
                title:"Earning",
                isMoney:false,
                link:"View net Earnings",
                icon:(
                    <MonetizationOnIcon  className="icon" style={{
                        color:"green",
                        backgroundColor:"rgba(0,128,0,0.2)"
                    }}/>
                )
            }
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See Details",
                icon:(
                    <AccountBalanceWalletIcon className="icon" style={{
                        color:"purple",
                        backgroundColor:"rgba(128,0,128,0.2)"
                    }}/>
                )
            }
            break;
    
        default:
            break;
    }
    return(
        <div className="widget">
            <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
            
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon /> 
                   {diff}
                </div>
                {data.icon}
            </div>
            
        </div>
    )
}

export default Widget;