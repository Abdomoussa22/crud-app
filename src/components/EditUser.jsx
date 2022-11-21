import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./Redux/UsersSlice";
const EditUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { Users } = useSelector((state) => state);
  const histiry = useHistory();
  const existingUser = Users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({ name, email });
  const handelEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({ id: params.id, name: values.name, email: values.email })
    );
    histiry.push("/");
  };
  return (
    <>
      <div className="adduser">
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              className="mb-2"
              type="text"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            ></Input>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            ></Input>
          </FormGroup>
          <Button onClick={handelEditUser}>Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </Form>
      </div>
    </>
  );
};

export default EditUser;
