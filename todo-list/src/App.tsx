import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { Refs } from "./components/Concepts/Refs";

import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      <Tasks />

      <Refs />
    </>
  );
}
