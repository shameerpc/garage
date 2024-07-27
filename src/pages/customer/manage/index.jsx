import React from "react";
import QueryTable from "../../../components/table/QueryTable";

export default function ManageCustomers() {
    const Data = [
        {
            "id": 1,
            "name": "Alice",
            "age": 30,
            "city": "New York",
            "email": "alice@example.com"
        },
        {
            "id": 2,
            "name": "Bob",
            "age": 25,
            "city": "Los Angeles",
            "email": "bob@example.com"
        },
        {
            "id": 3,
            "name": "Charlie",
            "age": 35,
            "city": "Chicago",
            "email": "charlie@example.com"
        },
        {
            "id": 4,
            "name": "David",
            "age": 28,
            "city": "Houston",
            "email": "david@example.com"
        },
        {
            "id": 5,
            "name": "Eve",
            "age": 22,
            "city": "Phoenix",
            "email": "eve@example.com"
        },
        {
            "id": 6,
            "name": "Frank",
            "age": 40,
            "city": "Philadelphia",
            "email": "frank@example.com"
        },
        {
            "id": 7,
            "name": "Grace",
            "age": 27,
            "city": "San Antonio",
            "email": "grace@example.com"
        },
        {
            "id": 8,
            "name": "Hank",
            "age": 33,
            "city": "San Diego",
            "email": "hank@example.com"
        },
        {
            "id": 9,
            "name": "Ivy",
            "age": 29,
            "city": "Dallas",
            "email": "ivy@example.com"
        },
        {
            "id": 10,
            "name": "Jack",
            "age": 31,
            "city": "San Jose",
            "email": "jack@example.com"
        }
    ]
    
  // query table
  const list = React.useMemo(() => Data, []);
  console.log(list);
  // Columns configuration
  const columns = React.useMemo(
    () => [
      {
        Header: "Sl no",
        accessor: "sno",
      },
      { Header: "Customer ID", accessor: "id" },
      {
        Header: "Name",
        accessor: "business_name",
      },
      { Header: "Group", accessor: "groupdetails.name" },
      { Header: "Contact", accessor: "contact" },
      { Header: "Total Due", accessor: "total_due" },
      {
        Header: "Status",
        accessor: "status",
      },
    ],

    []
  );
  return (
    <div className="w-full h-full py-10 px-10">
      <QueryTable columns={columns} list={list} />
    </div>
  );
}
