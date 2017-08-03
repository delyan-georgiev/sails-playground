exports.up = (pgm) => {
    pgm.createTable('CompanyStatistics', {
        awardedAuctions: {
            type: 'integer',
            notNull: true,
            default: 0,
        },

        activeAuctions: {
            type: 'integer',
            notNull: true,
            default: 0,
        },

        finishedAuctions: {
            type: 'integer',
            notNull: true,
            default: 0,
        },

        rejectedAuctions: {
            type: 'integer',
            notNull: true,
            default: 0,
        },


        enteredAuctions: {
            type: 'integer',
            notNull: true,
            default: 0,
        },

        bidAuctions: {
            type: 'integer',
            notNull: true,
            default: 0,
        },

        wonAuctions: {
            type: 'integer',
            notNull: true,
            default: 0,
        },


        totalRating: {
            type: 'integer',
            notNull: true,
            default: 0,
        },

        ratingCount: {
            type: 'integer',
            notNull: true,
            default: 0,
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CompanyStatistics');
};
