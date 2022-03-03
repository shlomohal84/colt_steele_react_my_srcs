import { useState } from "react";

function SimpleFormHooks() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Your input is:{email}</h1>
      <input
        name="inp"
        type="text"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <button onClick={() => alert(email)}>Submit</button>
    </div>
  );
}

export default SimpleFormHooks;
