<template>
  <menu>

    <ul>
      <li class="logo">
        <a target="_blank" href="https://t.me/gvidobluefox">
          <img src="@/assets/images/logo.jpg" alt="">
        </a>
      </li>
      <li>
        <NuxtLink to="/">Предпросмотр</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/categories">Поиск категорий</NuxtLink>
      </li>
    </ul>
  </menu>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style lang="scss" scoped>
menu {
  padding: 0;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;

    li {
      margin: 0 5px;

      &.logo {

        img {
          width: 70px;
          transition: transform 200ms;
          border-radius: 100%;
          overflow: hidden;
          &:hover{
            transform: rotate(15deg) scale(1.3);
          }
        }
      }

      a {
        text-decoration: none;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
