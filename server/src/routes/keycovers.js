import { Router } from "express";
import { keyCoverModel } from "../models/keycovers.js";
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

router.post("/add-keycover", upload.single("image"), async (req, res) => {
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
        .json({ message: "Please select a keycover image to upload" });
    }

    // Set the correct MIME type for the image
    const metadata = {
      contentType: imageFile.mimetype, // Ensures the correct MIME type is set
    };

    // Correct property for image name is `originalname`
    const imageRef = ref(storage, `keycovers/${imageFile.originalname + v4()}`);
    const uploadTask = uploadBytesResumable(
      imageRef,
      imageFile.buffer,
      metadata
    );
    await uploadTask;
    const imageUrl = await getDownloadURL(imageRef); // Get the download URL

    const newKeyCover = new keyCoverModel({
      productName,
      productPrice,
      productDescription,
      productImageUrl: imageUrl,
      productQuantity,
    });
    await newKeyCover.save();
    return res.status(200).json({ message: "Key cover added successfully" });
  } catch (error) {
    console.log(`Failed to add key cover ${error}`);
    return res.status(500).json({ message: "Failled to add key cover" });
  }
});

router.get("/", async (req, res) => {
  try {
    const keyCovers = await keyCoverModel.find();
    return res.status(200).json(keyCovers);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Could not fetch smartkeys ${error}` });
  }
});

export { router as keycoverRouter };
