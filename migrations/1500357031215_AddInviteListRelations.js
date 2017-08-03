exports.up = (pgm) => {
    pgm.addColumns('InviteLists', {
        UserId: 'integer',
        CompanyId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('InviteLists', [
        'UserId',
        'CompanyId'
    ]);
};
