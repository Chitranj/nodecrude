import bcrypt from 'bcrypt';
const saltRounds = 10;

const loginUser = (req, res) => {
	
	const user = req.body;
	if(user.email == "chitranjan366@gmail.com") {
		if(bcrypt.compareSync(user.password,  'Chit123@#')) {
			return res.status(200).json({message : "Login Successfully", data : req.body});
		}
		else {
			return res.status(200).json({message : "Invalid Credential"});
		}
	}
	else {
		return res.status(200).json({message : "Invalid Credential"});
	}
	
	res.send("Login Successfully");
}

const registerUser = (req, res) => {
	
	const userData = req.body;
	userData.password = bcrypt.hashSync(userData.password, saltRounds);
	console.log(userData.password);
	
	res.send("Register Successfully");
}

export {loginUser, registerUser}