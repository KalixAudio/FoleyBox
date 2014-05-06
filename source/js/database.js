var db = openDatabase ('database', '1.0', 'my first database', 2 * 1024 * 1024);

// Create table and insert one line
db.transaction (function (tx) {
  tx.executeSql ('CREATE TABLE IF NOT EXISTS foo (id unique, text)');
  tx.executeSql ('INSERT INTO foo (id, text) VALUES (1, "synergies")');
  tx.executeSql ('INSERT INTO foo (id, text) VALUES (2, "luyao")');
});

// Query out the data
db.transaction (function (tx) {
  tx.executeSql ('SELECT * FROM foo', [], function (tx, results) {
    var len = results.rows.length, i;
    for (i = 0; i < len; i++) {
      console.log (results.rows.item(i).text);
    }
  });
});
