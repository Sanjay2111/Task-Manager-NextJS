"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export const FormComponent = () => {
  const [task, setTasks] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Add Todo" />
        </div>
        <TextInput id="password1" type="text" required={true} />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};
