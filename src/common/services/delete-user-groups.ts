import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

export async function deleteUserGroup(
  url: string = baseUrl,
  userGroupId: number
): Promise<void> {
  const deleteUserGroupURL = `${url}/user-group/${userGroupId}`;
  await axios.delete(deleteUserGroupURL);
}
