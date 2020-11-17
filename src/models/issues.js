/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issues', {
    id_issue: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    priority_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'priority',
        key: 'id_priority'
      }
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    id_agent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id_user'
      }
    }
  }, {
    sequelize,
    tableName: 'issues',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_issue" },
        ]
      },
      {
        name: "priority_id",
        using: "BTREE",
        fields: [
          { name: "priority_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "id_agent",
        using: "BTREE",
        fields: [
          { name: "id_agent" },
        ]
      },
    ]
  });
};
