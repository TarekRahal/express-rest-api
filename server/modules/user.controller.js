// create methods to call on the router to make requests
const User = require('./user.model');

var UserController =  {
    User: User,

    getAll: function (req, res) {
        this.User.find({}, (err, users) => {
            if (err) throw err;
            res.json(users);
        });
    },

    addUser: function (req, res) {
        const user = new this.User(req.body);
        user.save(function (err, result) {
            if (err) return res.json(err);
            console.log('1 element added');
            res.json({"message": "1 user added successfuly"});
        });
    },

    getUserById: function (req, res) {
        var user_id = req.body._id;
        this.User.findById(user_id, (err, user) => {
            if (err) throw err;
            res.json(user);
        });
    },

    deleteUser: function (req, res) {
        var user_id = req.params._id;
        this.User.deleteOne({_id: user_id}, function(err) {
            if (err) return res.json(err);
            res.json({"message": `User with ID ${user_id} was deleted`});
        })
    },

    updateUser: function(req, res) {
        var user_id = req.body._id;
        var userData = req.body.userData;

        this.User.updateOne({_id: user_id}, userData, (err, response) => {
            if (err) return res.json(err);
            console.log(response);
            res.json(response);
        })
    }
}

module.exports = UserController;