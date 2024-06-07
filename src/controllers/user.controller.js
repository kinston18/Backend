import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async(req,res) => {
// get user details from front-end(Postman)
// validation (all the required details)
// validation if the user already exist : username ,  email
// check for images & avatar
// upload them to cloudinary, avatar
// create user-object : create entry in DB
// remove password and refresh token field from response
// check for user creation 
// return res


    const {fullName,email,username,password} = req.body
    console.log("email",email);
    console.log("password",password);

} )


export {registerUser}