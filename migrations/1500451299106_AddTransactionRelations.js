exports.up = (pgm) => {
    pgm.addColumns('Transactions', {
        InvoiceId: 'integer',
        UserId: 'integer',
        RejectorId: 'integer',
        CompanyId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Transactions', [
        'InvoiceId',
        'UserId',
        'RejectorId',
        'CompanyId'
    ]);
};
