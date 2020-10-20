<template>
    <div class="cntContainer">
        <h1>Contact</h1>
        <p>お問い合わせは下記連絡先までお願い致します。</p>


    </div>
</template>

<script>
export default {
    name: 'Contact'
    
}
</script>

<style>
    .cntContainer{
        animation-name: fadein;
        animation-duration: .5s;
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