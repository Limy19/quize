'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CategoryQuestions',
      [
        {
          title: 'Apple',
          url: './image/a.jpg',

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Совы',
          url: './image/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Рандом',
          url: './image/r.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Category', null, {});
  },
};
