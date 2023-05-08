import { FormComponent } from "../component/formComponent";

export default function Layout({ children }) {
  return (
    <>
      <h1>Todo application</h1>
      <div>
        <FormComponent />
      </div>
      {children}
    </>
  );
}
