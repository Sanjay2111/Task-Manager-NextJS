"use client";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

export default function TodoComponent() {
  const [data, setData] = useState(null);

  const fetchdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const dataRes = await response.json();
    setData([...dataRes]);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {data ? (
        data.map((todo, index) => <h1>{todo.title}</h1>)
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
