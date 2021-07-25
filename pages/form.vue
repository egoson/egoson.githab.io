<template lang='pug'>
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
                span {{ serviceItem.cost }} руб

      p.form__service-info.mt-4.mb-2 Информация:
      span Принимаю на Красноармейской 142
      span.d-block Выезд платный (1500 руб)
      a(href="tel:+79021224529") +7 902 122 45 29
      br
      span Проблемы с сайтом? пишите
      a(href="https://t.me/egoson") &nbsp;@egoson

    b-modal(
      id="modal"
      hide-footer
      hide-header
      centered
      v-model="modal"
    )
      b-form(@submit.prevent='send')
        p Выбрана услуга
        b-btn(v-if="selected.title" variant="success" size="sm" disabled) {{ selected.title }}, {{ selected.cost }} руб
        template(v-if="!selected.brow")
          hr
          b-form-checkbox(switch size="lg" name="browDiscount" v-model='browDiscount')
            | Любые услуги на брови -50%&nbsp;😍
          small Если вы выбрали макияж или прическу, получите скидку на брови!
        hr
        TheMask.form__input-phone(mask="+7 (###) ###-##-##" placeholder="Ваш телефон" required name='phone' v-model='phone')
        b-input.mb-2(type="date" name="date" required v-model="date" placeholder="Введите дату")
        b-input.mb-4(type="time" name="time" required v-model="time" placeholder="Введите время")
        input.d-none(name="service" :value="selected.title")
        input.d-none(name="cost" :value="selected.cost")
        .text-center(v-if="loading")
          b-spinner(variant="primary" centered)

        b-btn(v-else variant="primary" block type="submit") Записаться

</template>

<script>
import { TheMask } from 'vue-the-mask'
import moment from 'moment'
import emailjs from 'emailjs-com'

export default {
  name: 'Form',
  components: { TheMask },
  data() {
    return {
      loading: false,
      modal: false,
      browDiscount: true,
      selected: {},
      phone: '',
      time: moment(new Date()).format('HH:mm'),
      date: moment(new Date()).format('yyyy-MM-D'),
      services: [
        {
          serviceTitle: 'Полный образ',
          groupServices: [
            {
              title: 'На свадьбу',
              cost: '6000'
            },
            {
              title: 'На свадьбу с репетицией',
              cost: '8000'
            },
            {
              title: 'На фотосессию (при условии предоставления фотографий для публикации)',
              cost: '2300'
            },
            {
              title: 'Прическа + макияж',
              cost: '3000'
            },
            {
              title: 'На выпускной',
              cost: '4000'
            },
            {
              title: 'Полный образ с афрокудрями',
              cost: '3500'
            }
          ]
        },
        {
          serviceTitle: 'Макияж',
          groupServices: [
            {
              title: 'Свадебный макияж',
              cost: '3000'
            },
            {
              title: 'Макияж любой',
              cost: '1600'
            }
          ]
        },
        {
          serviceTitle: 'Укладка',
          groupServices: [
            {
              title: 'Укладки любые',
              cost: '1900'
            },
            {
              title: 'Прически любые',
              cost: '1700'
            },
            {
              title: 'Косички с канеколоном',
              cost: '1000'
            },
            {
              title: 'Афрокудри',
              cost: '2200'
            }
          ]
        },
        {
          serviceTitle: 'Брови и реснички',
          groupServices: [
            {
              title: 'Долговременная укладка бровей + коррекция и окрашивание краской\n',
              cost: '1600',
              brow: true
            },
            {
              title: 'Окрашивание краской / хной',
              cost: '300',
              brow: true
            },
            {
              title: 'Коррекция бровей',
              cost: '300',
              brow: true
            },
            {
              title: 'Окрашивание бровей + коррекция',
              cost: '600',
              brow: true
            }
          ]
        }
      ]
    }
  },
  methods: {
    async send(e) {
      this.loading = true

      try {
        await emailjs.sendForm('service_d7ivueh', 'template_0cahi5t', e.target, 'user_UnevHupXqXaZ1H1URuPPF')
        await this.$router.push('/thank-you')
      } catch (e) {
        this.$bvToast.show('toast')
        this.modal = false
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang='scss'>
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
    font-weight: 500;
    text-align: left;
  }

  &__service-info {
    font-weight: 500;
  }

  &__input-phone {
    display: block;
    margin: 10px auto 12px;
    width: 100%;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
    padding: 6px 12px;
  }

  small {
    line-height: 10px
  }
}
</style>
