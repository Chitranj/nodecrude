import express from 'express'
import AuthRoutes from './routes/AuthRoutes.js';
import ProductRoutes from './routes/ProductRoutes.js';

const PORT = 9999;
const app = express();
app.use(express.json());

// Call All Routes

app.use("/auth", AuthRoutes);
app.use("/products", ProductRoutes);

//Handle not found
app.use((req, res) => {
	res.status(404).send('Route Not Found');
})

app.listen(PORT, (err) => {
	if(err) throw err;
	else console.log(`Server run on ${PORT} number`);
});