import { HTMLProps } from "react";
import styles from "./form.module.scss";

export default function CutomInput(props: HTMLProps<HTMLInputElement>) {
  return (
    <div
      className={[styles.cutomInput, props.value ? styles.notEmpty : ""].join(
        " "
      )}
      title={`Please add your ${props.name}`}
    >
      <input id={props.name} type="text" {...props} />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
}
