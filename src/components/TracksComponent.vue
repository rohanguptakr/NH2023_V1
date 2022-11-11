<template> 
    <div class="wrapper">
        <div class="header">Tracks</div>
    
        <div class="cards_wrap">
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('C:/Git upload/NH2023_V1/src/assets/game-development.png')">	
                    <div class="role_name">Game Development</div>
                    </div>
                    <div class="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('C:/Git upload/NH2023_V1/src/assets/iot.png')">	
                    <div class="role_name">Internet of Things</div>
                    </div>
                    <div class="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('C:/Git upload/NH2023_V1/src/assets/artificial-intelligence.png')">
                    <div class="role_name">AI/ML</div>
                    </div>
                    <div class="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                    <img :src="require('C:/Git upload/NH2023_V1/src/assets/server.png')">
                    <div class="role_name">Blockchain</div>
                    </div>
                    <div class="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <div class="animate">
                        <img :src="require('C:/Git upload/NH2023_V1/src/assets/innovation.png')">	
                    <div class="role_name">Open Innovation</div>
                    </div>
                    <div class="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</div>
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
        background: #080518;
        padding-top: 2rem;
        padding-bottom: 2rem;
        position: relative;
    }
    .wrapper .header{
        width: 100%;
        height: 50px;
        color: #ecf27c;
        display: flex;
        align-items: center;
        font-weight: 900;
        font-size: 30px;
        padding-left: 10rem;
    }
    
    .cards_wrap{
        padding: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .cards_wrap .card_item{
        padding: 15px 10px;
        width: 20%;
    }
    
    .cards_wrap .card_inner{
        background: #fff;
        border-radius: 5px;
        padding: 35px 20px;
        min-width: 250px;
        min-height: 300px;
        max-height: 370px;
        width: 100%;
      position: relative;
    }
    
    .cards_wrap .card_item .role_name{
        color: #080518;
        font-weight: 900;
        letter-spacing: 2px;
        font-size: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        padding-top: 2rem;
    }
    
    .cards_wrap .card_item .film{
        font-size: 14px;
        line-height: 24px;
        color: #080518;
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
    
    @media screen and (max-width: 768px){
        .cards_wrap .card_item{
            width: 50%;
        }
        .wrapper .header{
            font-size: 16px;
            height: 60px;
        }
    }
    
    @media screen and (max-width: 568px){
        .cards_wrap .card_item{
            width: 100%;
        }
        .wrapper .header{
            font-size: 14px;
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
    
    .card_inner:hover {
      background-color: #ecf27c;
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