import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

export async function getAvailability(
  phone: string,
  url: string = baseUrl
): Promise<boolean> {
  const deleteUserGroupURL = `${url}whatsapp/availability?phone=${phone}`;
  try {
    const res = await axios.get(deleteUserGroupURL);
    const data = res.data;
    return data.existsWhatsapp;
  } catch (error) {
    return false;
  }
}
