<template>
    <div class="gj-container-presentation">
        <p>
            Venez exposer vos talents de développeur, graphiste, musicien ou scénariste dans une Game Jam sans répit, du Vendredi 28 au Dimanche 30 Avril 2017 à Troyes !<br/>
            <br/>
            Avec une équipe de 5 étudiants, vous aurez pour défi de créer un prototype de jeu vidéo en 48h sur un sujet  délivré le jour même. Le tout dans une ambiance amicale et compétitive.<br/>
            <br/>
            De la nourriture faite maison sera proposée à la vente en place.<br/>
            <br/>
            L'inscription est de 10€ par équipe ! Réservez directement via la page Facebook !<br/>
            <br/>
            Fourni: <br/>
            <ul>
                <li>Une prise par personne</li>
                <li>Tables groupées pour cinq</li>
                <li>Nourriture faite maison et vendue à prix étudiant (4€ par plat)</li>
            </ul>
        </p>

        <gj-button link="https://drive.google.com/file/d/0Bx3dXCSxUKLvdjk2aVgzenRtYnc/view?usp=sharing" :light="true">Règlement</gj-button>
    </div>
</template>

<script>
import GJButton from './Button.vue'

export default {
    components: {
        'gj-button': GJButton
    }
}
</script>

<style>
.gj-container-presentation {
    padding: 20px;
}

.gj-container-presentation > p {
    margin: 0;
}
</style>
