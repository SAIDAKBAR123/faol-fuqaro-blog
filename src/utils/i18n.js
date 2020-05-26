import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'uz',
  fallbackLocale: 'uz',
  messages: {
    en: {
      mainBtn: 'Main',
      btn: 'All',
      button1: 'Gas',
      button2: 'Electricity',
      button3: 'Water and Pipes',
      button4: 'Road and signs',
      newsHeader: 'Recent News',
      filter: 'Filter',
      loadMoreBtn: 'Load more',
      shareBtn: 'share',
      footer: 'made by',
      article: 'article'
    },
    ru: {
      mainBtn: 'Главная страница',
      btn: 'все',
      button1: 'газ',
      button2: 'Электричество',
      button3: 'водные и водные системы',
      button4: 'дорога и знаки',
      newsHeader: 'Свежие новости',
      filter: 'фильтр',
      loadMoreBtn: 'Загрузить больше',
      shareBtn: 'Поделиться',
      footer: 'сделано в',
      article: 'артикль'
    },
    uz: {
      mainBtn: 'Asosiy',
      btn: 'Barchasi',
      button1: 'Gaz',
      button2: 'Elektr ta\'minoti',
      button3: 'Suv va oqima tizimlar',
      button4: 'Yo\'l va belgilar',
      newsHeader: 'So\'nggi yangiliklar',
      loadMoreBtn: 'Ko\'proq yuklash',
      shareBtn: 'ulashish',
      footer: 'yaratuvchi:',
      filter: 'filtr',
      article: 'maqola'
    },
    krill: {
      mainBtn: 'Асосий',
      btn: 'Барчаси',
      button1: 'Газ',
      button2: 'Электр таъминоти',
      button3: 'Сув ва оқима тизимлар',
      button4: 'Йўл ва белгилар',
      newsHeader: 'Сўнгги янгиликлар',
      loadMoreBtn: 'Кўпроқ юклаш',
      shareBtn: 'улашиш',
      footer: 'яратувчи:'
    }
  }
})
