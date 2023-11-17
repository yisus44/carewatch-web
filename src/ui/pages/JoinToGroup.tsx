import { useParams } from "react-router-dom";

export function JoinToGroup() {
  const { userGroupId } = useParams();
  console.log({ userGroupId });
  return <div>joining to group: {userGroupId} </div>;
}
