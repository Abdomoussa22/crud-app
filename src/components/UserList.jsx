import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./Redux/UsersSlice";
function UserList() {
  const dispatch = useDispatch();
  const { Users } = useSelector((state) => state);
  const handelDeleteUser = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <>
      {Users.length ? (
        Users.map((user) => (
          <ListGroup key={user.id} className="mt-4">
            <ListGroupItem className="d-flex justify-content-between">
              <div>
                <strong>{user.name}</strong>
                <br />
                <p>Email : {user.email}</p>
              </div>

              <div className="ml-auto mt-3">
                <Link className="btn btn-warning" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button
                className="ml-2"
                  onClick={() => handelDeleteUser(user.id)}
                  color="danger"
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        ))
      ) : (
        <div className="text-center fs-2 mt-4">
          <h4>No Users</h4>
        </div>
      )}
    </>
  );
}

export default UserList;
