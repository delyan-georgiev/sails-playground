exports.up = (pgm) => {
    pgm.createTable('Test', {
        id: 'id'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Test');
};
