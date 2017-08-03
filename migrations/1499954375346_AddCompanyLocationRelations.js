exports.up = (pgm) => {
    pgm.addColumns('CompanyLocations', {
       CompanyId : 'integer',
       AddressId : 'integer',
       BigFileId : 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CompanyLocations', [
        'CompanyId',
        'AddressId',
        'BigFileId'
    ]);
};
