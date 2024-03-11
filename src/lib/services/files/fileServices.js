import { handleError } from "@/lib/helpers/handleErrors"
import { api } from "@/lib/middleware/apiInceptor"
import { IMG_UPLOAD } from ".."


export const uploadImg =async(payload)=>{
    let formdata = new FormData()
    formdata.append('image', payload.img)
    formdata.append('category', payload.category)
    try {
        let res =await api.post(IMG_UPLOAD, formdata)
        return res.data.payload.url
    } catch (error) {
        handleError(error)
    }
}