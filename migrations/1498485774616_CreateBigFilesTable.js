exports.up = (pgm) => {
    pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    pgm.createTable('BigFiles', {
        id: 'id',
        name: {
            type: 'string',
            notNull: false
        },

        uuid: {
            type: 'uuid',
            default: pgm.func('uuid_generate_v4()'),
            notNull: true
        },

        mimeType: {
            type: 'string',
            notNull: false
        },

        size: {
            type: 'integer',
            notNull: false
        },

        date: {
            type: 'date',
            notNull: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('BigFiles');
    pgm.sql('Drop EXTENSION IF EXISTS "uuid-ossp"');
};
