exports.up = (pgm) => {
    pgm.createTable('Invoices', {
        id: 'id',
        status: {
            type: 'string',
            notNull: true,
        },

        invoiceNumber: {
            type: 'string',
            notNull: false
        },
        date: {
            type: 'date',
            notNull: true
        },

        note: {
            type: 'string',
            notNull: true
        },

        paymentDueDate: {
            type: 'date'
        },

        // --- proforma fields --
        type: {
            type: 'string',
            notNull: true
        },

        activationType: {
            type: 'string'
        },

        activationId: {
            type: 'integer'
        },

        fullInvoiceId: {
            type: 'integer'
        },

        fullInvoiceNumber: {
            type: 'integer'
        },

        // --- amount attributes ---
        totalCharges: {
            type: 'double',
            notNull: true
        },

        prepayment: {
            type: 'double',
            default: 0,
            notNull: true
        },
        tax: {
            type: 'double',
            notNull: true
        },
        totalInWords: {
            type: 'jsonb',
            notNull: true
        },

        // --- Payment attributes -----------
        payment: {
            type: 'double',
            default: 0,
            notNull: true
        },
        proformaId: {
            type: 'integer',
            notNull: false
        },

        creditNoteId: {
            type: 'integer',
            notNull: false
        },

        // --- Buyer Cache Fields ------------
        buyerCompanyName: {
            type: 'string'
        },

        buyerResponsiblePerson: {
            type: 'string'
        },

        buyerBulstatNumber: {
            type: 'string'
        },

        buyerVatNumber: {
            type: 'string'
        },
        // --- Seller Cache Fields ------------
        sellerCompanyName: {
            type: 'string'
        },

        sellerResponsiblePerson: {
            type: 'string'
        },

        sellerBulstatNumber: {
            type: 'string'
        },

        sellerVatNumber: {
            type: 'string'
        },

        cancelReason: {
            type: 'string',
            notNull: false
        },
        cancelDate: {
            type: 'date',
            notNull: false,
            default: null
        },

        isAccounted: {
            type: 'boolean',
            notNull: false,
            default: false
        },

        isReverseCharged: {
            type: 'boolean',
            notNull: true,
            default: false
        },
        // --- PAYPAL FIELDS ---
        paymentId: {
            type: 'string',
            notNull: false
        },
        isPayed: {
            type: 'boolean',
            default: false
        },
        isExecuted: {
            type: 'boolean',
            notNull: true,
            default: false
        },
        paymentType: {
            type: 'string',
            notNull: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Invoices');
};
