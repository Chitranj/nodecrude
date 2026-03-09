import express from 'express'
import AuthRoutes from './routes/AuthRoutes.js';
import ProductRoutes from './routes/ProductRoutes.js';

const PORT = 9999;
const app = express();

// Call All Routes

app.use("/auth", AuthRoutes);
app.use("/products", ProductRoutes);

app.listen(PORT, (err) => {
	if(err) throw err;
	else console.log(`Server run on ${PORT} number`);
})