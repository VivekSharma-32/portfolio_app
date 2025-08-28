const Contact = require("../models/contact.model");

const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to load contacts",
    });
  }
};

// save the contact details in the database
const register = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const contact = new Contact({ name, email, mobile, message });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Your request has been sent successfully.",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { register, getAll };
