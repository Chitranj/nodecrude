import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
const saltRounds = 10;
const SECRET_KEY = 'j38fW~WskRI@$4972&^pW';
const loginUser = (req, res) => {
	
	const user = req.body;
	/*if(user.email == "chitranjan366@gmail.com") {
		if(bcrypt.compareSync(user.password,  '$2b$10$.nEWHUS9pO23jcDnB1DzCOZsD8V7zHvcQvUaLxsQRtiQIFROzvLOm'))
			return res.status(200).json({message : "Login Successfully", data : req.body});
		else
			return res.status(200).json({message : "Invalid Credential"});
	}
	else
		return res.status(200).json({message : "Invalid Credential"});
	
	res.send("Login Successfully"); */
	
	if(user.email === "chitranjan366@gmail.com" && bcrypt.compareSync(user.password, '$2b$10$.nEWHUS9pO23jcDnB1DzCOZsD8V7zHvcQvUaLxsQRtiQIFROzvLOm') ) {
		const token = jwt.sign(
			{email:user.email, role:user.role},
			SECRET_KEY,
			{expiresIn: "1h"}
		);
		
		return res.status(200).json({message : "Login Successfully", token : token});
	}
	else {
		return res.status(401).json({status: false, 'message' :'Invalid Credential !'});
	}
	
}

const registerUser = (req, res) => {
	
	const userData = req.body;
	userData.password = bcrypt.hashSync(userData.password, saltRounds);
	console.log(userData.password);
	
	res.send("Register Successfully");
}

export {loginUser, registerUser}