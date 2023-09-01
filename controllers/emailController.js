const Email = require("../models/emailSchema");

const get = (req, res) => {
  res.send("This Email Support Route");
};

const postData = async (req, res) => {
  const { email, subject, smeName, platform, date, mailType, mailStatus } =
    req.body;
  console.log(req.body);
  if ([email, subject, smeName, platform].some((item) => !item)) {
    return res.status(400).json({
      message: "All fields required!",
    });
  }

  try {
    const newEmail = await Email.create({
      email,
      subject,
      smeName,
      platform,
      date,
      mailType,
      mailStatus,
    });
    console.log("newEmail");
    if (!newEmail) {
      return res.status(400).json({
        message: "Not able to save data",
      });
    }
    return res.status(201).json({
      message: "Data saved successfully!",
    });
  } catch (err) {
    console.log("Error in backend line 50", err);
    return res.status(400).json({
      message: "Not able to save data",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const { date } = req.query;
    console.log(date);

    if (date) {
      const targetDate = new Date(date);

      // Set the start and end of the target day
      let startOfDay = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate()
      );
      let endOfDay = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate() + 1
      );

      // startOfDay.setHours(0, 0, 0, 0);
      // endOfDay.setHours(23, 59, 59, 999);

      const data = await Email.find({
        createdAt: {
          $gte: startOfDay,
          $lt: endOfDay,
        },
      }).select("-_id -createdAt -updatedAt -__v");
      return res.json(data);
    }
    const data = await Email.find().select("-_id -createdAt -updatedAt -__v");
    return res.json(data);
  } catch (err) {
    return res.status(500).json({
      message: "Not able to get all data",
    });
  }
};

const getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { date, withId } = req.query;
    if (date) {
      const targetDate = new Date(date);

      // Set the start and end of the target day
      let startOfDay = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate()
      );
      let endOfDay = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate() + 1
      );

      // startOfDay.setHours(0, 0, 0, 0);
      // endOfDay.setHours(23, 59, 59, 999);

      if (withId) {
        const data = await Email.find({
          smeName: name,
          createdAt: {
            $gte: startOfDay,
            $lt: endOfDay,
          },
        }).select("-createdAt -updatedAt -__v");
        return res.json(data);
      }

      const data = await Email.find({
        smeName: name,
        createdAt: {
          $gte: startOfDay,
          $lt: endOfDay,
        },
      }).select("-_id -createdAt -updatedAt -__v");
      return res.json(data);
    }
    const data = await Email.find({ smeName: name }).select(
      "-_id -createdAt -updatedAt -__v"
    );
    return res.json(data);
  } catch (err) {
    return res.status(500).json({
      message: "Not able to get all data",
    });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Email.findByIdAndDelete(id);
    return res.json({
      message: "Deleted Successfully, Email: " + data?.email,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Not able to delete data",
    });
  }
};

const deleteByName = async (req, res) => {
  try {
    const { name } = req.params;
    const data = await Email.deleteMany({ smeName: name });
    return res.json(data);
  } catch (err) {
    return res.status(500).json({
      message: "Not able to get all data",
    });
  }
};

const deleteAll = async (req, res) => {
  try {
    const { name } = req.params;
    const data = await Email.deleteMany();
    return res.json(data);
  } catch (err) {
    return res.status(500).json({
      message: "Not able to get all data",
    });
  }
};

module.exports = {
  get,
  postData,
  getAll,
  getUserByName,
  deleteById,
  deleteByName,
  deleteAll,
};
