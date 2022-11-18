<template>
    <div class="tracks-container">
      <main class="main">
        <div class="header">Tracks</div>
        <section class="cards cards-1">
          <div class="card">
            <div class="card__image-container">
              <img :src="require('../assets/game dev.png')">	
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Game Development
              </p>
              <div class="card__info">
                <p class="text--medium">Create games that intrigue and bring alive a crowd with our brand new track.</p>
                
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img :src="require('../assets/IOT (1).png')">
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                Internet of Things
              </p>
              <div class="card__info">
                <p class="text--medium">Connect several devices together and help them communicate efficiently to help the world in your own, unique way.</p>
                
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__image-container">
              <img :src="require('../assets/AI.png')">
            </div>
            <div class="card__content">
              <p class="card__title text--medium">
                AI/ML
              </p>
              <div class="card__info">
                <p class="text--medium">Simulate human intelligence and show-off various applications that make AI&ML one of the most popular domains in computer science.</p>
                
              </div>
            </div>
          </div>
        </section>
        <section class="cards cards-2">
          <div class="card">
              <div class="card__image-container">
                  <img :src="require('../assets/Blockchain.png')">
              </div>
              <div class="card__content">
                <p class="card__title text--medium">
                  Blockchain
                </p>
                <div class="card__info">
                  <p class="text--medium">Use the blockchain to create innovative solutions by bringing together several technologies here.</p>
                  
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card__image-container">
                  <img :src="require('../assets/open inno.png')">	
              </div>
              <div class="card__content">
                <p class="card__title text--medium">
                  Open Innovation
                </p>
                <div class="card__info">
                  <p class="text--medium">Freedom to build solutions to your own problems and truly show the rest your creative prowess.</p>
                  
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>
</template>

<style>
/* * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #303032;
} */


.header {
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
.main {
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 40px;
  padding-left: 3vw;
  max-width: 100vw;
  background-color : var(--bgBlue);
}

.text--medium {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: black;
}

.cards{
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
}
.cards-1{
  padding-top : 20vh;
}
.cards-2{
  position: relative;
  left : 10vw;
}
.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: var(--bgYellow);
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 10%;
}

.card:hover {
  background-color: #dae157;
  transform: translateY(-7px);
}

.card__image-container {
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
}

.card__image-container img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card__content {
  border-top:solid black;
  padding: 20px;
}

.card__title {
  margin-bottom: 20px;
}

.card__info {
  display: flex;
  align-self: end;
  align-items: center;
}



@media only screen and (max-width: 1000px) {
  .card {
    grid-column-end: span 6;
  }
}

@media only screen and (max-width: 700px) {
  main {
    grid-gap: 20px;
  }
  .card {
    grid-column-end: span 12;
  }
}

@media only screen and (max-width: 500px) {
  main {
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-gap: 10px;
  }
  .cards, .cards-2{
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
  .card {
    grid-column-end: span 6;
    position: relative;
    right: 13vw;
  }
  .cards-2{
    left:0vw;
  }
}

@media only screen and (max-width: 900px) {
  main {
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-gap: 10px;
  }
  .cards, .cards-2{
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
  .card {
    grid-column-end: span 6;
  }
  .cards-2{
    left:0vw;
  }
}

</style>