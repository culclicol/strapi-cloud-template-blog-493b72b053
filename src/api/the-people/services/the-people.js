'use strict';

/**
 * the-people service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-people.the-people');
