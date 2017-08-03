exports.up = (pgm) => {
    pgm.createTable('CompanyJoinRequests', {
        id: 'id',
        status: {
            type: 'string',
            notNull: true,
        },
        from: {
            type: 'string',
            notNull: true,
            defaultValue: 'COMPANY'
        },
        email: {
            type: 'string',
            notNull: true,
        },
        approvedBy: {
            type: 'integer',
            notNull: false
        },
        approvalDate: {
            type: 'date',
            notNull: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CompanyJoinRequests');
};
