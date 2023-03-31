export const userColoumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },{
    field:"email",
    headerName:"Email",
    width:230,
  },{
    field:"age",
    headerName:"Age",
    width:100,
  },{
      field:"status",
      headerName:"Status",
      width:160,
      renderCell:(params)=>{
        return(
          <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
      }
  }
];

export const userRows = [
  {
    id: 1,
    username: "Rajini",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "rajini@gmail.com",
    age: 65,
  },
  {
    id: 2,
    username: "kamal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "kamal@gmail.com",
    status: "passive",
    age: 60,
  },
  {
    id: 3,
    username: "Vijay",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "vijay@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Ajith",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ajith@gmail.com",
    status: "active",
    age: 46,
  },
  {
    id: 5,
    username: "Cap America",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "capamer@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Dhoni",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "dhoni@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Dhanush",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "dhanush@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Vikram",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "vikram@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Rolex",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Rolex@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Ghost",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ghost@gmail.com",
    status: "active",
    age: 65,
  },
];
