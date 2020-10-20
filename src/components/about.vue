<template>
    <div class="aboutContainer">
        <h1>About</h1>
        
        <section>
            <h2>このサイトについて</h2>
            <p>サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文サイト紹介文</p>
        </section>

        <div class="line"></div>

        <section>
            <h2>製作者について</h2>
            <p>製作者紹介文製作者紹介文製作者紹介文製作者紹介文製作者紹介文製作者紹介文製作者紹介文製作者紹介文製作者紹介文製作者紹介文</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About'
    
}
</script>

<style>
    .aboutContainer{
        animation-name: fadein;
        animation-duration: .5s;
    }

    section{
        width: 800px;
        margin: 10px auto;
        padding: 10px;
    }

    section >p{
        text-align: start;
    }

    .line{
        width: 100%;
        border: 2px dashed #47b8a9;
        
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