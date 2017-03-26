<template>
  <div class="gj-timeline">
    <div class="gj-timeline__block">
      <div class="gj-timeline__block__img">
        <img :data-aload="mark" alt="mark" height="16">
      </div>

      <div class="gj-timeline__block__content">
        <h2 class="gj--font-lg">Mardi 28 Mars — Constitution des équipes</h2>
        <p>Équipes de 5 étudiants, si possible d'écoles voisines. L'inscription se fait en ligne et le paiement via la billetterie sécurisée de l'UTT. Vous recevez un mail de validation lorsque l'équipe a pris en compte votre inscription.</p>
      </div>
    </div>
    <div class="gj-timeline__block">
      <div class="gj-timeline__block__img">
        <img :data-aload="mark" alt="mark" height="16">
      </div>

      <div class="gj-timeline__block__content">
        <h2 class="gj--font-lg">Vendredi 28 Avril 17h — Début de la gamejam</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
      </div>
    </div>
    <div class="gj-timeline__block">
      <div class="gj-timeline__block__img">
        <img :data-aload="mark" alt="mark" height="16">
      </div>

      <div class="gj-timeline__block__content">
        <h2 class="gj--font-lg">Dimanche 30 Avril 17h — Fin de l'événement</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
      </div>
    </div>
  </div>
</template>

<script>
import mark from './assets/mark.png'

export default {
  data() {
    return {
      mark
    }
  }
}
</script>

<style>
.gj-timeline {
  margin: 30px 0;
  padding: 0 20px;
  position: relative;
}

.gj-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 38px;
  height: 100%;
  width: 4px;
  background: #ddd;
}

.gj-timeline__block {
  left: 4.5px;
  position: relative;
  padding-left: 50px;
}

.gj-timeline__block__img {
  background-color: #bb3900;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.gj-timeline__block__img > img {
  position: relative;
  left: 7px;
  top: 7px;
}

.gj-timeline__block__content > h2 {
  font-weight: 300;
  text-transform: uppercase;
}
</style>
