import { StaticImageData } from "next/image"
import { ImgInterface } from "../ui/card/type"



const makeImg = (name:string, urlData:StaticImageData[]):ImgInterface[] => {
    return urlData.map((url, idx) => ({
        id:name+idx,
        url
        
    }))
}
export default makeImg