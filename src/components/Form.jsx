import React, { useState } from "react";

export const Form = () => {
  const handleSend = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // setForm((prevState) => {
    //   return {
    //     ...prevState,
    //     [e.target.name]: e.target.value,
    //   };
    // });
    setForm(Object.assign(form, { [e.target.name]: e.target.value }));
  };
  return (
    <div style={{ textAlign: "center", marginTop: "2em" }}>
      <h1>useStateでフォーム</h1>
      <form onSubmit={handleSend}>
        <div>
          <label>メールアドレス</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>パスワード</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
