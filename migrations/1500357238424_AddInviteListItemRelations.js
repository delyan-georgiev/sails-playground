exports.up = (pgm) => {
    pgm.addColumns('InviteListItems', {
        InviteListId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('InviteListItem', [
        'InviteListId'
    ]);
};
