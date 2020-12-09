<template>
  <div
    :class="['hero-card mx-auto text-size--4 text-weight--800 text-color--white',hover ? 'hero-card--hover':'']"
  >
    <div class="hero-card__avatar">
      <img
        :src="item.image"
        :alt="item.name"
      >
    </div>
    <div class="hero-card__description">
      <div
        v-if="link"
        class="text-weight--400 text-size--subtitle-1"
      >
        {{ getNested(item, 'name') }}
      </div>
      <div v-else>
        <div class="row">
          <div class="col-xs-12">
            Имя: {{ getNested(item, 'name') }}
          </div>
          <div class="col-xs-12">
            Статус: {{ getNested(item, 'status') }}
          </div>
          <div class="col-xs-12">
            Пол: {{ getNested(item, 'gender') }}
          </div>
          <div class="col-xs-12">
            Локация: {{ getNested(item, 'location','name') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import helperMixin from '@/mixins/helper.mixin'

export default {
  name: 'HeroCard',
  mixins: [helperMixin],
  props: {
    hover: {
      type: Boolean,
      default () {
        return false
      }
    },
    link: {
      type: Boolean,
      default () {
        return false
      }
    },
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
