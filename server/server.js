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

app.post("/submit", upload.single('biometric'), async (req, res) => {
    const { biometric } = req.body;

    const data = {
        biometric: biometric
    };

    res.json({ message: 'Biometric data received successfully', data: data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
