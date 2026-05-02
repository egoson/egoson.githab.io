<template lang="pug">
  .form.pb-5
    b-toast(id="toast" title="Хьюстон, у нас проблема!" no-auto-hide variant="warning" solid)
      | Если вы видите это сообщение, значит что-то пошло не так =( Перезагрузите сайт или напишите о проблеме
      a(href="https://t.me/egoson") &nbsp;сюда

    RouterLink.pl-2(to="/") На главную
    .container.pl-2.pr-2
      p.form__title(@click='send') Выберете услугу
      ul
        li(v-for='service in services')
          p.form__service-title {{ service.serviceTitle }}
          ul
            li(v-for='serviceItem in service.groupServices')
              b-btn.d-flex.justify-content-between.mb-2(
                variant="outline-dark"
                block
                @click="selected = serviceItem"
                v-b-modal.modal
              )
                span.form__services-text {{ serviceItem.title }}
                span.flex-shrink-0 {{ serviceItem.cost }} руб

      p.form__service-info.mt-4.mb-2 Информация:
      span Принимаю на Дворцовой 5
      span.d-block Выезд платный (1500 руб). Ранние записи +500 руб (до 8 утра).
      span.d-block Для подтверждения записи необходимо внести задаток, который не возвращается, в случае отмены клиентом.
      a(href="tel:+79021224529") +7 902 122 45 29
      br
      span Проблемы с сайтом? пишите
      a(href="https://t.me/egoson") &nbsp;@egoson

    b-modal(
      id="modal"
      hide-footer
      title="Выбрана услуга:"
      centered
      v-model="modal"
    )
      b-form(@submit.prevent='send')
        b-btn(v-if="selected.title" variant="success" size="sm" disabled) {{ selected.title }}, {{ selected.cost }} руб

        hr
        span Телефон
        TheMask.form__input-phone(
          mask="+7 (###) ###-##-##"
          placeholder="+7 (999) 999-99-99"
          required name='phone'
          v-model='phone'
          autocomplete='off'
        )
        span Дата
        b-input.mb-2(type="date" name="date" required v-model="date" placeholder="Введите дату")
        span Время
        b-input.mb-4(type="time" name="time" required v-model="time" placeholder="Введите время")
        span Комментарий
        b-textarea.mb-4(name="comment" v-model="comment" placeholder="Можете написать время готовности или любой комментарий")
        input.d-none(name="cost" :value="selected.cost")
        input.d-none(name="service" :value="selected.title")
        b-input.d-none(name="textTemplate" :value="textTemplate")
        .text-center(v-if="loading")
          b-spinner(variant="primary" centered)

        b-btn(v-else variant="primary" block type="submit") Записаться

</template>

<script>
import { TheMask } from "vue-the-mask"
import moment from "moment"
import emailjs from "emailjs-com"
moment.locale("ru")

export default {
  name: "Form",
  components: { TheMask },
  data() {
    return {
      loading: false,
      modal: false,
      selected: {},
      phone: "",
      comment: "",
      time: moment(new Date()).format("HH:mm"),
      date: moment(new Date()).format("yyyy-MM-D"),
      services: [
        {
          serviceTitle: "Полный образ (макияж + прическа)",
          groupServices: [
            {
              title: "Свадебный",
              cost: "14000",
            },
            {
              title: "Свадебный с репетицией",
              cost: "16000",
            },
            {
              title: "Свадебный образ с сопровождением в день свадьбы (включен подбор образа невесты, смена нескольких образов в день свадьбы и репетиция)",
              cost: "30000",
            },
            {
              title: "Прическа + макияж",
              cost: "5500",
            },
            {
              title: "Детский образ",
              cost: "4000",
            },
          ],
        },
        {
          serviceTitle: "Макияж",
          groupServices: [
            {
              title: "Свадебный макияж",
              cost: "6000",
            },
            {
              title:
                "Макияж любой («совсем как будто не накрашено», «только глаза и губы подчеркнуть» и прочее)",
              cost: "3500",
            },
          ],
        },
        {
          serviceTitle: "Работа с волосами",
          groupServices: [
            {
              title:
                "Укладки, прически любые («чуть-чуть подзавить», «просто выпрямить, ну и объемчик», «мне только пару прядей подколоть» и тд)",
              cost: "3500",
            },
            {
              title: "Афрокудри",
              cost: "от 4000",
            },
          ],
        },
        {
          serviceTitle: "Брови и реснички",
          groupServices: [
            {
              title:
                "Долговременная укладка бровей + коррекция и окрашивание краской",
              cost: "3000",
              brow: true,
            },
            {
              title: "Окрашивание краской / хной",
              cost: "1500",
              brow: true,
            },
            {
              title: "Коррекция бровей",
              cost: "1300",
              brow: true,
            },
            {
              title: "Окрашивание бровей + коррекция",
              cost: "1700",
              brow: true,
            },
            {
              title: "Окрашивание бровей + коррекция + окрашивание ресниц",
              cost: "2200",
              brow: true,
            },
            {
              title: "Окрашивание ресниц",
              cost: "1200",
              brow: true,
            },
          ],
        },
        {
          serviceTitle: "Курсы",
          groupServices: [
            {
              title: "Разбор вашей косметички, +1 индивидуальный урок",
              cost: "10 000",
            },
            {
              title: "Индивидуальный курс из двух уроков",
              cost: "15 000",
            },
            {
              title: "Коммерческий макияж (группа)",
              cost: "35 000",
            },
            {
              title: "Коммерческий макияж (индивидуально)",
              cost: "45 000",
            },
            {
              title: "Укладки для себя",
              cost: "6000",
            },
          ],
        },
        {
          serviceTitle: "Подарочные сертификаты",
          groupServices: [
            {
              title: "На любую услугу из списка",
              cost: "от 5000",
            },
          ],
        },
        {
          serviceTitle: "Продюсирование съемок",
          groupServices: [
            {
              title:
                "Организация, сопровождение, разработка концепции и подбор команды",
              cost: "10 000",
            },
          ],
        },
      ],
    }
  },
  computed: {
    textTemplate() {
      return `Здравствуйте, жду вас ${moment(this.date).format("LL")} в ${
        this.time
      }, по адресу - Дворцовая 5 (здание Ульяновсккурорт), 2 этаж, 205 кабинет.
      Мой номер 89021224529. Волосы с вечера помыть, если моете утром - хорошо высушить)
      пожалуйста, не опаздывайте 🙏🏻❤️ если ознакомились с информацией - напишите что-то в ответ!`
    },
  },
  methods: {
    async send(e) {
      this.loading = true

      try {
        await emailjs.sendForm(
          "service_d7ivueh",
          "template_0cahi5t",
          e.target,
          "user_UnevHupXqXaZ1H1URuPPF"
        )
        await this.$router.push("/thank-you")
      } catch (e) {
        this.$bvToast.show("toast")
        this.modal = false
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
.form {
  padding-top: 20px;

  &__title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  &__service-title {
    margin-top: 17px;
    font-size: 18px;
    font-weight: 500;
  }

  &__services-text {
    padding-right: 10px;
    font-weight: 500;
    text-align: left;
  }

  &__service-info {
    font-weight: 500;
  }

  &__input-phone {
    display: block;
    margin: 0 auto 12px;
    width: 100%;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
    padding: 6px 12px;
  }

  small {
    line-height: 10px;
  }
}
</style>
