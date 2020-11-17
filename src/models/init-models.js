var DataTypes = require("sequelize").DataTypes;
var _department = require("./department");
var _issues = require("./issues");
var _priority = require("./priority");
var _rol = require("./rol");
var _users = require("./users");

function initModels(sequelize) {
  var department = _department(sequelize, DataTypes);
  var issues = _issues(sequelize, DataTypes);
  var priority = _priority(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  issues.belongsTo(users, { foreignKey: "id_agent"});
  users.hasMany(issues, { foreignKey: "id_agent"});
  issues.belongsTo(priority, { foreignKey: "priority_id"});
  priority.hasMany(issues, { foreignKey: "priority_id"});
  issues.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(issues, { foreignKey: "user_id"});
  users.belongsTo(department, { foreignKey: "department_id"});
  department.hasMany(users, { foreignKey: "department_id"});
  users.belongsTo(rol, { foreignKey: "rol_id"});
  rol.hasMany(users, { foreignKey: "rol_id"});

  return {
    department,
    issues,
    priority,
    rol,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
