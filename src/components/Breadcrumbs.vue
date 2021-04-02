<template>
  <section class="breadcrumbs">
    <div class="container">
      <ul class="breadcrumbs__list">
        <li class="breadcrumbs__item">
          <a href="/" class="breadcrumbs__link">Главная</a>
          <svg class="breadcrumbs__separate" width="5" height="8" viewBox="0 0 5 8" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M0 8V0L5 4L0 8Z" fill="#33374E"/>
          </svg>
        </li>
        <li class="breadcrumbs__item">
          Корзина
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
name: "Breadcrumbs"
}
</script>
