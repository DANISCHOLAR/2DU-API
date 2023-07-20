import express, {Express} from 'express';
import mongoose from 'mongoose'
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes())

const uri: string = `mongodb+srv://Danischolar:olayinka@cluster0.q3ad4ae.mongodb.net/?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose.connect(uri, options)
.then(() => 
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
).catch (error => {
    throw error
})