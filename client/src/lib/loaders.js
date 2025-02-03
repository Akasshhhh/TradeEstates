import apiRequest from "./apiRequest"
import { defer } from "react-router-dom"

export const singlePageLoader = async ({request,params}) =>{
    const res = await apiRequest("/posts/"+params.id)
    return res.data
}

export const listPageLoader = async ({request,params}) =>{
    //this is the type of url we will receive from the request object: http://localhost:5173/list?type=rent&city=london&minPrice=100&maxPrice=1000
    //we can split this url into two halves after the question mark
    const query = request.url.split("?")[1]
    const postPromise = apiRequest("/posts?" + query)
    return defer({
        postResponse: postPromise
    })
}