import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

export async function login(
  email: string,
  password: string,
  url: string = baseUrl
): Promise<number> {
  const loginUrl = `${url}auth/signin`;
  try {
    const response = await axios.post(loginUrl, { email, password });
    console.log({ response });
    return response.data.user.id;
  } catch (error) {
    if (error.code == "ERR_BAD_REQUEST") return null;
  }
}
