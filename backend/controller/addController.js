import photoModel from "../models/photoModel.js";
import fs from 'fs';

const addPhoto = async (req, res) => {
  console.log("REQ BODY:", req.body);
  console.log("REQ FILE:", req.file);

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No image uploaded. Make sure to send it as form-data with field name 'image'."
    });
  }

  const { name, category } = req.body;
  const image_filename = req.file.filename;

  const newPhoto = new photoModel({
    name,
    category,
    image: image_filename
  });

  try {
    await newPhoto.save();
    res.status(201).json({
      success: true,
      message: "Photo added successfully",
      data: newPhoto
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error saving photo" });
  }
};


export { addPhoto };