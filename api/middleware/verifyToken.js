import jwt from "jsonwebtoken"

export const verifyToken = (req,res,next) => {
    console.log('Request headers:', req.headers);
    console.log('Cookies received:', req.cookies);
    console.log('Request origin:', req.get('origin'));
    
    const token = req.cookies.token

    if (!token) {
        console.log('No token found in cookies');
        return res.status(401).json({ message: "Not authenticated" })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if(err) {
            console.log('Token verification failed:', err);
            return res.status(403).json({message : "Token is not valid"})
        }
        console.log('Token verified successfully, payload:', payload);
        req.userId = payload.id
        next()
    })
}