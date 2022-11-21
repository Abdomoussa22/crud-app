import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import  {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/UsersSlice";
import { v4 as uuidv4 } from 'uuid';
const AddUser = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ name: "", email: "" });
  const history =useHistory() ;
  const handelAddUser = ()=>{
    setValues({name : '' , email :''})
    dispatch(addUser({id :uuidv4(),name : values.name ,email: values.email}))
    history.push('/')
  }
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
              onChange = {(e)=> setValues({...values ,name:e.target.value})}
            ></Input>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange = {(e)=> setValues({...values ,email:e.target.value})}
            ></Input>
          </FormGroup>
          <Button onClick={handelAddUser}>Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
