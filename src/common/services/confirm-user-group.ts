import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

export interface ConfirmGroupRequest {
  guestEmail?: string;
  emailCommunication?: boolean;
  whatsAppCommunication?: boolean;
  carewatchCommunication?: boolean;
  guestWhatsapp?: string;
  guestUserId?: number;
}

export async function confirmUserGroup(
  token: string,
  confirmGroupRequest: ConfirmGroupRequest,
  url: string = baseUrl
): Promise<boolean> {
  console.log({ token });
  const confirmUserGroup = `http://localhost:3000/user-groups/957aa02457d686b8afd6/accept`;
  let payload: ConfirmGroupRequest;
  if (confirmGroupRequest.guestEmail) {
    confirmGroupRequest.emailCommunication = true;
  }

  if (confirmGroupRequest.guestWhatsapp) {
    confirmGroupRequest.whatsAppCommunication = true;
  }

  if (confirmGroupRequest.guestUserId) {
    confirmGroupRequest.carewatchCommunication = true;
  }

  try {
    console.log({ token });
    console.log({ ...payload, ...confirmGroupRequest });
    const response = await axios.patch(confirmUserGroup, {
      ...payload,
      ...confirmGroupRequest,
    });
    console.log({ response });
    return true;
  } catch (error) {
    console.log({ error });
    return false;
  }
}
