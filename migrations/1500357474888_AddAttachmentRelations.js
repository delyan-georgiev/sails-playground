exports.up = (pgm) => {
    pgm.addColumns('Attachments', {
        FileId: 'integer',
        UserId: 'integer',
        CompanyId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Attachments', [
        'FileId',
        'UserId',
        'CompanyId'
    ]);
};
