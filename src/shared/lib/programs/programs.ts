import { CURRENCY_CODES } from "@shared/lib/currencyCodes";

import { COURSE_CATEGORY, DIFFICULT_LEVELS, EQUIPMENTS } from "./data";
import type { Programs } from "./types";

export const PROGRAMS_MAP: Programs = [
  {
    id: "dribble",
    title: "Программа улучшения дриблинга",
    descriptionShort: "Программа улучшения дриблинга для начинающих",
    descriptionLong:
      'Программа "Баскетбол: улучшение ведения" предназначена для игроков, желающих повысить базовые навыки дриблинга. Упражнения рассчитаны на развитие уверенного ведения мяча обеими руками, улучшение контроля и координации, а также освоение базовых кроссоверов — перед собой и под ногой.\n' +
      "\n" +
      "В программе:\n" +
      "\n" +
      "Базовые упражнения на ведение правой и левой рукой на месте и в движении.\n" +
      "Кроссоверы перед собой для развития скорости и контроля смены направления.\n" +
      "Кроссоверы под ногой для повышения ловкости и уверенности в работе с мячом.\n" +
      "Постепенное усложнение заданий для закрепления навыков обеими руками.\n" +
      "Программа подходит для начинающих и тех, кто хочет укрепить фундаментальные элементы дриблинга. Регулярное выполнение упражнений поможет чувствовать себя увереннее на площадке и быстрее реагировать на защиту соперника.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWfjZF0Acmkt1ZpuwHmlStz6yViBGok74Sx0idIhhZgrZuaz8u7H7TTgfkkO-RLfYDHiOIrOI4-gKV-PWQSJcazXstD4HnYDO2UL_2D2CFU6jk-dKKfzkBsbM6aAhkDK9XgKTj4jNjqvzQmG89T4hWBXJfEqivm12QX5jO49HWN1CQZEya-bCdCKMfn7ehy7Zd9GCEoL2qaOlHjsYf-wmdoDkhlvnYLycHugfjoLnLQgjqwJ9LsKjtb89QK_LtO8eHEr1nSnL4xgw",
    level: DIFFICULT_LEVELS.beginner.id,
    prerequisites: [], // программы, которые нужно пройти до этой
    nextPrograms: ["advanced_dribbling"], // что проходить дальше
    category: COURSE_CATEGORY.basketball.id, // категория
    subcategory: COURSE_CATEGORY.basketball.subcategories.ballControl.id,
    badges: [],
    programVideo: {
      name: {
        ru: "Тренировка дриблинга",
        eng: "dribble training",
      },
      ru: {
        id: "0e73aebcbc1d4fd2d3cdd8b016332a94",
        p: "EtBi5oyQ74xcpGOoTpHicA",
      },
      world: {
        id: "0e73aebcbc1d4fd2d3cdd8b016332a94",
        p: "EtBi5oyQ74xcpGOoTpHicA",
      },
    },
    price: {
      currency: {
        [CURRENCY_CODES.rusRubles]: {
          value: 999,
          discount: {
            percent: 0,
            value: 0,
          },
        },
        [CURRENCY_CODES.belRubles]: {
          value: 30,
          discount: {
            percent: 0,
            value: 0,
          },
        },
      },
    },
    tags: [],
    equipments: [
      EQUIPMENTS.ball.id,
      EQUIPMENTS.tennisBall.id,
      EQUIPMENTS.jumpingRope.id,
      EQUIPMENTS.cone.id,
      EQUIPMENTS.basketballRim.id,
    ],
    improvements: [],
    courseTime: 20,
    videos: [
      {
        name: {
          ru: "разминка прыжки",
          eng: "warm up jumps",
        },
        ru: {
          id: "f6e18dc9b9c118772d6a009a83a5cb2b",
          p: "lplyhHYsPsrVs1E9MSjP1g",
        },
        world: {
          id: "f6e18dc9b9c118772d6a009a83a5cb2b",
          p: "lplyhHYsPsrVs1E9MSjP1g",
        },
        time: 30,
      },
      {
        name: {
          ru: "дриблинг правой рукой",
          eng: "right hand dribble",
        },
        ru: {
          id: "38b251815c15b33dc5607793327a4198",
          p: "7x1kVBUA1hUEujMJ3DLOJw",
        },
        world: {
          id: "38b251815c15b33dc5607793327a4198",
          p: "7x1kVBUA1hUEujMJ3DLOJw",
        },
        time: 30,
      },
      {
        name: {
          ru: "дриблинг левой рукой",
          eng: "left hand dribble",
        },
        ru: {
          id: "99b4b1c66c44d98b2c5fc932057415f5",
          p: "gM2NqeE3UqWxkapSjnEQSQ",
        },
        world: {
          id: "99b4b1c66c44d98b2c5fc932057415f5",
          p: "gM2NqeE3UqWxkapSjnEQSQ",
        },
        time: 30,
      },
      {
        name: {
          ru: "статический кроссовер",
          eng: "static crossover",
        },
        ru: {
          id: "83eeb6c5764a61c8833d604df291904d",
          p: "obi-vsamUOC5hSyDoAZJkA",
        },
        world: {
          id: "83eeb6c5764a61c8833d604df291904d",
          p: "obi-vsamUOC5hSyDoAZJkA",
        },
        time: 30,
      },
      {
        name: {
          ru: "амплитудный кроссовер",
          eng: "amplitude crossover",
        },
        ru: {
          id: "58ef24780733ba4f44d36d85421d83be",
          p: "liFEZf2680CWsurQk5czVg",
        },
        world: {
          id: "58ef24780733ba4f44d36d85421d83be",
          p: "liFEZf2680CWsurQk5czVg",
        },
        time: 30,
      },
      {
        name: {
          ru: "кроссовер под правой ногой",
          eng: "between the right leg",
        },
        ru: {
          id: "5c991938e3c470d4b95d3191e61de28b",
          p: "d-7i4rSL_BVBhe-mH1gaXA",
        },
        world: {
          id: "5c991938e3c470d4b95d3191e61de28b",
          p: "d-7i4rSL_BVBhe-mH1gaXA",
        },
        time: 30,
      },
      {
        name: {
          ru: "кроссовер под левой ногой",
          eng: "between the left leg",
        },
        ru: {
          id: "0a6bee2d7172e002bffebe3f14c7e0f1",
          p: "FYIyIbOuAUv07tojkJFQpQ",
        },
        world: {
          id: "0a6bee2d7172e002bffebe3f14c7e0f1",
          p: "FYIyIbOuAUv07tojkJFQpQ",
        },
        time: 30,
      },
    ],
  },
];
