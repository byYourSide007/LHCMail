<template>
    <div class="slide">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "SwiperItem"
	}
</script>

<style >
/*<!--    老师给的组件样式-->*/
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
      border-style: none;
    width: 100%;
  }
</style>
