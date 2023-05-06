import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./loginSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Sidebars from "./sidebars";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(ID, Title, Price, Category, CRUD) {
  return { ID, Title, Price, Category, CRUD };
}

const deleteData = (id) => {
  axios
    .delete("https://fakestoreapi.com/products/" + id)
    .then((res) => alert(`Product deleted having id:${res.data.id}`));
};

function Data() {
  const [datas, setData] = useState(0);
  const [boolean, setBooleane] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.login);

  function logOuts() {
    dispatch(logOut());
    navigate("/");
  }

  useEffect(() => {
    if (boolean) {
      axios
        .get("https://fakestoreapi.com/products?sort=desc")
        .then((res) => setData(res.data));
    } else {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data));
    }
  }, [boolean]);

  return (
    <>
      {datas ? (
        <div className="main ">
          <div className="dashboard">
            <Sidebars />
          </div>

          <div>
            <Link to="/create">
              <Button
                variant="contained"
                color="success"
                sx={{
                  marginRight: 3,
                }}
              >
                Create New Product
              </Button>
            </Link>
            <Button onClick={() => setBooleane(!boolean)}>Sort data</Button>

            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="left">Title</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Category</StyledTableCell>
                    <StyledTableCell align="center">CRUD</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {datas &&
                    datas.map((data) => (
                      <StyledTableRow key={data.id}>
                        <StyledTableCell component="th" scope="row">
                          {data.id}
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          {data.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {data.price}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {data.category}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Button
                            variant="contained"
                            onClick={(e) => deleteData(data.id)}
                            color="error"
                            sx={{
                              marginRight: 3,
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="contained"
                            color="info"
                            onClick={() => navigate("/update/" + data.id)}
                          >
                            Update
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <h4> Loading... </h4>
      )}
    </>
  );
}

export default Data;

// const Data = () => {
//   const [datas, setData] = useState("");
//   const [del, setDel] = useState("");
//   const deleteData = (id) => {
//     console.log(id);
//     axios.delete("https://fakestoreapi.com/products/" + id).then((res) => {
//       console.log(res.data);
//       setDel(res.data);
//     });
//   };

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setData(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>CRUD</th>
//           </tr>
//         </thead>
//         <tbody>
//           {datas &&
//             datas.map((data) => {
//               return (
//                 <tr key={data.id}>
//                   <td>{data.id}</td>
//                   <td>{data.title}</td>
//                   <td>{data.price}</td>
//                   <td>{data.category}</td>
//                   <td>
//                     <Link to="/create">
//                       {" "}
//                       <button>update </button>{" "}
//                     </Link>
//                     <button onClick={() => deleteData(data.id)}> delete</button>
//                     <button>details</button>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>

//       <div>{del && <h1>{del.title}</h1>}</div>
//     </div>
//   );
// };

// export default Data;
