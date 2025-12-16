<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-box">
          <router-link to="/">
            <div class="header-logo logo">
              <img src="../assests/images/icons/logo.svg" alt="Delivery Food Logo" />
            </div>
          </router-link>
          <div class="header-controls">
            <button class="btn btn-primary">
              <img src="../assests/images/icons/user.png" alt="user" />Войти</button>
            <button class="btn btn-outline" @click="openModal()">
              <img src="../assests/images/icons/shopping-cart.svg" alt="shopping-cart" />Корзина</button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
  const emit = defineEmits(['toggleeModal'])
  const openModal = () => emit('toggleModal')
</script>

<style scoped>
.header {
  min-height: 124px;
  display: flex;
  align-items: center;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
</style>