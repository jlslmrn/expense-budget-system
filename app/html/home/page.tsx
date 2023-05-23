"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    border: "none",
  },
}));

function createData(
  name: string,
  calories?: number,
  fat?: number,
  carbs?: number,
  protein?: number
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

const incomeRows = [createData("150000"), createData("5000")];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.background.paper,
    // border: "none",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: "none",
  },
}));

const MonthDummy = () => {
  return (
    <>
      <nav className="border-4 border-gray-500">Hello</nav>
      {/* PARENT CONTENT */}
      <main className="flex flex-col justify-center items-center min-h-screen w-full">
        {/* MONTH SELECTION */}
        <div className="w-full h-16 border-4 border-red-300 text-center">
          THIS IS MONTH SELECTION
        </div>

        {/* FIRST CONTAINER */}
        <div className="w-5/6 mt-8 border-gray-900 bg-white shadow sm:px-10 sm:rounded-lg">
          {/* EDIT BUTTON */}
          <div className="flex items-center justify-between text-center">
            <p className="font-bold text-2xl mx-auto">May 25, 2023</p>
            <button className="bg-black rounded-full px-5 my-3 text-white border-2 shadow-2xl">
              Edit
            </button>
          </div>

          {/* TABLE CONTENT */}
          <div className="flex flex-col md:flex-row text-center lg:border-2 shadow">
            {/* FIRST CONTAINER */}
            <div className="md:w-1/4 w-full border-2 lg:border-white">
              {/* Income */}
              Income
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {incomeRows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {row.name}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* SECOND CONTAINER */}
            <div className="md:w-3/4 w-full border-2 lg:border-white">
              Fixed Expenses
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Description
                    </StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
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
            {/* THIRD CONTAINER */}
            <div className="md:w-3/4 w-full border-2 lg:border-white">
              Additional Expenses
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Description
                    </StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
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
          {/* TABLE TOTAL PRICE */}
          <div className="w-auto h-[10%]  border-orange-500">
            <h1>Hello This is price</h1>
          </div>
        </div>

        {/* ANOTHER TABLE
        <div className="w-5/6 my-8 border-4 border-gray-900">
          <div className="w-auto h-full border-4 border-orange-500">
            <h1>Hello World!</h1>
          </div>
        </div> */}

        {/* TABLE CONTENT */}
        <div className="w-5/6 mt-8 border-4 border-gray-900">
          <div className="flex flex-col md:flex-row text-center">
            <div className="md:w-1/4 w-full md:mt-8 border-4 border-blue-500 overflow-auto">
              {/* Income */}
              Income
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Description</StyledTableCell>
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
            <div className="md:w-3/4 w-full md:mt-8 border-4 border-blue-500">
              Fixed Expenses
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Description</StyledTableCell>
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
            <div className="md:w-3/4 w-full md:mt-8 border-4 border-blue-500">
              Additional Expenses
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Description</StyledTableCell>
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
          {/* TABLE TOTAL PRICE */}
          <div className="w-auto h-[10%] border-4 border-orange-500">
            <h1>Hello This is price</h1>
          </div>
        </div>

        <footer className="w-full h-16 border-4 border-red-300">
          Hello This footer!
        </footer>
      </main>
    </>
  );
};

export default MonthDummy;
