const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/submit', upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'biometric', maxCount: 1 }]), (req, res) => {
    // Handle image files
    const profileImage = req.files['profileImage'][0];
    const biometric = req.files['biometric'][0];

    // Here, you can process the image files as needed (e.g., save them to disk, perform image processing, etc.)

    // Send a response indicating success
    res.json({ message: 'Image data received successfully', imageData: profileImage, biometricData: biometric });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
