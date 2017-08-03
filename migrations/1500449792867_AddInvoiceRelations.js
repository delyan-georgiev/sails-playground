exports.up = (pgm) => {
    pgm.addColumns('Invoices', {
        CompanyId: 'integer',
        BuyerAddressId: 'integer',
        SellerAddressId: 'integer',
        RejectorId: 'integer',
        ProformaId: 'integer',
        CreditNoteId: 'integer',
        FullInvoiceId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Invoices', [
        'CompanyId',
        'BuyerAddressId',
        'SellerAddressId',
        'RejectorId',
        'ProformaId',
        'CreditNoteId',
        'FullInvoiceId'
    ]);
};
