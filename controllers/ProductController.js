//Dummy Product database

const products = [
	{id:1, name: "A", price : 102},
	{id:2, name: "B", price : 112},
	{id:3, name: "C", price : 240},
	{id:4, name: "D", price : 540},
	{id:5, name: "E", price : 500},
	{id:6, name: "F", price : 100},
	{id:7, name: "G", price : 201},
	{id:8, name: "H", price : 235},
	{id:9, name: "I", price : 115},
	{id:10, name: "J", price : 225}
];

const getProducts = (req, res) => {
	res.status(200).send(products);
}

const getProductById = (req, res) => {

	const id = req.params.id;
	
	let data = products.find(products => products.id == id)
	if(data != "undefined") {
		res.status(200).send(data);
	}
	else {
		res.send('Not Found Records');
	}
}

const addProducts = (req, res) => {
	let {id, name, price} = req.body;
	products.push({id, name, price});
	res.send(products);
}

const deleteProduct = (req, res) => {
	res.send(`Deleted Product id is ${req.params.id}`);
}

const updateProduct = (req, res) => {
	res.send("Update Product");
}

export {getProducts, getProductById, addProducts, deleteProduct, updateProduct};