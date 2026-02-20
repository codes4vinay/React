import { useParams } from "react-router-dom";
//useParams is used to get dynamic params

function User() {
  const { userid } = useParams();
  return <div>User : {userid}</div>;
}

export default User;
