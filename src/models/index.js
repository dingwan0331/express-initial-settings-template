"use strict";

import Sequelize from "sequelize";
import * as config from "../config/mysqlConfig.js";

const NODE_ENV = process.env.NODE_ENV;

const databaseConfig = config[NODE_ENV];

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  databaseConfig
);

// model 간 관계를 정의합니다.
Object.values(sequelize.models).forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

export { sequelize };
