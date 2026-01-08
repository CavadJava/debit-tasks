import { useState } from "react";
import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const NoUseMemo = () => {
    const [header, setHeader] = useState('');

  return (
    <div>
      <h1>{header}</h1>
      <input 
      type="text"
      className="form-control"
      name="header"
      value={header}
      onChange={(e) => setHeader(e.target.value)}
      />
      <button className="btn btn-primary">Title</button>
    </div>
  );
};

export default NoUseMemo;