exports.up = (pgm) => {
    pgm.addColumns('PaymentRequests', {
        PayerId: 'integer',
        InvoiceId: 'integer',
        ParentId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('PaymentRequests', [
        'PayerId',
        'InvoiceId',
        'ParentId'
    ]);
};
