const sequelize = require('../sequelize');
const User = require('./User');
const Comment = require('./comment');
const Post = require('./post');
const Group = require('./group');
const Like = require('./like');
const Setlist = require('./setlist');
const Song = require('./song');
const Tag = require('./tag');
const SetlistSongs = require('./setlistsongs');

// User.hasMany(Post, {
//   onUpdate: 'cascade',
//   onDelete: 'cascade'
// });

Post.belongsTo(User, {
  as: 'createdBy',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Comment.belongsTo(User, {
  as: 'createdBy',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Like.belongsTo(User, {
  as: 'createdBy',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.belongsToMany(Group, { through: 'UserGroups' });
Group.belongsToMany(User, { through: 'UserGroups' });

Song.belongsToMany(Tag, { through: 'SongTags'});
Tag.belongsToMany(Song, { through: 'SongTags'});

Song.belongsToMany(Setlist, { through: SetlistSongs });
Setlist.belongsToMany(Song, { through: SetlistSongs });

Group.hasMany(Song, {
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Group.hasMany(Setlist, {
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Post.hasMany(Comment, {
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Post.hasMany(Like, {
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Song.hasMany(Comment, {
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Setlist.hasMany(Comment, {
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Comment.hasMany(Like, {
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

// User.hasMany(UserLogin, {
//   foreignKey: 'userId',
//   as: 'logins',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });
//
// User.hasMany(UserClaim, {
//   foreignKey: 'userId',
//   as: 'claims',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });
//
// User.hasOne(UserProfile, {
//   foreignKey: 'userId',
//   as: 'profile',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });

function sync(...args) {
  return sequelize.sync(...args);
}

exports.sync = sync;
exports.User = User;
exports.Comment = Comment;
exports.Like = Like;
exports.Setlist = Setlist;
exports.SetlistSongs = SetlistSongs;
exports.Song = Song;
exports.Post = Post;
exports.Group = Group;
exports.Tag = Tag;
