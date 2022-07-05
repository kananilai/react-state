import { Counter } from "../components/Counter";
import { Form } from "../components/Form";
import { Power } from "../components/Power";
import { Count } from "../components/State";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div>
      {/* <Counter /> */}
      <Count />
      <Power />
      <Form />
    </div>
  );
}
