exports.up = (pgm) => {
    pgm.createTable('Assignments', {
        id: 'id',
        sent: {
            type: 'boolean',
            defaultValue: false
        },

        // Buyer Cache Fields
        buyerCompanyName: {
            type: 'string'
        },

        buyerUserFullName: {
            type: 'string'
        },

        buyerBulstatNumber: {
            type: 'string'
        },


        // Seller Cache Fields
        sellerCompanyName: {
            type: 'string'
        },

        sellerUserFullName: {
            type: 'string'
        },

        sellerBulstatNumber: {
            type: 'string'
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Assignments');
};
