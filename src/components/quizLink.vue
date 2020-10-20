<template>
    <div class="link">
        <h2>{{ title }}</h2>
        <p>{{ quizAbout }}</p>     
    </div>
</template>

<script>

export default {
    props: ['title', 'quizAbout']
    
}
</script>

<style>
    .link{
        width: 450px;
        height: 130px;
        text-align: start;
        padding: 5px;
        color: #236c79;
    }

</style>