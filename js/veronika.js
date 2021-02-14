const db = new GoogleSpreadsheetsDb(
    'AIzaSyBdjsu_0mERhpzaz79MxeFzhcyqsiniImc',
    '17wKXW0Mw3TpG-loJx6XifKAEw61am8fVqV8CiCInoj0'
);


db.getAll('eat-list!A1:L100', (err, rows) => {
    console.log(rows);
})


