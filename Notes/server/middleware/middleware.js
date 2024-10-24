import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const middleware = async (request, response, next)=>{
    try {
        const token = request.headers.authorization.split(' ')[1]
        if(!token){
            return  response.status(401).json({message: 'Unauthorized'})
        }

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

        if(!decodedToken){
            return response.status(401).json({message: 'Unauthorized'})
        }

        let userId = decodedToken.id
        const user = await User.findById({_id: userId})

        if(!user){
            return response.status(404).json({message: 'User not found'})
        }

        request.user  = {
            name:  user.name,
            id:  user._id,
        }
        // forward request to next api/etc
        next()
    } catch (error) {
        return response.status(500).json({message: 'Internal Server Error'})
    }
}

export default middleware