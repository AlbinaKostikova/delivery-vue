<template>
  <div>
    <footer class="footer">
        <div class="container">
          <div class="footer-box">
            <router-link to="/" class="footer-logo logo">
              <img src="../assets/images/icons/logo.svg" alt="Delivery Food Logo" />
            </router-link>
            <div class="footer-nav">
              <ul>
                <li>Ресторанам</li>
                <li>Курьерам</li>
                <li>Пресс-центр</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div class="footer-social">
              <a href="/goods.html"><img src="../assets/images/icons/instagram.svg" alt="Instagram"></a>
              <a href="/goods.html"><img src="../assets/images/icons/facebook.svg" alt="Facebook" ></a>
              <a href="/goods.html"><img src="../assets/images/icons/vk.svg" alt="VK" ></a>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .footer {
  min-height: 156px;
  display: flex;
  align-items: center;
  padding: 60px 0;
}
.footer-box {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
}
.footer-nav {
  flex-grow: 1;
}
.footer-nav ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
}
.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}
.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
</style>