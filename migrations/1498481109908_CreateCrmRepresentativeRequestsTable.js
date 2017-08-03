exports.up = (pgm) => {
    pgm.createTable('CrmRepresentativeRequests', {
        id: 'id',
        status: {
            type: 'string',
            notNull: true,
            default: 'PENDING'
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CrmRepresentativeRequests');
};
