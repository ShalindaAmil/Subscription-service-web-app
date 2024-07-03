import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = async (req, res, next) => {
    const { token, refreshtoken } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized, login Again" });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        console.log('User ID set in request:', req.body.userId);
        next();
    } catch (error) {
        console.log('Error in authMiddleware:', error);
        if (error.name === 'TokenExpiredError') {
            if (!refreshtoken) {
                return res.status(401).json({ success: false, message: 'Refresh token required' });
            }

            // Verify refresh token
            try {
                const refreshToken_decode = jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET);
                const newToken = jwt.sign({ id: refreshToken_decode.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
                res.setHeader('authorization', newToken);
                req.body.userId = refreshToken_decode.id;
                console.log('New token issued:', newToken);
                next();
            } catch (refreshError) {
                console.log('Error verifying refresh token:', refreshError);
                return res.status(403).json({ success: false, message: 'Authorization failed' });
            }
        } else {
            return res.status(403).json({ success: false, message: "Authorization failed" });
        }
    }
};

export default authMiddleware;


