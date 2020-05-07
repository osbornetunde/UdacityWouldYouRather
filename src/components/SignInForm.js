import React, { useState } from "react";
import { useHistory } from "react-router";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { PageLayout, StyledForm, Button } from "../styles";

const SignInForm = ({ users, loginUserRequest }) => {
  const [listOpen, setListOpen] = useState(false);
  const [displaySelectedUser, setDisplaySelectedUser] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const history = useHistory();

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const toggleSelected = (id, name) => {
    setSelectedUser(users.filter((user) => user.id === id));
    setDisplaySelectedUser(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserRequest(selectedUser[0]);
    history.push("/questions");
  };

  return (
    <PageLayout>
      <StyledForm onSubmit={handleSubmit}>
        <div onClick={() => toggleList()}>
          <input
            value={displaySelectedUser}
            readOnly
            placeholder="Please select a user"
          />
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
                >
                  <div>
                    <img src={user.avatarURL} alt="user" />
                    <p>{user.name}</p>
                  </div>
                </li>
              ))}
          </ul>
        )}

        <Button position>Sign In</Button>
      </StyledForm>
    </PageLayout>
  );
};

export default SignInForm;
