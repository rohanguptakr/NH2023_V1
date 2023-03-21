<template>
  <h1 class="prize">Prizes</h1>
  <div class="prize-container" id="prizes">
    <div class="wrapper-prizes first-place">
      <div class="card-prizes" onclick="this.classList.toggle('expanded')">
        <img :src="require('../assets/first.png')" />
        <div class="text1">
          <div class="text-content-prizes">
            <h1 class="title">₹ 40,000</h1>
          </div>
        </div>
        <svg
          class="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="var(--bgYellow)"
            stroke-width="5"
          />
        </svg>
      </div>
    </div>

    <div class="wrapper-prizes second-place">
      <div class="abc">
        <div class="card-prizes" onclick="this.classList.toggle('expanded')">
          <img :src="require('../assets/second.png')" />
          <div class="text2">
            <div class="text-content-prizes">
              <h1 class="title">₹ 20,000</h1>
            </div>
          </div>
          <svg
            class="chevron"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 35"
            width="30"
          >
            <path
              d="M5 30L50 5l45 25"
              fill="none"
              stroke="var(--bgYellow)"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
      <div class="def">
        <div class="card-prizes" onclick="this.classList.toggle('expanded')">
          <img :src="require('../assets/third.png')" />
          <div class="text2">
            <div class="text-content-prizes">
              <h1 class="title">₹ 15,000</h1>
            </div>
          </div>
          <svg
            class="chevron"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 35"
            width="30"
          >
            <path
              d="M5 30L50 5l45 25"
              fill="none"
              stroke="var(--bgYellow)"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
    </div>
    <h1 class="prize">Other prizes</h1>
    <div class="resize">
      <div>
        <div class="card-prizes" onclick="this.classList.toggle('expanded')">
          <img src="../assets/TrackPrize.png" />
          <h6 class="track">TRACK PRIZES</h6>
          <div class="text2">
            <div class="text-content-prizes">
              <h1 class="title">₹ 5,000</h1>
            </div>
          </div>
          <svg
            class="chevron"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 35"
            width="30"
          >
            <path
              d="M5 30L50 5l45 25"
              fill="none"
              stroke="var(--bgYellow)"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
      <div>
        <div class="card-prizes" onclick="this.classList.toggle('expanded')">
          <img class="goodies" src="../assets/Goodies.png" />
          <h6 class="track">GOODIES</h6>
          <div class="text2">
            <div class="text-content-prizes">
              <h6 class="track3">Tshirt , schwag and more...</h6>
            </div>
          </div>
          <svg
            class="chevron"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 35"
            width="30"
          >
            <path
              d="M5 30L50 5l45 25"
              fill="none"
              stroke="var(--bgYellow)"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <h1 class="prize">Sponsor prizes</h1>
  <div class="card-wraper">
    <div class="card" style="width: 20rem">
      <img
        class="card-img-top"
        src="../assets/Polygon_Logo-Colored(1).svg"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">
          Polygon is a protocol and a framework for building and connecting
          Ethereum-compatible blockchain networks.
          <ul class="card-text-inner">
            <li>Rs. 10,000 for the best project built on Ethereum</li>
          <li>Rs. 15,000 for the best project built on Ethereum +
          Polygon</li>
          <li>Eligible to apply for internship/full-time roles and receive seed
          funding of up to $5000 for the winners.</li>
          
          </ul>
         
        </p>
      </div>
    </div>

    <div class="card" style="width: 20rem">
      <img
        class="card-img-top"
        src="../assets/Solana-Colored.svg"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">
          Solana is the fastest blockchain in the world and the fastest-growing
          ecosystem in crypto, with thousands of projects spanning DeFi, NFTs,
          Web3 and more.
          <ul class="card-text-inner">
            <li>$100 for the best beginner project just starting out on Solana
         </li>
         <li> $250 for the best-detailed project, demonstrating higher-order code</li>
      
         <li>$500 for the best-advanced project close to ready for full-time
          deployment</li>
           </ul>
         
        </p>
      </div>
    </div>
    <div class="card" style="width: 20rem">
      <img
        class="card-img-top"
        src="../assets/Replit-light-background.svg"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">
          Replit is the best platform for quickly starting, sharing, and
          developing projects in any programming language, right from your
          browser. 
          <ul class="card-text-inner">
            <li>Rs. 5000, to the winning project (must be deployed on Replit)</li>
            <li>Replit Schwags to 5 submissions deployed on Replit</li>
            <li>Eligibility to apply for internship/full-time roles at
          Replt</li>
          </ul>
          
        </p>
      </div>
    </div>
    <div class="card" style="width: 20rem">
      <div class="imgresize">
        <img
          class="card-img-top"
          src="../assets/Filecoin.svg"
          alt="Card image cap"
        />
      </div>
      <div class="card-body">
      <p class="card-text">
          The company Protocol Labs develops open-source protocols, tools, and services that aim to improve the internet.
          Two of their most well-known products are IPFS and Filecoin.
          <ul class="card-text-inner">
            <li> IPFS is a peer-to-peer hypermedia protocol that makes the web more resilient, upgradeable, and open, with the goal of preserving and expanding humanity's knowledge</li>
            <li>Filecoin is an open-source cloud storage marketplace, protocol, and cryptocurrency.</li>
            <li>Rs. 20,000 for best use of IPFS and/or Filecoin</li>
          </ul>
          </p>
      </div>
    </div>
  </div>
 
  

  <div class="filler3" id="newTimeline"></div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Alegreya+Sans:900");
