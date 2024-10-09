import { Router } from "express";
import { KeyShellModel } from "../models/keyshells.js";
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

router.post("/addkeyshell", upload.single("image"), async (req, res) => {
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
        .json({ message: "Please select a keyshell image to upload" });
    }
    // Set the correct MIME type for the image
    const metadata = {
      contentType: imageFile.mimetype, // Ensures the correct MIME type is set
    };

    const imageRef = ref(storage,`keyshells/${ v4()} carkeyexperts`)
    const uploadtask = uploadBytesResumable(
        imageRef,
        imageFile.buffer,
        metadata
    )
    await uploadtask
    //getdownloadurl
    const imageUrl = await getDownloadURL(imageRef)

    const keyShell = new KeyShellModel({
      productName,
      productPrice,
      productDescription,
      productImageUrl:imageUrl,
      productQuantity,
    });

    await keyShell.save();

    return res.status(200).json({ message: `Keyshell saved successfully` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Could not save keyshells ${error}` });
  }
});

router.get("/", async (req, res) => {
  try {
    const keyshells = await KeyShellModel.find();
    return res.status(200).json(keyshells);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Could not fetch keyshells ${error}` });
  }
});

export { router as keyshellRouter };
