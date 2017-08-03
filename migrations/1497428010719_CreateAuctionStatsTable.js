exports.up = (pgm) => {
    pgm.createTable('AuctionStats', {
        id: 'id',
        lastBidDate: {
            type: 'date',
            allowNull: true
        },
        highestBid: {
            type: 'decimal',
            allowNull: true
        },
        lowestBid: {
            type: 'decimal',
            allowNull: true
        },
        countBids: {
            type: 'integer',
            allowNull: false,
            defaultValue: 0
        },
        countBidders: {
            type: 'integer',
            allowNull: false,
            defaultValue: 0
        },
        countParticipants: {
            type: 'integer',
            allowNull: false,
            defaultValue: 0
        },
        countRFQs: {
            type: 'integer',
            allowNull: false,
            defaultValue: 0
        },
        countInvites: {
            type: 'integer',
            allowNull: false,
            defaultValue: 0
        },
        awardedAmount: {
            type: 'decimal',
            allowNull: true
        },
        optimalAmount: {
            type: 'decimal',
            allowNull: true
        },
        surplusCharge: {
            type: 'decimal',
            allowNull: true
        },
        surplusChargeRate: {
            type: 'double',
            allowNull: true
        },
        awardedRate: {
            type: 'double',
            defaultValue: null
        },
        awardedSum: {
            type: 'double',
            defaultValue: null
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuctionStats');
};
