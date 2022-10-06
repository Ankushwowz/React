import React, { useState } from "react";

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setallEntry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };
      setallEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
    }
    else{
        alert("Please Fill The Data")
    }
  };
  return (
    <>
      <form action="" onSubmit={submitform}>
        <div className="container">
          <label htmlFor="email"> Email </label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"> Password </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <div>
        {allEntry.map((curElem) => {
          const { id, email, password } = curElem;
          return (
            <div className="showDataStyles" key={id}>
              <p>
                {" "}
                <b>Email :</b>
                {email}
              </p>
              <p>
                <b>Password : </b>
                {password}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Basicform;
