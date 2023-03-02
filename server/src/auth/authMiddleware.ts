import { Response, NextFunction } from "express"
import auth from "./auth";
import Request from './authRequest'

const checkAuthToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Get the authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is missing.' });
    }

    // Split the header into "Bearer" and token
    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Invalid Authorization header format.' });
    }

    try {
        // Verify the Firebase Authentication Token
        const decodedToken = await auth.verifyIdToken(token);
        // Get the user ID from the decoded token
        const userId = decodedToken.uid;
        // Add the user ID to the request object
        req.userId = userId;
        // Call the next middleware
        next();
    } catch (error) {
        console.log(error)
        // console.error('Error verifying Firebase Authentication Token:', error);
        return res.status(401).json({ message: 'Invalid or expired access token.' });
    }
}

export default checkAuthToken