.filler3 {
  margin-bottom: 0%;
}
.card-img-top {
  aspect-ratio:8;
}
.goodies {
  width: 158px;
  margin-bottom: 10px;
}
.abc {
  margin-right: 250px;
  margin-top: -200px;
}
.def {
  margin-top: -170px;
}
.resize {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  padding: 10px;
  margin-left: 50px;
  box-shadow: 0px 0px 0px 2px;
  color: black;
  border-radius: 25px;
  max-width: 70vw;
  max-height : 70vh;
}
.card-text{
  font-size : 0.8rem;
  font-weight:bold;
}
.card-text-inner{
  font-size : 0.8rem;
}

.card-wraper {
  display: flex;
  flex-grow: 1;
  flex-wrap : wrap;
  gap : 20px;
  margin: 45px 150px;
  justify-content: center;
}

.track {
  color: white;
  font-weight: 600;
}
.track3 {
  color: #ecf27c;
  padding-top: 20px;
}
.card-prizes1 {
  margin-right: 10px;
}
.wrapper-prizes {
  width: 75vw;
  margin: 0 auto;
  align-items: center;
  display: flex;
  font-family: sans-serif;
  background-color: #fff;
}

.first-place {
  justify-content: center;
}

.second-place {
  justify-content: center;
}

.third-place {
  justify-content: center;
}
.prize {
  color: var(--bgBlue);
  margin-left: 10%;
  margin-bottom: 5vh;
  margin-top: 40px;
  font-weight: 900;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}




#second {
  margin-top: 50vh;
}
@media (max-width: 900px) {
  .abc{
    margin-right: 456px;
  }
  .def{
    margin-top: -270px;
    margin-left: 450px
  }
  
}
@media (max-width: 500px) {
  .wrapper-prizes {
    display: block;
  }
  .card-prizes {
    max-height: 350px;
    max-width: 220px;
  }
   .prize {
    padding-left: 8%;
    margin-bottom: 8vh;
  }
   .card {
    margin-top: 20px;
    max-width: 77vw;
    max-height:70vh;
}
  .abc {
    margin-right: -2px;
    margin-top: 0px;
  }
  .def {
    margin-top: 0px;
    margin-left: 7px;
  }
  .resize {
    display: block;
    margin: auto 0px;
  }
    .card-wraper {
    display: block;
    margin: auto;
}

  .card {
    margin-top: 20px;
    
  }
}

@media (max-width: 900px) {
  .wrapper-prizes {
    display: block;
  }
  .card-prizes {
    max-height: 350px;
    max-width: 220px;
  }
  .prize {
    padding-left: 8%;
    margin-bottom:8vh;
}

    

}
.card-prizes {
  background: var(--bgBlue);
  display: block;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  height: 250px;
  margin: 20px;
  padding: 20px 20px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.025);
  text-align: center;
  transition: height 1000ms;
  width: 210px;
}
img {
  padding-left: 10px;
}
@media (max-width: 500px) {
  .card-prizes {
    left: calc(50% - 20px);
    transform: translateX(-50%);
  }
}
@media (max-width: 900px) {
  .card-prizes {
    left: calc(50% - 20px);
    transform: translateX(-50%);
  }
}
.card-prizes.expanded {
  height: 300px;
  background: var(--bgBlue);
}
.label {
  margin-top: 30px;
  transform: translateY(10px);
  transition: transform 1000ms;
}
.card-prizes.expanded .label {
  transform: translateY(0);
}
.text1 {
  clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
  transition: clip-path 1000ms;
}
.card-prizes.expanded .text1 {
  clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
}
.text2 {
  clip-path: polygon(
    0% 100%,
    0% -80%,
    15% -70%,
    17.23% -53.59%,
    23% -40%,
    27.23% -28.94%,
    35% -20%,
    41.09% -13.59%,
    50% -10%,
    58.91% -13.23%,
    65% -20%,
    72.77% -28.23%,
    77% -40%,
    82.77% -54.65%,
    85% -70%,
    100% -80%,
    100% 100%
  );
  -webkit-clip-path: polygon(
    0% 100%,
    0% -80%,
    15% -70%,
    17.23% -53.59%,
    23% -40%,
    27.23% -28.94%,
    35% -20%,
    41.09% -13.59%,
    50% -10%,
    58.91% -13.23%,
    65% -20%,
    72.77% -28.23%,
    77% -40%,
    82.77% -54.65%,
    85% -70%,
    100% -80%,
    100% 100%
  );
  transition: clip-path 1000ms;
}
.card-prizes.expanded .text2 {
  clip-path: polygon(
    0% 100%,
    0% -90%,
    15% -80%,
    17.23% -63.59%,
    23% -50%,
    27.23% -38.94%,
    35% -30%,
    41.09% -23.59%,
    50% -20%,
    58.91% -23.23%,
    65% -30%,
    72.77% -38.23%,
    77% -50%,
    82.77% -64.65%,
    85% -80%,
    100% -90%,
    100% 100%
  );
  -webkit-clip-path: polygon(
    0% 100%,
    0% -90%,
    15% -80%,
    17.23% -63.59%,
    23% -50%,
    27.23% -38.94%,
    35% -30%,
    41.09% -23.59%,
    50% -20%,
    58.91% -23.23%,
    65% -30%,
    72.77% -38.23%,
    77% -50%,
    82.77% -64.65%,
    85% -80%,
    100% -90%,
    100% 100%
  );
}
.text-content-prizes {
  transform: translateY(-140px);
  transition: transform 1000ms;
  display: block;
  margin: auto;
}
.card-prizes.expanded .text-content-prizes {
  transform: translateY(-15px);
}
.chevron {
  position: absolute;
  bottom: 20px;
  left: calc(50% - 15px);
  transform-origin: 50%;
  transform: rotate(180deg);
  transition: transform 1000ms;
}
.card-prizes.expanded .chevron {
  transform: rotate(0deg);
}
.title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  margin-top: 40px;
  padding-top: 2vh;
  color: var(--bgYellow);
}
</style>