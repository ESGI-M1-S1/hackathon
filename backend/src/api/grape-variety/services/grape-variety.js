'use strict';

/**
 * grape-variety service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grape-variety.grape-variety');
