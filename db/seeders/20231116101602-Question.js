'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question:
            'Какая была официальная зарплата Стива Джобса в компании Apple?',
          answer: '1 доллар',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Какой математик был изначально изображён на первом логотипе Apple?',
          answer: 'исаак ньютон',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Как называлась модель Нью Бэлэнс, в которых часто появлялся Стив Джобс на презентациях Apple?',
          answer: '991',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question:
            'Какой вид сов является самыми большими хищными птицами в природе?',
          answer: 'филины',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Как звали сову, которую подарил Хагрид Гарри Поттеру?',
          answer: 'букля',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'На сколько градусов совы могут поворачивать шею?(цифра)',

          answer: '270', // 135 в одну, 135 в другую
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question:
            'В сиквеле какого праздничного фильма снялся Дональд Трамп?',
          answer: 'один дома',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какой безалкогольный напиток первым был взят в космос?',
          answer: 'кока-кола',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Из чего сделан самый крепкий дом в “Трех поросятах”?',
          answer: 'из кирпичей',
          categoryId: 3,
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
