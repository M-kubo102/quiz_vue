<template>
    <header>
        <div class="logo">
            <h1>Quiz</h1>
        </div>
        <div class="container">
            <ul class="menu">
                <li><router-link to="/" class="btn"><span class="btn-text">Top</span></router-link></li>
                <li><router-link to="/about" class="btn"><span class="btn-text">About</span></router-link></li>
                <li><router-link to="/quiz" class="btn"><span class="btn-text">Quiz</span></router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    
}
</script>

<style>
    header{
        color: #333;
        width: 100%;
        height: 64px;
        background: #47b8a9;
        display: flex;
    }

    .logo{
        line-height: 15px;
        margin: 0 24px;
        color: #fff;
        font-size: 18px;
    }

    .menu{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        font-size: 18px;
    }

    a{
        display: block;  
        text-decoration: none;     
    }

    .btn{
        width: 120px;
        line-height: 64px;
        text-align: center;
        position: relative;
        display: flex;
    }

    .btn-text{
        width: 100%;
        height: 100%;
        color: #fff;
    }

    .btn-text:hover{
        background:  #b0eee6;
        color: #47b8a9;
        transition: .2s;
    }

</style>