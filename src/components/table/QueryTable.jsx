import React from "react";
import { useReactTable } from "@tanstack/react-table";

export default function QueryTable({ list, columns }) {
  // Table instance
  const tableInstance = useReactTable({ columns, data: list });
  console.log(tableInstance)
  // Access the table state and methods
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
    console.log(getTableProps,getTableBodyProps,headerGroups,rows,prepareRow)
  return (
    <div className="table table-lg   border border-[#F6F6F6] mx-auto rounded-md w-full">
      <table  style={{ borderSpacing: "0", width: "100%" }}>
        <thead className="bg-[#FFCD57] rounded-md">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="py-4 px-4  text-left text-[0.95rem] font-semibold text-[#1C1C1C] capitalize"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
              <th className="py-4 px-4  text-left text-[0.95rem] font-semibold text-[#1C1C1C] capitalize">
                Cust Name{" "}
              </th>
              <th className="py-4 px-4  text-left text-[0.95rem] font-semibold text-[#1C1C1C] capitalize">
                Phone No.
              </th>
              <th className="py-4 px-4  text-left text-[0.95rem] font-semibold text-[#1C1C1C] capitalize">
                Total Vehicles
              </th>

              <th className="py-4 px-4  text-left text-[0.95rem] font-semibold text-[#1C1C1C] capitalize"></th>
            </tr>
          ))}
        </thead>
         {/*
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b-2">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-2 text-left text-[0.9rem]  text-[#2D2D2D] font-medium capitalize"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
}
