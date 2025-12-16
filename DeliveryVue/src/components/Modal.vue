<template>
  <div>
    <div class="cart-modal__overlay" :class="{open: isOpen}"  @click.self="closeModal()">
      <div class="cart-modal">
        <div class="cart-modal__header">
          <h2 class="cart-modal__header--title">Корзина</h2>
          <span class="cart-modal__header--close" @click="closeModal()">
            <img src="../assets/images/icons/close.svg" alt="close">
          </span>
        </div>
        <div class="cart-modal__body">
          <div class="cart-item">
            <p class="cart-item__title">Ролл угорь стандарт</p>
            <div class="cart-item__controls">
              <div class="cart-item__controls--price">250 Р</div>
              <button class="btn btn-outline">-</button>
              <div class="cart-item__controls--count">1</div>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
          <div class="cart-item">
            <p class="cart-item__title"></p>
            <div class="cart-item__controls">
              <div class="cart-item__controls--price"></div>
              <button class="btn btn-outline">-</button>
              <div class="cart-item__controls--count">1</div>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
          <div class="cart-item">
            <p class="cart-item__title"></p>
            <div class="cart-item__controls">
              <div class="cart-item__controls--price"></div>
              <button class="btn btn-outline">-</button>
              <div class="cart-item__controls--count">1</div>
              <button class="btn btn-outline">+</button>
            </div>
          </div>
        </div>
        <div class="cart-modal__footer">
          <div class="cart-modal__footer--price"></div>
          <div class="cart-modal__footer--controls">
            <button class="btn btn-primary">Войти</button>
            <button class="btn btn-outline">Корзина</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({isOpen: Boolean})
  const emit = defineEmits(['toggleModal'])
  const closeModal = () => emit('toggleModal')
</script>

<style scoped>
.cart-modal__overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.40);
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  border-radius: 5px;
  background: #FFF;
}

.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.cart-modal__header--title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
}

.cart-modal__header--close {
  cursor: pointer;
}

.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
}

.cart-modal__footer--price {
  border-radius: 5px;
  background: #262626;
  color: #FAFAFA;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 20px;
}

.cart-modal__footer--controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #D9D9D9;
}

.cart-item__title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

.cart-item__controls {
  display: flex;
  align-items: center;
}

.cart-item__controls--price {
  margin-right: 47px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.cart-item__controls button {
  border: 1px solid #40A9FF;
  color: #40A9FF;
}

.cart-item__controls--count {
  margin-left: 15px;
  margin-right: 15px;
}
</style>