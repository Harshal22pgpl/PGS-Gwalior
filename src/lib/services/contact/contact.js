import { api } from "@/lib/middleware/apiInceptor"
import { CONTACT } from ".."

export const postContact =async (payload) =>{
    let res = await api.post(CONTACT, payload)
    return res
}