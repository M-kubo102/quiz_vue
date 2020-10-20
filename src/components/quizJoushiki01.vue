<template>
    <div class="joushiki01">
        <quizPageHeader qTitle="かんたんクイズ vol.1" qAbout="どれくらい正解できるかな？"></quizPageHeader>
        
        <div class="qContainer">
            <section class="qArea" v-show="!(quizEnd)">

                <p class="question">{{ currentQuiz.q }}</p>
                <ul class="choices">
                    <li v-for="ch in currentQuiz.c" :key="ch.id" @click="checkAnswer(ch)" :class="{ correct:ch.isCorrect, wrong:ch.isWrong, disabled:currentQuiz.isAnswered}">{{ ch.choice }}</li>
                </ul>

                <p v-show="currentQuiz.c[0].isCorrect" class="tf">正解！</p>
                <p v-show="currentQuiz.c[1].isWrong || currentQuiz.c[2].isWrong" class="tf">残念！</p>
                <p v-show="currentQuiz.isAnswered">よくわかる解説～</p>

                <div class="qBtn" :class="{disabled:!(currentQuiz.isAnswered)}" @click="nextQuiz" v-show="!(this.index === this.quiz.length -1)">次へ</div>
                <div class="qBtn" :class="{disabled:!(currentQuiz.isAnswered)}" @click="nextQuiz" v-show="this.index === this.quiz.length -1">結果を見る</div>

            </section>

            <section class="result" v-show="quizEnd">
                <h2>結果　{{ this.quiz.length }}問中{{ score }}問正解！</h2>
                <p v-if="score === 5">満点！素晴らしい！</p>
                <p v-else-if="score > 2">惜しい！あと少し！</p>
                <p v-else>もう少し頑張りましょう！</p>
                <div class="againBtn">
                    <router-link to="/quiz">クイズ選択に戻る</router-link>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import quizPageHeader from '../components/quizPageHead'

export default {
    name: 'QuizJoushiki01',
    components: {
        quizPageHeader
    },
    data(){
        return{
            score: 0,
            index: 0,
            quizEnd: false,
            quiz:[
                {
                    qId: 1,
                    q: '問題文1',
                    isAnswered: false,
                    c:[
                        {id: 0, choice: '選択肢A', isCorrect: false, isWrong: false},
                        {id: 1, choice: '選択肢B', isCorrect: false, isWrong: false},
                        {id: 2, choice: '選択肢C', isCorrect: false, isWrong: false}
                    ],
                    cShuffle:[]
                },
                {
                    qId: 2,
                    q: '問題文2',
                    isAnswered: false,
                    c:[
                        {id: 0, choice: '選択肢E', isCorrect: false, isWrong: false},
                        {id: 1, choice: '選択肢F', isCorrect: false, isWrong: false},
                        {id: 2, choice: '選択肢G', isCorrect: false, isWrong: false}
                    ]
                },
                {
                    qId: 3,
                    q: '問題文3',
                    isAnswered: false,
                    c:[
                        {id: 0, choice: '選択肢H', isCorrect: false, isWrong: false},
                        {id: 1, choice: '選択肢I', isCorrect: false, isWrong: false},
                        {id: 2, choice: '選択肢J', isCorrect: false, isWrong: false}
                    ]
                },
                {
                    qId: 4,
                    q: '問題文4',
                    isAnswered: false,
                    c:[
                        {id: 0, choice: '選択肢K', isCorrect: false, isWrong: false},
                        {id: 1, choice: '選択肢L', isCorrect: false, isWrong: false},
                        {id: 2, choice: '選択肢M', isCorrect: false, isWrong: false}
                    ]
                },
                {
                    qId: 5,
                    q: '問題文5',
                    isAnswered: false,
                    c:[
                        {id: 0, choice: '選択肢N', isCorrect: false, isWrong: false},
                        {id: 1, choice: '選択肢O', isCorrect: false, isWrong: false},
                        {id: 2, choice: '選択肢P', isCorrect: false, isWrong: false}
                    ]
                },
            ],
            shuffledQuiz: []
        }
    },
    computed: {
        currentQuiz(){
            console.log(this.quiz[this.index]);
            return this.quiz[this.index];
        }
    },
    methods: {
        shuffle(arr){
            for (let i = arr.length -1; i>0; i--){
                const j = Math.floor(Math.random() * (i+1));
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
            return arr;
        },
        checkAnswer(choices){
            if(this.quiz[this.index].isAnswered){
                return;
            }

            this.quiz[this.index].isAnswered = true;

            if(choices.id === 0){
                choices.isCorrect = true;
                this.score++;
            } else {
                choices.isWrong = true;
            }
        },
        nextQuiz(){
            if(!(this.quiz[this.index].isAnswered)){
                return;
            }

            if(this.index === this.quiz.length -1){
                this.quizEnd = true;
            } else {
                this.index++;
            }

        }
    }
    
}
</script>

<style>
    .joushiki01{
        animation-name: fadein;
        animation-duration: .5s;
    }

    .qContainer>ul{
        list-style: none;
        padding: 0;
    }

    .qArea,
    .result{
        background: whitesmoke;
        text-align: start;
        border-radius: 4px;
        margin: 30px auto;
        width: 600px;
        padding: 10px 20px;
    }

    .question{
        margin-bottom: 16px;
        font-weight: bold;
    }

    .choices{
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
    }

    .choices > li:hover{
        background: #ffffff;
    }

    .choices > li{
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    .choices > li.correct {
        background: #86f0c4;
        border: 1px solid #69cea4;
    }

    .choices > li.wrong {
        background: #f89898;
        border: 1px solid #c76464;
    }

    .tf{
        font-size: 18px;
        font-weight: bold;
    }

    .qBtn{
        background: #47b8a9;
        width: 80px;
        text-align: center;
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;
        margin: 0 0 0 auto;
    }

    .qBtn.disabled{
        background: #bbbbbb;
    }

    .againBtn{
        background: #47b8a9;
        width: 150px;
        text-align: center;
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
        margin: 20px auto;
        padding: 12px;
    }
    
    .againBtn >a{
        color: #fff;
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