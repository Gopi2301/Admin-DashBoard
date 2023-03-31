import "./datatable.scss";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { userColoumns, userRows } from "../../datatablesrc.jsx";

function Datatable() {
  
  const actionColumn =[{field:"action", headerName:"Name", width:200, renderCell:()=>{
    return (
      <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="DeleteButton">Delete</div>

      </div>
    )
  }}] 
  return (
    <div className="datatable">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={userColoumns .concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
export default Datatable;
