<template>
  <section class="cart-section">
    <div class="container">
      <div class="cart-wrapper">
        <div class="cart">
          <div class="cart__header">
            <h1 class="cart__title">Ваша корзина</h1>
            <span class="cart__count">{{ getTotalCountInCart }} {{ normalize }}</span>
            <button class="cart__reset" @click="clearCart">
              Очистить корзину
            </button>
          </div>
          <div class="cart__body">
            <cartItem
              v-for="good in getGoodsInCart"
              :key="good.article"
              :title="good.title"
              :descr="good.descr"
              :price="good.currentPrice"
              :count="good.count"
              :article="good.article"
              :img="good.img"
            />
            <h4 v-if="!getGoodsInCart.length">
              Корзина пуста, но есть выход- просто перезагрузи страницу
            </h4>
          </div>
          <cartMontage v-if="getGoodsInCart.length" />
        </div>
        <cartInfo />
      </div>
    </div>
  </section>
</template>

<script>
import cartItem from "./CartItem";
import cartInfo from "./CartInfo";
import cartMontage from "./CartMontage";
import {normalizeEnding} from '@/utils/utils';
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "OrderCart",
  components: {
    cartItem,
    cartInfo,
    cartMontage,
  },
  computed: {
    normalize() {
      return normalizeEnding(this.getTotalCountInCart, ["товар","товара","товаров"])
    },
    ...mapGetters(["getGoodsInCart", "getTotalCountInCart"])},
  methods: mapMutations(["clearCart"]),
};
</script>
