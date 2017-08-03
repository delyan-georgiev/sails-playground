exports.up = (pgm) => {
    pgm.createTable('Auctions', {
        id: 'id',
        ownedBy: 'integer', // TODO make it foreign key
        type: {
            type: 'string',
            notNull: true
        },
        state: {
            type: 'string'
        },
        // details
        title: {
            type: 'string'
        },
        currency: { // currency code
            type: 'string',
            default: 'BGN',
            notNull: true
        },
        offerType: {
            type: 'string',
            // No auction without type
            default: 'semiPublic',
            notNull: true
        },
        accessType: {
            type: 'string',
            default: 'open',
            notNull: true
        },
        endDate: {
            type: 'date'
        },
        invitedOnly: {
            type: 'boolean',
            default: false
        },
        winnerSelectionTolerance: {
            type: 'integer',
            default: 7 * 24 * 60 * 60 * 1000
        },
        termsOfPayment: {
            type: 'string',
            default: '---',
        },
        buyerVisible: {
            type: 'boolean',
            default: false
        },
        bidStep: {
            type: 'decimal',
            default: 1
        },
        knownPrice: {
            type: 'decimal'
        },
        note: {
            type: 'string'
        },

        // active time
        startedAt: {
            type: 'date'
        },
        scheduledEnd: {
            type: 'date'
        },
        awardedDate: {
            type: 'date'
        },
        delayedEnd: {
            type: 'date'
        },
        delayedOnBid: 'integer', // TODO make it foreign key
        extensionDuration: {
            type: 'integer',
            notNull: true,
            default: 5 * 60 // seconds, aka endingType == 'extendable'
        },

        // rejection
        rejectedBy: 'integer', // TODO make it foreign key
        rejectedAt: {
            type: 'date'
        },
        rejectedReason: {
            type: 'string'
        },

        views: {
            type: 'integer',
            default: 0,
            notNull: true
        },

        categoryIds: {
            type: 'integer[]'
        },
        attachmentIds: {
            type: 'integer[]'
        },
        partialBids: {
            type: 'boolean',
            default: false,
            notNull: true
        },

        bidStats: {
            type: 'json',
            notNull: false
        },
        deliveryConditions: {
            type: 'string',
            notNull: false
        },

        searchString: {
            type: 'string',
            notNull: false,
        },

        searchTitle: {
            type: 'string',
            notNull: false,
        },
        showQuantity: {
            type: 'boolean',
            notNull: true,
            default: true
        },
        isStraight: {
            type: 'boolean',
            notNull: true,
            default: false
        },
        termOfDelivery: {
            type: 'string',
            notNull: false
        },
        internalID: {
            type: 'string',
            notNull: false
        },
        openOnCompletion: {
            type: 'boolean',
            notNull: true,
            default: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Auctions');
};
