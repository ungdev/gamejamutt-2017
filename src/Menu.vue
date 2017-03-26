<template>
    <div class="gj-menu">
        <div :class="pageClass('presentation')" @click="change('presentation')">Présentation</div>
        <div :class="pageClass('planning')" @click="change('planning')">Planning</div>
        <div :class="pageClass('map')" @click="change('map')">Accès</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        page: 'presentation'
    }
  },

  methods: {
    pageClass(page) {
        const baseClass = { 'gj-menu__link': true, 'gj--font-lg': true }

        return (this.page === page) ?
            Object.assign({ 'gj-menu__link--active': true }, baseClass) :
            baseClass
    },

    change(page) {
        this.page = page
        this.$emit('menuChange', page)
    }
  }
}
</script>

<style>
.gj-menu {
    align-items: center;
    background-color: #0a2538;
    box-sizing: border-box;
    color: #f9ff00;
    display: flex;
    height: 50px;
    margin: 20px auto;
    max-width: 1200px;
    padding: 0 20px;
    text-transform: uppercase;
}

.gj-menu__link {
    cursor: pointer;
}

.gj-menu__link:not(:last-child) {
    margin-right: 20px;
}

.gj-menu__link--active, .gj-menu__link:hover {
    text-decoration: underline;
}
</style>
