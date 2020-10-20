<template>
    <div class="topContainer">
        <h1>QuizPageへようこそ！</h1>
        <p>ここでは比較的簡単なクイズを楽しむことができます。</p>
    </div>
</template>

<script>
export default {
    name: 'Top'
    
}
</script>

<style>
    .topContainer{
        animation-name: fadein;
        animation-duration: .5s;
    }

    .topContainer >h1{
        margin: 0;
        padding: 32px 0;
    }

    .topContainer>p{
        margin: 0;
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