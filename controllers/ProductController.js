//Dummy Product database
import  {v4 as uuid} from 'uuid';

const products = [
	{id:uuid(), name: "A", price : 102},
	{id:uuid(), name: "B", price : 112},
	{id:uuid(), name: "C", price : 240},
	{id:uuid(), name: "D", price : 540},
	{id:uuid(), name: "E", price : 500},
	{id:uuid(), name: "F", price : 100},
	{id:uuid(), name: "G", price : 201},
	{id:uuid(), name: "H", price : 235},
	{id:uuid(), name: "I", price : 115},
	{id:uuid(), name: "J", price : 225}
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
	let product = req.body;
	let id = uuid();
	products.push({...product, id});
	res.send(products);
}

const deleteProduct = (req, res) => {
	
	let id = req.params.id;
	
	let newProducts = products.filter((product) => product.id != id);
	
	//const data = [newProducts];
	res.send(newProducts);
}

const updateProduct = (req, res) => {
	
	let id = req.params.id;
	
	let {name, price} = req.body;
	
	let product = products.find(prod => prod.id ==  id);
	
	if (!product) {
        return res.status(404).send("Product not found");
    }
	
	product.name = name;
	product.price = price;
	
	res.send(products);
}

export {getProducts, getProductById, addProducts, deleteProduct, updateProduct};