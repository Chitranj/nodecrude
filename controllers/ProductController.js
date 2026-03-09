const getProducts = (res, req) => {
	res.send("get all products");
}

const getProductById = (res, req) => {
	res.send("Get products by id");
}

const addProducts = (res, req) => {
	res.send("Add Products");
}

const deleteProduct = (res, req) => {
	res.send("Delete Product");
}

const updateProduct = (res, req) => {
	res.send("Update Product");
}

export {getProducts, getProductById, addProducts, deleteProduct, updateProduct};