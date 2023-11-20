import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

export async function deleteUserGroup(
  userGroupToken: string,
  url: string = baseUrl
): Promise<boolean> {
  const deleteUserGroupURL = `${url}user-groups/${userGroupToken}/external`;
  try {
    await axios.delete(deleteUserGroupURL);
    return true;
  } catch (error) {
    return false;
  }
}
