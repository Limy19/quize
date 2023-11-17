'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CategoryQuestions',
      [
        {
          title: 'Apple',
          image:
            'https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Совы',
          image: 'https://www.art-east.ru/_images/90937/jpg_1000_1100/01.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Рандом',
          image:
            'https://kartinkof.club/uploads/posts/2022-05/1653719120_4-kartinkof-club-p-voprositelnii-znak-kartinki-dlya-detei-ves-4.jpg',
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
