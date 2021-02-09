import React from "react";
import Section from "./Section";

function Main() {
  let a = <input type='text' id='a' />;

  return (
    <main>
      <Section title='Title' fields={[a]} />
      <Section title='Hello' fields={[4, 5, 6]} />
    </main>
  );
}

export default Main;
