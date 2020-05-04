import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { getUsersRequest, loginUserRequest } from "./../actions/users";

const SignInForm = ({ users, getUsersRequest, loginUserRequest }) => {
  const [listOpen, setListOpen] = useState(false);
  const [displaySelectedUser, setDisplaySelectedUser] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    getUsersRequest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const toggleSelected = (id) => {
    setSelectedUser(users.users.filter((user) => user.id === id));
    setDisplaySelectedUser(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserRequest(selectedUser[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex" }} onClick={() => toggleList()}>
        <input value={displaySelectedUser} readOnly />
        {listOpen ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {listOpen && (
        <ul>
          {users &&
            users.users.map((user) => (
              <li
                key={user.id}
                value={user.id}
                onClick={() => toggleSelected(user.id, user.name)}
                style={{ padding: ".5rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={user.avatarURL}
                    alt="user"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  {user.name}
                </div>
              </li>
            ))}
        </ul>
      )}

      <button>Sign In</button>
    </form>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps, { getUsersRequest, loginUserRequest })(
  SignInForm
);
