exports.up = (pgm) => {
    pgm.addColumns('CompanyStatistics', {
        CompanyId : 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CompanyStatistics', [
        'CompanyId'
    ]);
};
