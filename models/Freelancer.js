module.exports = function(sequelize, DataTypes) {
  var freelancer = sequelize.define("freelancer", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your name."
        },
        len: [1]
      }
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your position."
        },
        len: [1]
      }
    },
    rate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        notNull: {
          msg: "Please enter your rate."
        }
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: {
          msg: "Please enter your email."
        },
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please pick your state."
        },
        len: [1]
      }
    }
  });
  return freelancer;
};
