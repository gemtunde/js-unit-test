export const UserProfile = ({
  displayName,
  userName,
  email,
  isEmailVerified,
}) => {
  return (
    <>
      <div>
        <span>
          Display Name:{" "}
          {displayName.length > 15
            ? displayName.slice(0, 15).concat("...")
            : displayName}
        </span>
      </div>
      <div>
        <span>UserName: {userName}</span>
      </div>
      <div>
        <span>Email: {email}</span>
      </div>
      <div>
        {" "}
        Verified :
        <span>{isEmailVerified ? "Email Verified" : "Email Not Verified"}</span>
      </div>
    </>
  );
};
