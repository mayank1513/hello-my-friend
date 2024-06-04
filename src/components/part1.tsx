"use client";

import { ChangeEvent, useCallback } from "react";
import CutomInput from "./input";
import { useFromStore, FormData } from "@/store";

// name, email, phone

const fields: (keyof FormData)[] = ["name", "email", "phone"];

export default function Part1() {
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
      <h2>Personal Details</h2>
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
