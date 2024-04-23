'use strict';

/**
 * grape-variety controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::grape-variety.grape-variety');
