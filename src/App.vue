<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <OrderBasket />
      </header>
    </div>
    <Breadcrumbs />
    <OrderCart />
    <section class="seen">
      <div class="container">
        <h2 class="seen__title">Просмотренные товары</h2>
        <VueSlickCarousel class="seen-slider" ref="carousel" :slidesToShow="4" :infinite="true">
          <template #prevArrow="arrowOption">
            <div class="custom-arrow">
              <button class="custom-arrow__button">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19L1 10L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="slide-count">
                <span class="slide-current">{{ arrowOption.currentSlide + 1 }}</span>
                <span class="slide-all">/ {{ arrowOption.slideCount }}</span>
              </div>
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-arrow">
              <button class="custom-arrow__button">
                <svg  width="10" height="20" viewBox="0 0 10 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L9 10L1 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </template>
          <div class="seen-card" v-for="good in getGoodsList" :key="good.article">
            <div class="seen-card__header">
              <img class="seen-card__img" :src="good.imgBig" :alt="good.title">
              <h3 class="seen-card__title">{{ good.shortTitle }}</h3>
              <p class="seen-card__descr">{{ good.shortDescr }}</p>
            </div>
            <div class="seen-card__footer">
              <p class="seen-card__price-rub">{{ good.price.from }} ₽ – {{ good.price.to }} ₽ </p>
              <p class="seen-card__price-euro">{{ fromRublesToEuro(good.price.from) }} € – {{
                  fromRublesToEuro(good.price.to) }} €</p>
              <a href="#" class="button button-primary seen-card__button">Подробнее</a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <AppModal :title="getModalMessage" v-if="getModalShow"/>
  </div>
</template>

<script>
import Breadcrumbs from "./components/Breadcrumbs";
import OrderBasket from "./components/OrderBasket";
import OrderCart from "./components/OrderCart";
import AppModal from "./components/UI/Modal";
import VueSlickCarousel from "vue-slick-carousel";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Breadcrumbs,
    OrderBasket,
    OrderCart,
    VueSlickCarousel,
    AppModal,
  },
  computed: mapGetters(["getGoodsList", "getModalShow", "getModalMessage"]),
  methods: {
    fromRublesToEuro(ruble) {
      return (ruble / 90).toFixed(2);
    },
  },
};
</script>

<style lang="scss">

</style>
