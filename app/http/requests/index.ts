import { ContactType } from "@/app/type/contact-type";
import axios from "axios";

type ContactResponse = { success: boolean };

export async function createContactEmail(
  data: ContactType,
): Promise<ContactResponse> {
  const response = await axios.post<ContactResponse>("/api/contact", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}
