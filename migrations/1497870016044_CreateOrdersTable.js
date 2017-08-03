exports.up = (pgm) => {
    pgm.createTable('Orders', {
        id: 'id',
        buyerCompanyName: {
            type: 'text',
            notNull: false
        },
        buyerUserFullName: {
            type: 'text',
            notNull: false
        },
        buyerBulstatNumber: {
            type: 'text',
            notNull: false
        },
        sellerCompanyName: {
            type: 'text',
            notNull: false
        },
        sellerUserFullName: {
            type: 'text',
            notNull: false
        },
        sellerBulstatNumber: {
            type: 'text',
            notNull: false
        },
        buyerReferenceId: {
            type: 'integer',
            notNull: true
        },
        sellerReferenceId: {
            type: 'integer',
            notNull: false
        },
        status: {
            type: 'string',
            notNull: true,
            default: 'draft'
        },
        note: {
            type: 'text',
            notNull: false,
        },
        deliveryDate: {
            type: 'date',
            notNull: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Orders');
};
