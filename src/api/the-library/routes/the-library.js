'use strict';

/**
 * the-library router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::the-library.the-library');
