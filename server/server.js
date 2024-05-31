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
    const { clientId, date } = req.body;
    const biometric = req.file;

    if (!biometric) {
        return res.status(400).json({ message: 'Biometric file is required' });
    }

    const data = {
        clientId: clientId,
        date: date,
        biometric: biometric.buffer.toString('base64') // Converting to base64 for demonstration
    };

    res.json({ message: 'Data received successfully', data: data });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
