<template> 
    <div class="wrapper" id="tracks">
        <div class="header">Tracks</div>
    
        <div class="cards_wrap">
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('../assets/game dev.png')">	
                    <div class="role_name">Game Development</div>
                    </div>
                    <div class="film">Create games that intrigue and bring alive a crowd with our brand new track. </div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('../assets/IOT (1).png')">	
                    <div class="role_name">Internet of Things</div>
                    </div>
                    <div class="film">Connect several devices together and help them communicate efficiently to help the world in your own, unique way.
                    </div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('../assets/AI.png')">
                    <div class="role_name">AI/ML</div>
                    </div>
                    <div class="film">Simulate human intelligence and show-off various applications that make AI&ML one of the most popular domains in computer science.</div>
                </div>
            </div>
        </div>
        <div class="cards_wrap">
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('../assets/Blockchain.png')">
                    <div class="role_name">Blockchain</div>
                    </div>
                    <div class="film">Use the blockchain to create innovative solutions by bringing together several technologies here.</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                        <img :src="require('../assets/open inno.png')">	
                    <div class="role_name">Open Innovation</div>
                    </div>
                    <div class="film">Freedom to build solutions to your own problems and truly show the rest your creative prowess.</div>
                </div>
            </div>
        </div>
    </div>  
</template>
    
<style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif;
    }
    
    .wrapper {
        background: var(--bgBlue);
        padding-top: 2rem;
        padding-bottom: 2rem;
        position: relative;
    }
    .wrapper .header{
        width: 100%;
        height: 50px;
        color: var(--bgYellow);
        display: flex;
        align-items: center;
        font-weight: 900;
        font-size: 30px;
        margin-left: 8%;
        margin-bottom : 5vh;
    }
    
    .cards_wrap{
        padding: 0px;
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        justify-content:center;
        flex-wrap: wrap;
        margin-bottom: -5%;
    }
    
    .cards_wrap .card_item{
        padding: 15px 10px;
        width: 20%;
        margin : 10px;
    }
    
    .cards_wrap .card_inner{
        background: #fff;
        border-radius: 5px;
        padding: 35px 20px;
        min-width: 33%;
        min-height: 50%;
        max-height: 80%;
        width: 100%;
      position: relative;
    }
    
    .cards_wrap .card_item .role_name{
        color: var(--bgBlue);
        font-weight: 900;
        font-size: 21px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        padding-top: 2rem;
    }
    
    .cards_wrap .card_item .film{
        font-size: 0.75rem;
        /* line-height: 24px; */
        color: var(--bgBlue);
      text-align: center;
    }
    
    .cards_wrap .card_item img{
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
      margin: auto;
    }
    
    @media screen and (max-width: 1024px){
        .cards_wrap .card_item{
            width: 33%;
        }
    }
    
    @media screen and (max-width: 900px){
        .cards_wrap .card_item{
            width: 50%;
        }
        .wrapper .header{
            font-size: 30px;
            height: 60px;
        }
    }
    
    @media screen and (max-width: 568px){
        .cards_wrap .card_item{
            width: 70vw;
            height : 60vh;
        }
        .wrapper .header{
            font-size: 2rem;
            padding-left:8%;
            margin-bottom : 5vh;
        }
    }
    
    .card_item .film{
      opacity: 0;
    }
    
    .card_inner{
      transition: all 0.4s ease-in-out;
    }
    
    .animate{
      transition: all 0.4s ease-in-out;
    }
    
    .animate img{
        width: 85vw;
        height: 30vh;
    }

    .card_inner:hover {
      background-color: var(--bgYellow);
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.7);
      transform: scale(1.1);
    }
    
    .card_item:hover .film{
      opacity: 1.5;
      display: block;
      animation: Slide_Up 1.5s ease;
    }
    
    .card_item:hover .animate{
      height: 200px;
      transform: translateY(-100px);
      transform: scale(0.5);
    }
    
    @keyframes Slide_Up{
      0%{
          transform:translateY(200px);
          opacity: 0;
      }
    
      40%{
          opacity: 0;
      }
    
      100%{
          transform:translateY(0);
          opacity: 1.5;
      }
    }
    </style>