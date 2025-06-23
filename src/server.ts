import 'dotenv/config';
import express, { Application} from 'express';
const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/hello', (_req, res) => {
return res.status(200).json({message: "Testing the general setup"});
});
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
})