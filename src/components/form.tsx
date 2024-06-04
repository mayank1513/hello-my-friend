"use client";

import { FormEvent, useCallback, useState } from "react";
import Part1 from "./part1";
import Part2 from "./part2";
import { FormActions, useFromStore } from "@/store";

import styles from "./form.module.scss";

const formParts = [Part1, Part2];

export default function CustomFrom() {
  const [activePartIndex, setActivePartIndex] = useState(0);
  const formData = useFromStore();
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // validation

      // validate name
      let isValid = true;
      if (formData.name.trim().replace(/ +/g, " ").length < 3) isValid = false;
      else if (formData.email.trim().replace(/ +/g, " ").length < 3)
        isValid = false;

      console.log({ isValid });
      if (!isValid) {
        alert("Form fields are not valid");
        return;
      }

      if (activePartIndex === formParts.length - 1) {
        // submit the form
        localStorage.setItem("formData", JSON.stringify(formData));
        formData.resetForm();
        setActivePartIndex(0);
      } else setActivePartIndex((i) => i + 1);
    },
    [activePartIndex, formData]
  );
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {formParts.map((Part, i) => (
        <div key={i} hidden={activePartIndex !== i}>
          <Part />
        </div>
      ))}
      <button type="submit">
        {activePartIndex === formParts.length - 1 ? "Submit" : "Next"}
      </button>
    </form>
  );
}
