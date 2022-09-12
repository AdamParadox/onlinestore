<template>
    <div class="slider_wrapper">
 <carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
    <slide v-for="(slide, idx) in slides" :key="slide">
      <div class="slider_content"><h1>{{slide}}:{{idx}}</h1></div>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default { 
    data() {
        return {
            slides: ['SLIDER','SLIDER','SLIDER','SLIDER','FDFD']
        }
    },
    components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
<style>
.slider_wrapper{
    padding: 0px 25px;
    margin-top: 50px;
}
.slider_content{
    height: 333px;
    border-radius: 4px;
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.carousel__prev, .carousel__next{
    top:45%;
    background-color: #2196F3  ;
}
.carousel__pagination{
    padding-left: 0px;
}
.carousel__pagination-button{
    background-color: #2195f386;
}
.carousel__pagination-button--active{
    background-color: #2196F3;
}
</style>