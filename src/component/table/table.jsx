 import "./table.scss"
 import Table from '@mui/material/Table';
 import TableBody from '@mui/material/TableBody';
 import TableCell from '@mui/material/TableCell';
 import TableContainer from '@mui/material/TableContainer';
 import TableHead from '@mui/material/TableHead';
 import TableRow from '@mui/material/TableRow';
 import Paper from '@mui/material/Paper';


function Tables() {
    const rows = [{
        id:1143155,
        product:"Acer Nitro 5",
        img:"https://m.media-amazon.com/images/I/81yZryzNh8L._SX569_.jpg",
        customer:"Gopi",
        date:"23 March",
        amount: 785,
        method:"Cash on delivery",
        status:"Approved",
    },{
        id:2235123,
        product:"S20 fe 5G",
        img:"https://m.media-amazon.com/images/I/41CkKbseMGL._SX300_SY300_QL70_FMwebp_.jpg",
        customer:"Dharshinee",
        date:"23 April",
        amount:400,
        method:"Cash on Delivery",
        status:"Approved",
    },{
        id:1234567,
        product:"Hush puppies",
        img:"https://m.media-amazon.com/images/I/31T7UY98htL.jpg",
        customer:"Nimalan",
        date:"16 April",
        amount:150,
        method:"Credit Card",
        status:"pending",
    }]
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tablecell" align="center">Order id</TableCell>
              <TableCell className="tablecell" align="center">Product</TableCell>
              <TableCell className="tablecell" align="center">Image</TableCell>
              <TableCell className="tablecell" align="center">Customer</TableCell>
              <TableCell className="tablecell" align="center">Date</TableCell>
              <TableCell className="tablecell" align="center">Amount</TableCell>
              <TableCell className="tablecell" align="center">Method</TableCell>
              <TableCell className="tablecell" align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.product}</TableCell>
                <TableCell align="center"><div className="cellWrapper">
                    <img className="img" src={row.img} alt="" />
                </div></TableCell>
                {/* <TableCell align="right">{row.img}</TableCell> */}
                <TableCell align="center">{row.customer}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.method}</TableCell>
                <TableCell align="center"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}


export default Tables;