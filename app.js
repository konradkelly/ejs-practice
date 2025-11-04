import express from "express";
const app = express();
const PORT = 3020;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
	const person = { name: "Donald Duck", oc: "plumber", fc: "red" };
	const friends = ["Mickey", "Goofy", "Minnie", "Daisy"];
	res.render("home", { person, friends });
});

app.get("/friends", (req, res) => {
	const friends = ["Mickey", "Goofy", "Minnie", "Daisy"];
	res.render("friends", { friends });
});

app.get("/movies", (req, res) => {
	const movies = ["Star Wars", "Lord of The Rings", "Lion King", "Avatar"];
	res.render("movies", { movies });
});

app.listen(PORT, () =>
	console.log(`Server is running on http://localhost:${PORT}`)
);
