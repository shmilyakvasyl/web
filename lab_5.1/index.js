const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let News = [{
    id: 0,
    newsHeadline: "UzNU",
    newsSummary: "story about UzhNU",
    text: "quality text",
    date: "16.10.2009",
    views: 1567
},
{
    id: 1,
    newsHeadline: "School #20",
    newsSummary: "story about kitchen",
    text: "quality text",
    date: "10.07.2011",
    views: 2110
},
{
    id: 2,
    newsHeadline: "My hobby",
    newsSummary: "I tell you about my hobbies",
    text: "quality text",
    date: "30.11.2021",
    views: 125
},
];

app.get("/news", (req, res) => {
    res.send(News);
});

app.get("/news/query", (req, res) => {
    let queryNews = News;
    if (req.query.country)
        queriedNews = queriedNews.filter((news) => 
            news.country.includes(req.query.views)
        );
    if (req.query.date)
        queriedNews = queriedNews.filter((news) => 
            news.date.includes(req.query.date)
        );
    res.send(queriedNews);
});

app.get("/news/:id", (req, res) => {
    let news = News.find((news) => news.id === parseInt(req.params.id));
    if (news !== null) res.status(200).send(book);
    else res.status(404).send("Not Found");
});

app.delete("/news/:id", (req, res) => {
    let index = News.findIndex((news) => news.id === parseInt(req.params.id));
    if (index >= 0) {
        let deletedNews = News[index];
        News.splice(index, 1);
        res.send(deletedNews);
    } else res.status(404).send("Not Found");
});

app.post("/news", (req, res) => {
    let newNews = {
        id: Number(Date.now()),
        ...req.body,
    };
    News.push(newNews);
    res.send(newNews);
});

app.all("/", (req, res) => {
    res.send("Test");
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});