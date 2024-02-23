const express = require('express')
const bodyparser = require('body-parser')
const translate = require('translate-google')
const langdetect = require('langdetect')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(bodyparser.json())
app.use(cors())

const PORT = 4000

app.get('/', async (req, res) => {
    try {
        res.send('Type /translate in the URL to get results.');
    } catch (error) {
        console.log(error)
    }
})

// api for translating the text
// app.post('/translate', async (req, res) => {
//     try {
//         const textToTranslate = req.body.text;

//         if (textToTranslate === null || typeof textToTranslate !== 'string' || !textToTranslate.trim()) {
//             return res.status(400).json({ error: 'Text is required in the request body and must be a non-empty string.' });
//         }

//         // Check if the content is numeric or not translatable
//         if (/^\d+$/.test(textToTranslate)) {
//             return res.json({
//                 message: 'The provided text is invalid and cannot be translated.',
//                 originalText: textToTranslate,
//                 translatedText: textToTranslate
//             });
//         }

//         const detectedLanguage = langdetect.detectOne(textToTranslate);

//         if (detectedLanguage === 'fr') {
//             return res.json({
//                 message: 'The provided text is already in French.',
//                 originalText: textToTranslate,
//                 translatedText: textToTranslate
//             });
//         }

//         const translation = await translate(textToTranslate, { to: 'fr' });

//         if (!translation) {
//             return res.status(500).json({ error: 'Translation failed.' });
//         }

//         res.json({ originalText: textToTranslate, translatedText: translation });
//     } catch (error) {
//         console.error(error);

//         if (error instanceof SyntaxError) {
//             return res.status(400).json({ error: 'Invalid JSON in the request body.' });
//         }

//         res.status(500).json({ error: 'Internal server error.' });
//     }
// })


app.listen(PORT, () => {
    console.log(`serve is running on ${PORT}`)
})