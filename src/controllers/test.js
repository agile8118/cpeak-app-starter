const indexFile = (req, res) => {
  res.sendFile("./public/index.html", "text/html");
};

const bar = (req, res) => {
  const name = req.body.name;
  res.status(200).json({ message: `Hi ${name}, we're all set to start!` });
};

const controller = {
  bar,
  indexFile,
};

module.exports = controller;
