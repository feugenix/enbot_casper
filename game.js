var casper = require('casper').create(),
    credentials = casper.cli.args;

casper.start('http://simf.quest.ua/GameDetails.aspx?gid=50083', function() {
    this.click('#boxUser table tr:first-child a');
});

casper.waitForUrl(/Login.aspx/, function() {
    this.fill('#formMain', { Login: credentials[0], 'Password': credentials[1] }, true);
});

casper.waitForUrl('http://simf.quest.ua/GameDetails.aspx?gid=50083', function() {
    //res.send(JSON.stringify(this.getElementInfo('#tblUserBox')));
    require('utils').dump(this.getElementInfo('#tblUserBox'));
});

casper.run(function() {
    this.exit();
});
