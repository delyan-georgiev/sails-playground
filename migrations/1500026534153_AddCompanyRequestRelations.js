exports.up = (pgm) => {
    pgm.addColumns('CompanyRequests', {
       OwnerId : 'integer',
       CompanyId : 'integer',
       RequestorId : 'integer',
       BusinessAddressId : 'integer',
       BillingAddressId : 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CompanyRequests', [
        'OwnerId',
        'CompanyId',
        'RequestorId',
        'BusinessAddressId',
        'BillingAddressId'
    ]);
};
