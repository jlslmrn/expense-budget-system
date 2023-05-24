"use client";
import * as React from "react";
//tables
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//month selection

import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
//icons
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
//tooltip
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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

function createDataMonth(value: number, month: string) {
  return { value, month };
}

const monthRow = [
  createDataMonth(1, "January"),
  createDataMonth(2, "February"),
  createDataMonth(3, "March"),
  createDataMonth(4, "April"),
  createDataMonth(5, "May"),
  createDataMonth(6, "June"),
  createDataMonth(7, "July"),
  createDataMonth(8, "August"),
  createDataMonth(9, "September"),
  createDataMonth(10, "October"),
  createDataMonth(11, "November"),
  createDataMonth(12, "December"),
];

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const expensesRows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const toolTipContent = "Maximum of two tables each month only.";

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
      {/* NAVBAR*/}
      <nav className=" flex justify-end px-5 py-2 bg-white sahdow">
        <button className="flex items-center justify-center bg-gray-100 rounded-full px-3 py-1 my-2 shadow-lg text-xs">
          <LogoutIcon className="w-4 h-4 mr-1" />
          <span className="flex-grow">Logout</span>
        </button>
      </nav>
      {/* PARENT CONTENT */}
      <main className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-100">
        {/* MONTH SELECTION */}
        <div className="w-full h-16 border-red-300 text-center mt-3">
          <div className="flex flex-row justify-center  border-gray-900">
            <div className="mx-5">
              <FormControl fullWidth>
                <NativeSelect
                  defaultValue={123}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  className="w-full"
                >
                  <option value={123} disabled>
                    Select a month
                  </option>
                  {monthRow.map((month) => (
                    <option value={month.value}>{month.month}</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </div>
            <div className="flex flex-row">
              <button className="flex items-center justify-center bg-gray-800 rounded-full px-3 py-1 my-2 shadow-lg text-xs">
                <AddIcon className="w-4 h-4 mr-1" />
                <span className="flex-grow">Table</span>
              </button>
              <Tooltip title={toolTipContent} className="mx-1">
                <InfoOutlinedIcon className="w-4 h-10" />
              </Tooltip>
            </div>
          </div>
        </div>

        {/* FIRST TABLE */}
        <div className="w-5/6 mt-8 border-gray-900 bg-white shadow-lg sm:px-10 sm:rounded-lg">
          <div className="flex items-center justify-between m-2">
            <p className="font-bold text-2xl md:mx-auto">May 25, 2023</p>
            {/* EDIT BUTTON */}
            <button className="flex items-center justify-center bg-gray-100 rounded-full px-3 py-1 my-2 shadow-lg text-xs">
              <EditIcon className="w-4 h-4 mr-1" />
              <span className="flex-grow">Edit</span>
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
                  {expensesRows.map((row) => (
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
        <div className="w-5/6 mt-8 border-gray-900 bg-white shadow-lg sm:px-10 sm:rounded-lg">
          <div className="flex items-center justify-between m-2">
            <p className="font-bold text-2xl md:mx-auto">May 25, 2023</p>
            {/* EDIT BUTTON */}
            <button className="flex items-center justify-center bg-gray-100 rounded-full px-3 py-1 my-2 shadow-lg text-xs">
              <EditIcon className="w-4 h-4 mr-1" />
              <span className="flex-grow">Edit</span>
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
                  {expensesRows.map((row) => (
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

        <footer className="w-full h-16 border-4 border-red-300">
          Hello This footer!
        </footer>
      </main>
    </>
  );
};

export default MonthDummy;
