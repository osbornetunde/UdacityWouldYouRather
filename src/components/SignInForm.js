import React, { useState } from "react";
import { useHistory } from "react-router";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import StyledForm from "../styles";

const SignInForm = ({ users, loginUserRequest }) => {
  const [listOpen, setListOpen] = useState(false);
  const [displaySelectedUser, setDisplaySelectedUser] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const history = useHistory();

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const toggleSelected = (id) => {
    setSelectedUser(users.filter((user) => user.id === id));
    setDisplaySelectedUser(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserRequest(selectedUser[0]);
    history.push("/questions");
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }} onClick={() => toggleList()}>
          <input value={displaySelectedUser} readOnly />
          {listOpen ? <FaAngleDown /> : <FaAngleUp />}
        </div>
        {listOpen && (
          <ul>
            {users &&
              users.map((user) => (
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
    </StyledForm>
  );
};

export default SignInForm;
