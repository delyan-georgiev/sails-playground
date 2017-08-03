exports.up = (pgm) => {
    pgm.addColumns('References', {
        RootId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('References', [
        'RootId'
    ]);
};
