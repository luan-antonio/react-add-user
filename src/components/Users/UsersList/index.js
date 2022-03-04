import * as S from "./styles"

const UsersList = ({ users }) => {
  return (
    <S.Users>
      {users.length > 0 ? (
        users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))
      ) : (
        <p> No users yet. Add one </p>
      )}
    </S.Users>
  );
};

export default UsersList;
