const express = require("express");
const exhbs = require("express-handlebars");
const app = express();
require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 5000;
const connecting = require("./helper/connect");
connecting(process.env.MONGO_URI);

//mongodb+srv://Akbarshox:<password>@cluster0.1cfxxcc.mongodb.net/BookStore

const hbs = exhbs.create({
  layoutsDir: "views/layouts",
  layout: "main",
  extname: "hbs",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
});
app.use(express.static(path.join(__dirname, "public")));

//Routes import
const homeRouter = require("./routes/home");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
//Routes
app.use("/", homeRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.listen(3000, () => {
  console.log(`Server worked https://localhost:${port}`);
});
