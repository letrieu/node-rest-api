const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});

const postNotification = (req, res) => {
    console.log(req.body);

    const userId = req.body.record.zaloid;

    const postData = {
        "templateId": "00126fd75392bacce383",
        "templateData": {
            "buttonText": "Xem chi tiết",
            "buttonUrl": "https://zalo.me/s/1556607886581928575/",
            "title": "Cây",
            "contentTitle": "Đã thêm cây gia phả",
            "contentDescription": "Có người đã thêm bạn vào cây gia phả"
        }
    };

    fetch('https://openapi.mini.zalo.me/notification/template', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'Bearer XcxWKgejKbs8SE1NgorRH85suKYjB5L1XNJaHJSRROCzf3LMLW',
            'X-User-Id': userId,
            'X-MiniApp-Id': 1556607886581928575
        },
        body: JSON.stringify(postData),
    });

    res.send("Hi!");
};

app.post("/", postNotification);