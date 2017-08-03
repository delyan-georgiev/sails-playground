exports.up = (pgm) => {
    pgm.createTable('CommentsSummaries', {
        id: 'id',
        context: {
            type: 'string',
            notNull: true
        },
        entityId: {
            type: 'integer',
            notNull: true
        },
        totalComments: {
            type: 'integer',
            notNull: true,
            default: 0
        },
        totalParentComments: {
            type: 'integer',
            notNull: true,
            default: 0
        },
        dateLastAdded: {
            type: 'date',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CommentsSummaries');
};
