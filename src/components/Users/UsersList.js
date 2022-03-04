import styled from "styled-components";

const UsersStyle = styled.ul`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  list-style: none;
  padding: 1rem;

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

const UsersList = ({ users }) => {
  return (
    <UsersStyle>
      {users.length > 0 ? (
        users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))
      ) : (
        <p> No users yet. Add one </p>
      )}
    </UsersStyle>
  );
};

export default UsersList;
