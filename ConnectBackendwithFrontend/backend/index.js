import express from "express";
import cors from "cors";
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// app.use(cors({
//     origin: "http://localhost:5173"
// }));


app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Another joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 3,
            title: "A third joke",
            content: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
        }
    ];
    res.json(jokes);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});