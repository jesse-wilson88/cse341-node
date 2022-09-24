// const contactName = (req, res) => {
//   res.send("Barbara Wilson is my wife.");
// };

// module.exports = { contactName };

const mongodb = require("../db/connect");

const getAll = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

module.exports = { getAll };
