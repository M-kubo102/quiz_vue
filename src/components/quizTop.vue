<template>
    <div class="qCategoryContainer">
        <h1>Quiz</h1>

        <section>
            <router-link to="/quizjoushiki01" class="qLink">
                <img src="../assets/denkyuu_on.png" class="thumbnail">
                <quizLink title="かんたんクイズ vol.1" quizAbout="まずは腕試し！"></quizLink>
                <rightAllow></rightAllow>
            </router-link>
        </section>

        <section>
            <router-link to="/quiz" class="qLink">
                <img src="../assets/shodo_fude.png" class="thumbnail">
                <quizLink title="日本語クイズ vol.1" quizAbout="中学校で習う漢字編"></quizLink>
                <rightAllow></rightAllow>
            </router-link>
        </section>

        <section>
            <router-link to="/quiz" class="qLink">
                <img src="../assets/nigaoe_galileo.png" class="thumbnail">
                <quizLink title="難問！ 世界史クイズ" quizAbout="全部出来たらスゴい！"></quizLink>
                <rightAllow></rightAllow>
            </router-link>
        </section>
        

    </div>
</template>

<script>
import quizLink from '../components/quizLink'
import rightAllow from '../components/rightAllow'

export default {
    name: 'QuizTop',
    components: {
        quizLink,
        rightAllow
    }
    
}
</script>

<style>
    .qCategoryContainer{
        animation-name: fadein;
        animation-duration: .5s;
    }

    .qCategoryContainer >section{
        width: 600px;
        margin: 24px auto;
    }

    .qLink{
        background: #f1f6f8;
        display: flex;
        width: 450px;
        margin: 0 auto;
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0 4px 0 #aac5cf;
    }

    .qLink:hover{
        background: #aac5cf;
        box-shadow: 0 4px 0 #236c79;
    }

    .qLink:active{
        transform: translateY(4px);
        box-shadow: none;
    }

    .thumbnail{
        width: 130px;
        height: 130px;
        padding: 5px;
    }

    @keyframes fadein {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>