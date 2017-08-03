exports.up = (pgm) => {
    pgm.createTable('TransportLoads', {
        id: 'id',
        title: 'string',
        description: 'string',
        weight: 'double',
        volume: 'double',
        width: 'double',
        length: 'double',
        height: 'double',
        linearLength: 'double',
        adrCode: 'string',
        tempMin: 'double',
        tempMax: 'double',
        measurementSystem: {
            type: 'string',
            default: 'metric',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('TransportLoads');
};
