const express = require("express");
const bodyParse = require("body-parser");
const ejs = require("ejs");
const fetch = require("node-fetch");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home");
});
app.post("/contact", (req, res) => {
    fetch (
        'https://discord.com/api/webhooks/824648870134808586/pHB4mJzZA4YrBRTurmDkapxfUl64r5TWfIChbn-Pk2JLgXWxUb6izEQ0Z1LbYiGu_Vyj',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: "",
                embeds: [
                    {
                    // decimal number colour of the side of the embed
                    color: 4360181,
                    title: "Personal Site",
                    description: "",
                    fields: [
                        {
                            name: "Name",
                            value: req.body.name,
                        },
                        {
                            name: "Email",
                            value: req.body.email,
                        },
                        {
                            name: "Subject",
                            value: req.body.subject,
                        },
                        {
                            name: "Message",
                            value: req.body.message,
                        },
                    ],
                    // footer
                    // - icon next to text at bottom
                    footer: {
                        text: 'Personal Site * ' + new Date().toLocaleTimeString(),
                        icon_url:
                            "https://cdn.discordapp.com/attachments/787097558836969494/824741024857063465/ghost.png",
                    },
                    },
                ],
            }),
        }
    );
    res.render("/")
});

app.listen(process.env.PORT || 8888, () => {
    console.log("Server started on localhost:" + process.env.PORT || 8888);
});