import { useState } from "react";
import InputField from "../../components/input-field/InputField";
import Button from "../../components/custom-button/Button";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (!name || name.trim() === "") {
      alert("please Enter Your Name");
      return;
    }
    if (!email.includes("@")) {
      alert("Please Enter Valid Email");
      return;
    }
    if (password.length < 8) {
      alert("Password must be atleast 8 characters long");
      return;
    }
    alert(`Welcome ${name}`);
    console.log("Form data:", { name, email, password });
  };

  return (
    <div>
      <form onSubmit={handleForm} className="max-w-md mx-auto space-y-5">
        {/* <label className="block mb-2 font-medium">Name:</label>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded-md mb-4 w-full"
        /> */}
        <InputField
          label="Full Name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="Email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          placeholder="Enter your Passwodd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <div>
          <Button title="Submit" type="submit" />
        </div>
      </form>

      <div>
        <h2 className="text-lg font-semibold border text-center mt-5 p-3 w-fit mx-auto">
          {name && `Hello ${name}`}
          {email && `, your Email is ${email}`}
        </h2>
      </div>
    </div>
  );
};

export default Forms;
