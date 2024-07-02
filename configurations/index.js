import dotenv from 'dotenv';
dotenv.config();

const configuration = {
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING = "mongodb+srv://keza:Gisele123@cluster0.1f3yymt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    PORT: process.env.PORT = 2000
}