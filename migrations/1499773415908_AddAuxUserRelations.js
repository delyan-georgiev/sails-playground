exports.up = (pgm) => {
    pgm.addColumns('AuxUsers', {
        UserSettingsId: 'integer',
        TransportNotificationId: 'integer',
        ReferenceWatcherId: 'integer',
        LogoId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('AuxUsers', [
        'UserSettingsId',
        'TransportNotificationId',
        'ReferenceWatcherId',
        'LogoId'
    ]);
};
