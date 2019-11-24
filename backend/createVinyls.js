const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('vinyls.db');

db.serialize(() => {

    let sql = "CREATE TABLE vinyl (" +
        "id integer PRIMARY KEY NOT NULL, " +
        "artist text NOT NULL, " +
        "title text NOT NULL, " +
        "genre text NOT NULL, " +
        "thumbnail text)";

    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row was created");
    });

    sql = "INSERT INTO `vinyl` (`id`, `artist`, `title`, `genre`) " +
        " VALUES (1, 'Nirvana', 'Nirvana', 'Rock')";
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row was created");
    });

    sql = "INSERT INTO `vinyl` (`id`, `artist`, `title`, `genre`) " +
        " VALUES (2, 'Metallica', 'Metallica', 'Heavy Rock')";
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row was created");
    });

    sql = "INSERT INTO `vinyl` (`id`, `artist`, `title`, `genre`) " +
        " VALUES (3, 'The Prodigy', 'Fat Of The Land', 'Electronic')";
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row was created");
    });

    db.each("SELECT id, artist FROM vinyl", function (err, row) {
        if (err) {
            return console.log(err.message);
        }
        console.log(row.id + ", " + row.artist);
    });

    db.close();
});
