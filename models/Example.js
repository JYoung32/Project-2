module.exports = function(sequelize, DataTypes) {
  var freelancer = sequelize.define("freelancer", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return freelancer;
<<<<<<< HEAD
};
=======
};
>>>>>>> e7de9639fa5d438a992ada70345f33391d4c9795
