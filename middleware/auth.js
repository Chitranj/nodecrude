import jwt from 'jsonwebtoken';
const SECRET_KEY = 'j38fW~WskRI@$4972&^pW';

function verifyToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	
	if(!authHeader) {
		return res.status(403).json({message:"Token not found"})
	}
	
	const token = authHeader.split(" ")[1];
	
	jwt.verify(token, SECRET_KEY, (error, decoded) => {
		if(error) {
			return res.status(401).json({message : "Unauthorized"});
		}
		
		req.user = decoded;
		next();
	});
}

export {verifyToken}