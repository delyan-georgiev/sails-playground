exports.up = (pgm) => {
    pgm.addColumns('CompanySubscriptions', {
        CompanyId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CompanySubscriptions', [
        'CompanyId'
    ]);
};
