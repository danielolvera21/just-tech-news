const User = require('./User');
const Post = require('./Post');

//create associations between User and Post (User will have many posts)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };