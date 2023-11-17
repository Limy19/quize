'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CategoryQuestions',
      [
        {
          title: 'Apple',
          image: './images/a.jpg',

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Совы',
          image: './images/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Рандом',
          image: './images/r.jpg',
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
