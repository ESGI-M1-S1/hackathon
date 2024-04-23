'use strict';

/**
 * grape-variety router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::grape-variety.grape-variety');
