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
      <form onSubmit={handleSubmit} className={"flex gap-2 place-items-center"}>
        <div className="flex-1">
          <TextInput
            id="password1"
            type="textarea"
            required={true}
            shadow={true}
            placeholder="add your task"
          />
        </div>
        <Button type="submit" className="flex-4">
          Submit
        </Button>
      </form>
    </>
  );
};
