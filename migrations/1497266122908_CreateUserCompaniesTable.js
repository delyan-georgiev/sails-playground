exports.up = (pgm) => {
    pgm.createTable('UserCompanies', {
        id: 'id',
        userId: 'integer',
        companyId: 'integer',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('UserCompanies');
};
