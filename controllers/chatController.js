exports.chatRegisterPage = (req, res) => {
    res.status(200)
        .sendFile(`${__dirname}/views/chatRegister.html`);
};

exports.chatRegister = (req, res) => {
    res.status(200)
        .json({
            requestBody: req.body
        });
};