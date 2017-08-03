exports.up = (pgm) => {
    pgm.addColumns('BlockedCompanies', {
        BlockingCompanyId : {
            type: 'integer',
            primaryKey: true,
            notNull: true
        },
        BlockedCompanyId : 'integer',
        BlockingUserId : 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('BlockedCompanies', [
        'BlockingCompanyId',
        'BlockedCompanyId',
        'BlockingUserId'
    ]);
};
