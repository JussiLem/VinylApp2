const express = require('express');
const app = express();
const morgan = require('morgan')
const helmet = require('helmet');
app.use(helmet());

app.use(express.json());
express.urlencoded({limit: '5mb', extended: true});
app.use(morgan('combined'));

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('vinyls.db');

app.listen(8080, () => {
    console.debug('Server running on localhost:8080');
});

app.get('/', (req, res) => {
    return res.status(200).json({error: false, message: 'Working'})
});

app.get('/vinyl/all', (req, res) => {
    db.all('select * from vinyl', function (error, result) {
        if (error) throw error;

        return res.status(200).json(result);
    });
})

app.get('/vinyl/one/:id', (req, res) => {
    let id = req.params.id;

    db.get('select * from vinyl where id = ?', [id], (error, result) => {
        if (error) throw error;

        // Oliko vastaus tyhjä
        return typeof (result) == 'undefined' ? res.status(200).json({}) : res.status(200).json(result);

    });
});

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})

app.post('/vinyl/add', upload.single('thumbnail'), (req, res) => {

    let thumbnail = null;
    if (req.file) {
        thumbnail = req.file.originalname;
    }
    db.run('insert into vinyl (artist,title,genre,thumbnail) values (?, ?, ?, ?)',
        [req.body.artist, req.body.title, req.body.genre, req.body.thumbnail], (error, result) => {
            if (error) throw error;

            return res.status(200).json({count: 1});
        });
});

app.post('/vinyl/edit', upload.single('thumbnail'), (req, res) => {
    let vinyl = req.body;
    console.debug(vinyl);
    let thumbnail = null;
    if (req.file) {
        thumbnail = req.file.originalname;
    }
    db.run('UPDATE vinyl SET artist = ?, title = ?, genre = ?, thumbnail = ? WHERE id = ?',
        [vinyl.artist, vinyl.title, vinyl.genre, thumbnail], (error, result) => {
            if (error) throw error;

            return res.status(200).json({count: 1});
        });
});


app.get('/download/:name', (req, res) => {
	const file = './images/' + req.params.name;
	res.download(file);
});

app.get('/vinyl/delete/:id', (req, res) => {
    let id = req.params.id;

    db.run('delete from vinyl where id = ?', [id], function (error, result) {
        if (error) throw error;

        return res.status(200).json({count: this.changes});
    });
})

app.get('*', (req, res) => {
    return res.status(404).json({error: true, message: 'Did not found what you were looking for'})
})
