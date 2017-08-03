exports.up = (pgm) => {
    pgm.createTable('DelayedEvent', {
        event: 'string',
        date: 'date',
        args: 'json',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('DelayedEvent');
};
