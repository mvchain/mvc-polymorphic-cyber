<template>
  <transition :name="transitionName">
    <div class="back-to-ceiling" @click="backToTop" v-show="visible" :style="customStyle">
      <img :src="toTopImg" alt="">
    </div>
  </transition>
</template>

<script>
  import topImg from '@/assets/img/to-top.png';
  export default {
    name: 'BackToTop',
    props: {
      visibilityHeight: {
        type: Number,
        default: 400
      },
      backPosition: {
        type: Number,
        default: 0
      },

      transitionName: {
        type: String,
        default: 'fade'
      }
    },
    data() {
      return {
        toTopImg: topImg,
        visible: false,
        interval: null,
        customStyle: {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px',
          background: '#e7eaf1'
        }
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    methods: {
      handleScroll() {
        this.visible = window.pageYOffset > this.visibilityHeight;
      },
      backToTop() {
        const start = window.pageYOffset;
        let i = 0;
        this.interval = setInterval(() => {
          const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 200));
          if (next <= this.backPosition) {
            window.scrollTo(0, this.backPosition);
            clearInterval(this.interval);
          } else {
            window.scrollTo(0, next);
          }
          i++;
        }, 16.7);
      },
      easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .back-to-ceiling
    position: fixed;
    display: inline-block;
    text-align: center;
    cursor: pointer;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }

</style>
