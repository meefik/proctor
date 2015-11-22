var api = require('./api');
var profile = require('./profile');
var passport = require('./passport');
var storage = require('./storage');
var exam = require('./exam');
var student = require('./student');
var inspector = require('./inspector');
var notes = require('./notes');
var chat = require('./chat');
var members = require('./members');
var tools = require('./tools');
var schedule = require('./schedule');
module.exports = function(app) {
    app.use('/api', api);
    app.use('/profile', profile);
    app.use('/passport', profile.isStudent, passport);
    app.use('/storage', profile.isAuth, storage);
    app.use('/exam', profile.isStudent, exam);
    app.use('/student', profile.isStudent, student);
    app.use('/inspector', profile.isInspector, inspector);
    app.use('/notes', profile.isInspector, notes);
    app.use('/chat', profile.isStudent, chat);
    app.use('/members', profile.isStudent, members);
    app.use('/tools', profile.isStudent, tools);
    app.use('/schedule', profile.isInspector, schedule);
}