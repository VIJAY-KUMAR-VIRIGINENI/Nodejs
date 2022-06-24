import express from 'express';//import enables ES6 features
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app=express();
const PORT=5000;

app.use(bodyParser.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    res.send("WELCOME !");
});
app.listen(PORT,()=>console.log(`sever running on port :${PORT}`));