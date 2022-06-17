import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../service/actions/userActions";
import "./User.css";

const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state);
  console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="center">
      <h2> this is users</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error: {error} </h3>}
      <section>
        {users &&
          users.map((user) => {
            const { id, email, name } = user;
            return (
              <div key={id}>
                <article>{id}</article>
                <article>{email}</article>
                <article>{name}</article>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Users;
