<template lang='pug'>
  .start-page
    b-container.text-center.pb-5
      img.start-page__image.start-page__image_bg(src="@/static/1.jpg" alt="Сводебные")
      img.start-page__image.start-page__image_author(src="@/static/2.jpg" alt="Фотография стилиста визажиста Филипкиной Дарьи")
      section.pl-2.pr-2.mb-4
        h1.start-page__title.mt-1 Стилист визажист Филипкина Дарья
        b-btn.mb-3(variant='primary' block @click="$router.push('/form')") Записаться
        //b-btn.mr-2(variant='outline-primary') Макияж для себя
        b-btn(variant='outline-primary' @click="linkTo('https://makeupru.ru/')") Стать визажистом
        b-link

      hr
      section.pl-3.pr-3
        a(href="https://yandex.ru/maps/-/CCC1FU1~" rel="noreferrer" target="_blank")
          img.start-page__image.start-page__image_map.mb-2(src="@/static/3.jpg" alt="Как добраться до студии визажиста Филипкиной Дарьи")
        p Моя студия находится в центре города по адресу г. Ульяновск ул. Дворцовая 5
        hr
        p Вопросы перед записью:
        ul.start-page__list
          li.mb-2(v-for="question in questions")
            p.start-page__question.mb-1 {{ question.title }}
            span {{ question.answer }} &nbsp;
            RouterLink(v-if="question.link" :to="question.link") {{ question.linkText }}

</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: 'Где можно посмотреть свадебные работы?',
          answer: 'Все мои работы, среди которых свадебный и вечерний мейкап, стилизация съемок и фантазийный макияж, можно посмотреть на профильной странице в Instagram @stilist_73'
        },
        {
          title: 'Какие проффесиональные курсы вы заканчивали?',
          answer: 'Базовые курсы я проходила в своем родном городе, дополнительно повышала уровень у топовых стилистов России и ближнего зарубежья, закончила школу Ольги Томиной в Минске.'
        },
        {
          title: 'Делаете ли вы полный образ?',
          answer: 'Да, я делаю макияж и прически, укладки.'
        },
        {
          title: 'Стоит ли делать пробный макияж?',
          answer: 'Всё зависит от вашего желания. Она нужна, прежде всего, для вашего спокойствия – вы увидите свадебный образ заранее.'
        },
        {
          title: 'Сколько времени занимает макияж?',
          answer: 'Одна из главных задач в работе визажиста – уложиться в отведенное время. Поэтому сначала я узнаю предпочтения клиента по макияжу и только после этого называю время исполнения. Как правило, мейкап занимает около 40 минут, свадебный макияж – до часа.'
        },
        {
          title: 'Как следует подготовиться к макияжу?',
          answer: 'Не стоит делать чистку лица, пользоваться автозагаром и пить много воды за день до свадьбы. Все, что от вас требуется - это прийти в хорошем настроении.'
        },
        {
          title: 'Сколько стоят ваши услуги?',
          answer: 'Все цены на услуги можно посмотреть',
          linkText: 'здесь',
          link: '/form'
        },
        {
          title: 'Вы работаете по предоплате?',
          answer: 'В некоторых ситуациях я прошу предоплату.'
        },
        {
          title: 'Как осуществляется оплата?',
          answer: 'Вы оплачиваете мои услуги сразу после завершения макияжа.'
        },
        {
          title: 'Выезжаете ли вы к клиенту?',
          answer: 'Да, но выезд нужно будет оплатить отдельно.'
        }
      ]
    }
  },
  methods: {
    linkTo(e) {
      window.open(e)
    }
  }
}
</script>

<style lang='scss'>
.start-page {
  &__image {
    display: block;
    margin: auto;
  }

  &__image_map {
    border-radius: 4px;
    cursor: pointer;
  }

  &__image_bg {
    max-width: 768px;
    height: 50vh;
    object-fit: cover;
  }

  &__image_author {
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    width: 200px;
    height: 200px;
    margin-top: -124px;
  }

  &__list {
    text-align: left;
    font-size: 16px;
  }

  &__question {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
