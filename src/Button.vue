<template>
    <a :class="buttonClass" :href="link">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: ['link', 'light'],

    computed: {
        buttonClass() {
            console.log(this)
            return (this.light) ? 'gj-button gj-button--light gj--font-lg' : 'gj-button gj--font-lg'
        }
    }
}
</script>

<style>
.gj-button {
    align-items: center;
    background-color: #bb3900;
    border: 4px solid #0a2538;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    min-height: 40px;
    min-width: 200px;
    text-decoration: none;
    text-transform: uppercase;
}

.gj-button:hover {
    background-color: #a13100;
}

.gj-button--light {
    background-color: #0a2538;
    border: 0;
}

.gj-button--light:hover {
    background-color: #0a2538;
    text-decoration: underline;
}
</style>
