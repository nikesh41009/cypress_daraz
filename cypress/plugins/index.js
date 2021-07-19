/// <reference types="cypress" />
const sqlServer = require('cypress-sql-server');
module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
}

/**
  * @type {Cypress.PluginConfig}
 */
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
}