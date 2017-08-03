exports.up = (pgm) => {
    pgm.createTable('CrmCompanies', {
        id: 'id',
        name: 'string',
        countryOfReg: 'string',
        regNumber: 'string',
        bulstatNumber: 'string',
        vatNumber: 'string',
        note: 'string',
        owner: 'string',
        manager: 'string',
        contactPerson: 'string',
        decisionMaker: 'string',
        decisionMakerPosition: 'string',
        decisionMakerEmail: 'string',
        decisionMakerPhone: 'string',
        activity: 'string',
        howKnow: 'string',
        contact: 'date',
        contactType: 'string',
        contactGoal: 'string',
        priority: 'string',
        clientStatus: 'string',
        source: 'string',
        operator: 'string',
        contactPersonPosition: 'string',
        contactPersonEmail: 'string',
        contactPersonPhone: 'string',
        purchaseInfo: 'string',
        purchaseVolume: 'string',
        turnover: {
            type: 'integer',
            default: 0
        },
        url: 'string',
        supplyDirector: {
            type: 'string',
            default: null,
            notNull: false
        },

        supplyDirectorEmail: {
            type: 'string',
            default: null,
            notNull: false
        },

        supplyDirectorPhone: {
            type: 'string',
            default: null,
            notNull: false
        },

        commercialDirector: {
            type: 'string',
            default: null,
            notNull: false
        },

        commercialDirectorEmail: {
            type: 'string',
            default: null,
            notNull: false
        },

        commercialDirectorPhone: {
            type: 'string',
            default: null,
            notNull: false
        },

        salesRepDate: {
            type: 'date',
            default: pgm.func('NOW()'),
            notNull: false
        },

        gracePeriod: {
            type: 'integer',
            notNull: true,
            default: 20
        },
        created: 'date',
        modified: 'date',
        deleted: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CrmCompanies');
};
