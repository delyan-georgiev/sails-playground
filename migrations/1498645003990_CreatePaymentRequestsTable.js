exports.up = (pgm) => {
    pgm.createTable('PaymentRequests', {
        id: 'id',
        paymentType: {
            type: 'string',
            notNull: true

        },
        status: {
            type: 'string',
            notNull: true
        },
        orderMetaData: {
            type: 'json',
            notNull: false
        },
        reference: {
            type: 'string',
            notNull: false
        },
        note: {
            type: 'string',
            notNull: false
        },
        created: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('PaymentRequests');
};
