<template>
    <div class="gj-footer">
        <img class="gj-footer__partner" :data-aload="utt" width="148" height="50">
        <img class="gj-footer__partner" :data-aload="cc" width="50" height="50">
        <img class="gj-footer__partner" :data-aload="orange" width="50" height="50">
    </div>
</template>

<script>
import utt from './assets/utt.png'
import cc from './assets/cc.png'
import orange from './assets/orange.png'

export default {
    data() {
        return {
            utt,
            cc,
            orange
        }
    }
}
</script>

<style>
    .gj-footer {
        align-items: center;
        background-color: rgba(0, 0, 0, 0.75);
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        height: 80px;
        left: 0;
        padding: 10px;
        width: 100%;
    }

    .gj-footer > .gj-footer__partner:not(:last-child) {
        margin-right: 20px;
    }
</style>
