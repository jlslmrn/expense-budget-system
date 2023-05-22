"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MonthDummy = () => {
  return (
    <>
      <nav className="border-4 border-gray-500">Hello</nav>
      {/*PARENT CONTENT */}
      <div className=" flex flex-col justify-center items-center h-screen w-screen border-4 border-red-500">
        {/* MONTH SELECTION  */}
        <div className="w-full h-16 border-4 border-red-300 text-center">
          THIS IS MONTH SELECTION
        </div>

        {/*THIS IS A TABLE */}
        <div className="w-5/6 h-full mt-8 border-4 border-blue-500 flex flex-col">
          {/* TABLE CONTENT */}
          <div className="flex flex-col lg:flex-row  w-auto h-[90%] border-4 border-orange-500 md:flex-col text-center">
            <div className="lg:w-1/4 md:w-full lg:h-auto h-full lg:mt-8 border-4 border-blue-500">
              {/* Income */}
              Income
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Dessert</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="lg:w-5/6 md:w-full lg:h-auto h-full lg:mt-8 border-4 border-blue-500">
              Fixed Expenses
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="lg:w-5/6 md:w-full lg:h-auto h-full lg:mt-8 border-4 border-blue-500">
              Additional Expenses
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="center">Calories</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          {/*TABLE TOTAL PRICE */}
          <div className="w-auto h-[10%] border-4 border-orange-500">
            <h1>Hello This is price</h1>
          </div>
        </div>

        {/*THIS IS A TABLE */}
        <div className="w-5/6 h-[500px] my-8 border-4 border-blue-500 flex flex-col">
          <div className="w-auto h-full border-4 border-orange-500">
            <h1>Hello World!</h1>
          </div>
          <div className="w-auto h-1/6 border-4 border-orange-500"></div>
        </div>
        <footer className="w-full h-16 border-4 border-red-300">
          Hello This footer!
        </footer>
      </div>
    </>
  );
};

export default MonthDummy;
