'use strict';

/**
 * the-library service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-library.the-library');
