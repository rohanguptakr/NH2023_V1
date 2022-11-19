<template>
    <div class="container9">
        <h1 class="tracks-header" style="color:#ecf27c; padding-top:5vh;">Tracks</h1>
    <div class="container-tracks">
        <div class="tracks-card" style="--color: #89ec5b">
    <div class="content-tracks">
      <div class="icon-tracks">
        <ion-icon name="game-controller-outline"></ion-icon>
      </div>
      <div class="text-tracks">
        <h3 class="tracks-type">Game Development</h3>
        <p class="tracks-desc">Create games that intrigue and bring alive a crowd with our brand new track.</p>
      </div>
    </div>
  </div>
  <div class="tracks-card" style="--color: #FFF323">
    <div class="content-tracks">
      <div class="icon-tracks">
        <ion-icon name="globe-outline"></ion-icon>
      </div>
      <div class="text-tracks">
        <h3 class="tracks-type">IOT</h3>
        <p class="tracks-desc">Connect several devices together and help them communicate efficiently to help the world in your own, unique way.</p>
      </div>
    </div>
  </div>
  <div class="tracks-card" style="--color: #FF5F1F">
    <div class="content-tracks">
      <div class="icon-tracks">
        <ion-icon name="logo-ionitron"></ion-icon>
      </div>
      <div class="text-tracks">
        <h3 class="tracks-type">AI & ML</h3>
        <p class="tracks-desc">Simulate human intelligence and show-off various applications that make AI&ML one of the most popular domains in computer science.</p>
      </div>
    </div>
  </div>
  <div class="tracks-card" style="--color: #00aee6">
    <div class="content-tracks">
      <div class="icon-tracks">
        <ion-icon name="logo-bitcoin"></ion-icon>
      </div>
      <div class="text-tracks">
        <h3 class="tracks-type">Blockchain</h3>
        <p class="tracks-desc">Use the blockchain to create innovative solutions by bringing together several technologies here.</p>
      </div>
    </div>
  </div>
  <div class="tracks-card" style="--color: #eb5ae5">
    <div class="content-tracks">
      <div class="icon-tracks">
        <ion-icon name="code-slash-outline"></ion-icon>
      </div>
      <div class="text-tracks">
        <h3 class="tracks-type">Open Innovation</h3>
        <p class="tracks-desc">Freedom to build solutions to your own problems and truly show the rest your creative prowess.</p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.container9{
    background-color: #080518;
    padding-bottom:10vh;
}
.container-tracks {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  padding:5vh;
}

.tracks-card {
  position: relative;
  width: 270px;
  height: 300px;
  background: #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:20px;
}

.tracks-card::before {
  content: '';
  position: absolute;
  inset: -10px 50px;
  border-top: 4px solid var(--color);
  border-bottom: 4px solid var(--color);
  transform: skewY(15deg);
  transition: 0.5s ease-in-out;
}
.tracks-header{
    margin-left:10%;
    margin-bottom:7vh;
    font-weight:900;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size:1.5rem;
}
.tracks-card:hover::before {
  inset: -10px 40px;
  transform: skewY(0deg);
}

.tracks-card::after {
  content: '';
  position: absolute;
  inset: 60px -10px;
  border-left: 4px solid var(--color);
  border-right: 4px solid var(--color);
  transform: skew(15deg);
  transition: 0.5s ease-in-out;
}

.tracks-card:hover::after {
  inset: 40px -10px;
  transform: skew(0deg);
}

.tracks-card .content-tracks {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: #2e2e2e;
  gap: 20px;
  overflow: hidden;
  z-index: 10;
}

.tracks-card .content-tracks .icon-tracks {
  color: var(--color);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background: #2e2e2e;
  box-shadow: 0 0 0 4px #2e2e2e,
    0 0 0 6px var(--color);
  transition: 0.5s ease-in-out;
}

.tracks-card:hover .content-tracks .icon-tracks {
  background: var(--color);
  color: #2e2e2e;
  box-shadow: 0 0 0 4px #2e2e2e,
    0 0 0 300px var(--color);
}

.tracks-card .content-tracks .text-tracks .tracks-type {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 0.5s ease-in-out;
  position: relative;
  top:2vh;
}

.tracks-card:hover .content-tracks .text-tracks .tracks-type {
  color: #2e2e2e;
}

.tracks-card .content-tracks .text-tracks .tracks-desc {
  color: #999;
  transition: 0.5s ease-in-out;
  font-size:0.8rem;
}

.tracks-card:hover .content-tracks .text-tracks .tracks-desc {
  color: #2e2e2e;
}



</style>