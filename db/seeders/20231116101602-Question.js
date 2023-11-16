'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'сколько стоит доллар в рублях',
          answer: '100',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Question', null, {});
  },
};
