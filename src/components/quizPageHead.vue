<template>
    <div>
        <h1>{{ qTitle }}</h1>
        <p>{{ qAbout }}</p>
    </div>
</template>

<script>
export default {
    name: 'QuizPageHead',
    props:['qTitle', 'qAbout']
    
}
</script>

<style>

</style>