<template>
  <div class="cart-info">
    <h2 class="cart-info__title">Итого</h2>
    <div class="cart-info__body">
      <div class="cart-info__summary">
        <div class="cart-info__row">
          <span class="cart-info__descr">Сумма заказа</span>
          <span class="cart-info__count">{{ getTotalPriceInCart.toLocaleString() }} ₽</span>
        </div>
        <div class="cart-info__row">
          <span class="cart-info__descr">Количество</span>
          <span class="cart-info__count">{{ getTotalCountInCart }} шт</span>
        </div>
        <div class="cart-info__row">
          <span class="cart-info__descr">Установка</span>
          <span class="cart-info__count">{{ getMontage ? "Да" : "Нет" }}</span>
        </div>
      </div>
      <div class="cart-info__total">
        <span class="cart-info__total-descr">Стоимость товаров</span>
        <span class="cart-info__price">{{ getTotalPriceInCart.toLocaleString() }} ₽</span>
      </div>
    </div>
    <div class="cart-info__footer">
      <button
        class="button button-primary cart-info__button"
        :class="{disabled: !getTotalCountInCart || getPendingStatus}"
        :disabled="!getTotalCountInCart || getPendingStatus"
        @click="send"
      >Оформить заказ</button>
      <button
        class="button button-secondary cart-info__button"
        :class="{disabled: !getTotalCountInCart || getPendingStatus}"
        :disabled="!getTotalCountInCart || getPendingStatus"
        @click="send"
      >Купить в 1 клик</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cartInfo",
  computed: mapGetters([
    "getTotalCountInCart",
    "getTotalPriceInCart",
    "getMontage",
    "getPendingStatus",
  ]),
  methods: {
    send () {
      if (!this.getTotalCountInCart || this.getPendingStatus) return;
      this.sendOrder();
    },
    ...mapActions(["sendOrder"]),
  },
};
</script>
