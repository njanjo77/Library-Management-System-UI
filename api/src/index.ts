import  express from "express";
import { getPool } from "./config/database";
import userRouter from "./router/user.routes";
import borrowRouter from "./router/borrowrecords.Routes";
import categoriesRouter from './router/categories.Routes';
import booksRouter from './router/books.Routes';
import commentsRouter from './router/comments.Routes';
import { rateLimiterMiddleware } from "./Middlewares/rateLimiter";
import cors from 'cors'

const app = express()

app.use(cors());
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//load routes
app.use("/api",userRouter)
app.use("/api",borrowRouter)
app.use('/api/categories', categoriesRouter);
app.use('/api/books', booksRouter);
app.use('/api', commentsRouter);

//middleware


app.get("/", (req, res) => {
    res.send("Hello, the express server is running")
})

// app.get("/", (req, res) => {res.send("Hello, the express server is running")})
// app.get("/home",(req,res)=>{res.send("Try Again after 20mins")})
app.post("/users/create",rateLimiterMiddleware, async (req, res) => {
    res.json({ message: "User created"})
});
app.post('/users',(req,res)=>{res.json({ message: "User created"})});


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})




getPool()
.then(() => console.log("Database connected successfully"))
.catch((err: any) => console.error("Database connection failed", err))
