<template>
  <div class="modal__wrapper" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-title">{{ title }}</span>
        <button class="button-close" @click="toggleModal">закрыть</button>
      </div>
      <div class="modal-body">
        <button class="button button-primary" @click="toggleModal">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleModal() {
      this.$store.commit("toggleModal", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 60px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all .2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
}
.button-close{
  width: 36px !important;
  height: 36px !important;
  border: none !important;
  background: transparent !important;
  appearance: none !important;
  position: absolute !important;
  right: 10px !important;
  top: 10px !important;
  padding: 0px !important;
  outline: none !important;
  cursor: pointer !important;
  transition: all 200ms ease 0s !important;
  font-size: 0;
  &::before {
    content: "" !important;
    width: 3px !important;
    height: 22px !important;
    background: rgb(7, 7, 7) !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transition: all 200ms ease 0s !important;
    transform: translate3d(-50%, -50%, 0px) rotate(45deg) !important;
  }
  &::after {
    content: "" !important;
    width: 3px !important;
    height: 22px !important;
    background: rgb(7, 7, 7) !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transition: all 200ms ease 0s !important;
    transform: translate3d(-50%, -50%, 0px) rotate(-45deg) !important;
  }
}
</style>
