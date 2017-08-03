exports.up = (pgm) => {
    pgm.addColumns('CompanyJoinRequests', {
       CompanyId : 'integer',
       UserId : 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CompanyJoinRequests', [
        'Companyid',
        'UserId'
    ]);
};
