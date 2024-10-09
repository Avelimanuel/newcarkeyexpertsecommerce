import { Router } from "express";
import { SmartKeyModel } from "../models/smartkeys.js"; // Importing the schema
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../firebaseconfig.js";
import { v4 } from "uuid";
import multer from "multer";

// Configure multer for file upload
const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

router.post("/addproduct", upload.single("image"), async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      productDescription,
      productQuantity,
    } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res
        .status(400)
        .json({ message: "Please select a smartkey image to upload" });
    }
    // Set the correct MIME type for the image
    const metadata = {
      contentType: imageFile.mimetype, // Ensures the correct MIME type is set
    };

    
    const imageRef = ref(storage, `smartkeys/${imageFile.originalname + v4() } cakeyexperts`);
    const uploadTask = uploadBytesResumable(
      imageRef,
      imageFile.buffer,
      metadata
    );
    await uploadTask;
    const imageUrl = await getDownloadURL(imageRef); // Get the download URL

    // Save product to MongoDB
    const newSmartKey = new SmartKeyModel({
      productName,
      productPrice,
      productDescription,
      productImageUrl: imageUrl,
      productQuantity,
    });

    await newSmartKey.save();

    return res.status(200).json({ message: "Smart key added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ message: `Could not add product: ${error}` });
  }
});

router.get("/", async (req, res) => {
  try {
    const smartkeys = await SmartKeyModel.find();
    return res.status(200).json(smartkeys);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Could not fetch smartkeys ${error}` });
  }
});

export { router as smartRouter };
