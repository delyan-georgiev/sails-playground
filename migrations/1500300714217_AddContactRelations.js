exports.up = (pgm) => {
    pgm.addColumns('Contacts', {
        OwnerCompanyId: 'integer',
        CompanyId: 'integer',
        UserId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Contacts', [
        'OwnerCompanyId',
        'CompanyId',
        'UserId'
    ]);
};
