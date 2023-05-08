"use client";
import { Alert } from "flowbite-react";

export const TaskComponent = ({ title, completed }) => {
  return (
    <Alert
      color="success"
      onDismiss={function onDismiss() {
        return alert("Alert dismissed!");
      }}
      className="mt-2"
    >
      <span>
        <span className="font-medium">
          {"Completed: " + completed.toString()}
        </span>{" "}
        <br />
        {title}
      </span>
    </Alert>
  );
};
