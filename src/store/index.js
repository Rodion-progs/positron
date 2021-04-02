import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const url = "https://positronus-default-rtdb.firebaseio.com/goods.json";

export default new Vuex.Store({
  state: {
    goodsList: [
      {
        id: 1,
        title: "Вытяжное устройство G2H",
        shortTitle: "G2H",
        article: "G2H1065",
        price: {
          current: 12644,
          from: 6848,
          to: 56584,
        },
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        shortDescr: "Вытяжное устройство для механической системы вентиляции",
        img: require("../assets/img/goods/g2h/g2h-small.jpg"),
        imgBig: require("../assets/img/goods/g2h/g2h-big.png"),
      },
      {
        id: 2,
        title: "Вытяжное устройство BXC",
        shortTitle: "BXC",
        article: "BXC1065",
        price: {
          current: 12644,
          from: 6848,
          to: 56584,
        },
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        shortDescr: "Вытяжное устройство для механической системы вентиляции",
        img: require("../assets/img/goods/bxc/bxc-small.png"),
        imgBig: require("../assets/img/goods/bxc/bxc-big.png"),
      },
      {
        id: 3,
        title: "Вытяжное устройство GHN",
        shortTitle: "GHN",
        article: "GHN1065",
        price: {
          current: 12644,
          from: 6848,
          to: 56584,
        },
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        shortDescr: "Вытяжное устройство для механической системы вентиляции",
        img: require("../assets/img/goods/ghn/ghn-small.png"),
        imgBig: require("../assets/img/goods/ghn/ghn-big.png"),
      },
      {
        id: 4,
        title: "Вытяжное устройство TDA",
        shortTitle: "TDA",
        article: "TDA1065",
        price: {
          current: 12644,
          from: 6848,
          to: 56584,
        },
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        shortDescr: "Вытяжное устройство для механической системы вентиляции",
        img: require("../assets/img/goods/g2h/g2h-small.jpg"),
        imgBig: require("../assets/img/goods/tda/tda-big.png"),
      },
      {
        id: 5,
        title: "Вытяжное устройство THJ",
        shortTitle: "THJ",
        article: "THJ1065",
        price: {
          current: 12644,
          from: 6848,
          to: 56584,
        },
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        shortDescr: "Вытяжное устройство для механической системы вентиляции",
        img: require("../assets/img/goods/g2h/g2h-small.jpg"),
        imgBig: require("../assets/img/goods/g2h/g2h-big.png"),
      },
      {
        id: 6,
        title: "Вытяжное устройство TWS",
        shortTitle: "TWS",
        article: "TWS1065",
        price: {
          current: 12644,
          from: 6848,
          to: 56584,
        },
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        shortDescr: "Вытяжное устройство для механической системы вентиляции",
        img: require("../assets/img/goods/g2h/g2h-small.jpg"),
        imgBig: require("../assets/img/goods/g2h/g2h-big.png"),
      },
    ],
    orderList: [
      {
        id: 1,
        count: 1,
        title: "Вытяжное устройство G2H",
        article: "G2H1065",
        currentPrice: 12644,
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        img: require("../assets/img/goods/g2h/g2h-small.jpg"),
      },
      {
        id: 2,
        count: 3,
        title: "Вытяжное устройство BXC",
        article: "BXC1065",
        currentPrice: 12644,
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        img: require("../assets/img/goods/bxc/bxc-small.png"),
      },
      {
        id: 3,
        count: 1,
        title: "Вытяжное устройство GHN",
        article: "GHN1065",
        currentPrice: 12644,
        descr: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        img: require("../assets/img/goods/ghn/ghn-small.png"),
      },
    ],
    isMontage: false,
    modal: {
      show: false,
      message: "",
    },
    pending: false,
  },
  mutations: {
    increaseCount(state, article) {
      state.orderList.find((item) => item.article === article).count++;
    },
    decreaseCount(state, article) {
      state.orderList.map((item) => (item.article === article && item.count > 1) ? item.count-- : 1);
    },
    changeMontage(state) {
      state.isMontage = !state.isMontage;
    },
    clearCart(state) {
      state.orderList = [];
    },
    removeCurrentGood(state, article) {
      state.orderList = state.orderList.filter((item) => item.article !== article)
    },
    toggleModal(state, message) {
      state.modal.show = !!message;
      state.modal.message = message;
    },
    pending(state, payload) {
      state.pending = payload;
    },
  },
  actions: {
    sendOrder(state) {
      state.commit("pending", true);
      state.commit("toggleModal", "Отправлям Ваш заказ...");
      const obj = {};
      state.getters.getGoodsInCart.forEach((item) => {
        const key = item.article;
        obj[key] = item;
      });
      const date = new Date();
      obj.orderInfoDate = `Новый заказ от ${date.toLocaleDateString("ru-Ru")}`;
      obj.needMontage = state.getters.getMontage;
      obj.summaryPrice = state.getters.getTotalPriceInCart;
      axios
        .post(url, obj)
        .then(() =>
          state.commit(
            "toggleModal",
            "Спасибо за заказ, менеджеры скоро с Вами свяжутся"
          )
        )
        .catch(() =>
          state.commit(
            "toggleModal",
            "Что- то пошло не так, попробуйте ещё раз "
          )
        )
        .finally(() => state.commit("pending", false));
    },
  },
  getters: {
    getGoodsList(state) {
      return state.goodsList;
    },
    getGoodsInCart(state) {
      return state.orderList;
    },
    getTotalCountInCart(state) {
      return state.orderList.reduce((acc, item) => acc + item.count, 0);
    },
    getUnicalGoodsCount(state) {
      return state.orderList.length;
    },
    getTotalPriceInCart(state) {
      return state.orderList.reduce(
        (acc, item) => acc + item.count * item.currentPrice,
        0
      );
    },
    getMontage(state) {
      return state.isMontage;
    },
    getModalShow(state) {
      return state.modal.show;
    },
    getModalMessage(state) {
      return state.modal.message;
    },
    getPendingStatus(state) {
      return state.pending;
    },
  },
});
