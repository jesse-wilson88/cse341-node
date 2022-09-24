// const contactName = (req, res) => {
//   res.send("Barbara Wilson is my wife.");
// };

// module.exports = { contactName };

const { ObjectId } = require("mongodb");
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

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.parmas.id);
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle };
