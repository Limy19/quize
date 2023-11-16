'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CategoryQuestions',
      [
        {
          title: 'Рыбалка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Русский язык',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Выпывпвыпваыв',
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
