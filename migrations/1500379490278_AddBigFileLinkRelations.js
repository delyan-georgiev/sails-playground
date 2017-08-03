exports.up = (pgm) => {
    pgm.addColumns('BigFileLinks', {
        BigFileId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('BigFileLinks', [
        'BigFileId'
    ]);
};
