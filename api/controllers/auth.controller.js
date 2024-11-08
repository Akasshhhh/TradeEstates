import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register = async (req,res) =>{
    const {username, email, password} = req.body
    try{

        //Hash the password
        const hashedPass = await bcrypt.hash(password, 10)
        //Create a new user and save it to the db
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPass
            }
        })
        
        res.status(201).json({message: "User created"})
        console.log(newUser)
    } catch(error){
        console.log(error)
        res.status(500).json({message: "Failed to create user"})
    }
}
export const login = async (req,res) =>{
    const {username, password} = req.body


    try {
        //Check if the user exists
        const user = await prisma.user.findUnique({
            where: {username}
        })

        if(!user) return res.status(401).json({"message": "Invalid credentials!"})
        //Check the user password if exists
        
        const isPassValid = await bcrypt.compare(password, user.password)
        if(!isPassValid) return res.status(401).json({"message": "Invalid credentials!"})
    
        //If the password is correct, generate a cookie token and send it to the user
        
    } catch (error) {
        console.log(error)
        res.status(500).json({"message" : "Failed to login!"})
    }
}
export const logout = (req,res) =>{

}