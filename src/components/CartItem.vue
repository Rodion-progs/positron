<template>
  <div class="cart-item">
    <img class="cart-item__img" :src="img" :alt="title">
    <div class="cart-item__info">
      <h2 class="cart-item__title">{{ title }}</h2>
      <p class="cart-item__descr">{{ descr }}</p>
      <p class="cart-item__article">Артикул: {{ article }}</p>
    </div>
    <div class="cart-item__buttons">
      <button @click="decreaseCount(article)" class="cart-item__control cart-item__control_left">
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L1 1" stroke="#33374E" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <span class="cart-item__control cart-item__control_middle">{{ count }}</span>
      <button @click="increaseCount(article)" class="cart-item__control cart-item__control_right">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1V9" stroke="#33374E" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 5L1 5" stroke="#33374E" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="cart-item__total">{{ price * count }} ₽</div>
    <button class="cart-item__delete" @click="removeCurrentGood(article)">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5"/>
        <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5"/>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CartItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 1,
    },
    article: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  methods: mapMutations([
    "increaseCount",
    "decreaseCount",
    "removeCurrentGood",
  ]),
};
</script>
