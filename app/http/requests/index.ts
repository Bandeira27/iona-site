import { ContactType } from "@/app/type/contact-type";
import axios from "axios";

export async function createContactEmail(data: ContactType) {
    const response = await axios.post<ContactType>("/api/contract", data)
    return response.data
}