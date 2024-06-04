import { FormData, useFromStore } from "@/store";
import { ChangeEvent, useCallback } from "react";
import CutomInput from "./input";

const fields: (keyof FormData)[] = ["department", "role"];

export default function Part2() {
  const formState = useFromStore();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      formState.updateField({ [name]: value });
    },
    [formState]
  );
  return (
    <>
      <h2>Department Details</h2>
      <hr />
      {fields.map((field) => (
        <CutomInput
          key={field}
          name={field}
          value={formState[field]}
          onChange={onChange}
        />
      ))}
    </>
  );
}
