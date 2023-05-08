"use client";
import { useEffect, useState } from "react";
import { TaskComponent } from "./TaskComponent";

export default function TodoComponent(props) {
  const [data, setData] = useState(props.data);

  //   const fetchdata = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  //     const dataRes = await response.json();
  //     setData([...dataRes]);
  //   };

  //   useEffect(() => {
  //     fetchdata();
  //   }, []);

  return (
    <>
      {data ? (
        data.map((todo, index) => <TaskComponent key={index} {...todo} />)
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
