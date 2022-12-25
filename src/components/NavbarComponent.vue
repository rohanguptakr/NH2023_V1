<template>
  <div class="sticky">
    <div class="nav1">
      <div>
        <img src="../assets/XmasNavbarLogo.svg" height="68px" width="240px"/>
        <!-- <img
          src="data:image/png;base64,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"
          height="50px"
        /> -->
      </div>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tracks">Tracks</a></li>
        <li><a href="#prizes">Prizes</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#teams">Teams</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#footer">Contact Us</a></li>
      </ul>
    </div>
  </div>

  <div class="star-container" id="home">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

    <!-- <div class="hamburger-icon" id="icon" ref="icon" @click="handleClick">
      <div class="icon-1" id="a" ref="icon1"></div>
      <div class="icon-2" id="b" ref="icon2"></div>
      <div class="icon-3" id="c" ref="icon3"></div>
      <div class="clear"></div>
    </div>

    <nav id="nav" ref="nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tracks">Tracks</a></li>
        <li><a href="#prizes">Prizes</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#teams">Teams</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#footer">Contact Us</a></li>
      </ul>
    </nav> -->
    <div id="title">
      <span></span>
      <SvgComponent />
      <DevfolioComponent />
    </div>
  </div>
</template>

<script>
import DevfolioComponent from "./DevfolioComponent.vue";
import SvgComponent from "./SvgComponent.vue";
export default {
  name: "NavbarComponent",
  components: {
    DevfolioComponent,
    SvgComponent,
  },

  methods: {
    handleClick() {
      this.$refs.icon1.classList.toggle("a");
      this.$refs.icon2.classList.toggle("c");
      this.$refs.icon3.classList.toggle("b");
      this.$refs.nav.classList.toggle("show");
      this.$refs.blue.classList.toggle("blue");
    },
    handleScroll() {
      const element = document.getElementById("tracks");
      element.scrollIntoView();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}
.sticky {
  position: sticky;
  top: 0;
  z-index: 10000;
}

.menu-btn i {
  color: #ecf27c;
  font-size: 40px;
  cursor: pointer;
  display: none;
}

.nav1 {
  height: 70px;
  background: var(--bgBlue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px 0px 100px;
}
ul {
  display: flex;
  list-style: none;
}
ul li {
  margin: 0 5px;
}
ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;

  padding: 8px 10px;
  border-radius: 5px;
  transition: all 0.5s ease;
}
ul li a:hover {
  background: #fff;
  color: black;
}
#click {
  display: none;
}
@media (max-width: 940px) {
  .nav1 {
    height: 68px;
    padding: 0px 30px 0px 30px;
  }
  .menu-btn i {
    display: block;
  }

  #click:checked ~ .menu-btn i::before {
    content: "\f00d";
    font-size: 40px;
  }
  ul {
    position: fixed;
    background: #ecf27c;
    top: 65px;
    right: -100%;
    height: 100%;
    width: 40%;
    display: block;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 1000;
  }
  #click:checked ~ ul {
    right: 0;
  }
  ul li {
    margin-top: 30px;
  }
  ul li a {
    color: black;
    font-size: 20px;
  }
  ul li a:hover {
    background: none;
    color: blueviolet;
  }
}

.star-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  /* background: radial-gradient(ellipse at bottom, #1B2735 0%, #080518 100%); */
  background-color: var(--bgBlue);
  overflow: hidden;
}

.icon-1,
.icon-2,
.icon-3 {
  position: absolute;
  left: 20%;
  top: 50%;
  width: 32px;
  height: 3px;
  background-color: #080518;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
}

.icon-1 {
  transform: translateY(-8px);
  -webkit-animation-delay: 100ms;
  animation-delay: 100ms;
}

.icon-3 {
  transform: translateY(8px);
  -webkit-animation-delay: 250ms;
  animation-delay: 250ms;
}

.hamburger-icon {
  position: fixed;
  height: 50px;
  width: 50px;
  top: 5%;
  left: 3%;
  z-index: 1000;
  cursor: pointer;
  border-radius: 50%;
  border-color: white;
  transition: all 0.2s ease-in-out;
  background: #ecf27c;
  opacity: 0.6;
}
.hamburger-icon:hover {
  transform: scale(1.2);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

.icon-1.a {
  transform: rotate(40deg);
}

.icon-3.b {
  transform: rotate(-40deg);
}

.icon-2.c {
  opacity: 0;
}

.clear {
  clear: both;
}
nav {
  background: #ecf27c;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  z-index: -1;
  opacity: 0;
  transition: all 600ms cubic-bezier(0.62, 0.04, 0.3, 1.56);
  transition-delay: 100ms;
  box-shadow: #080518;
}
nav ul {
  margin: 0;
  position: relative;
  top: 30%;
  left: 5%;
}

nav ul li {
  list-style: none;
  font-size: 18px;
  color: #080518;
  line-height: 2.2;
  text-transform: uppercase;
  letter-spacing: 1.7px;
  font-weight: bolder;
  cursor: pointer;
}

nav.show {
  width: 30%;
  opacity: 1;
  z-index: 100;
}
.cls-1,
.cls-2 {
  fill: #ecf27c;
  height: 400px;
  width: 400px;
}
.cls-2 {
  fill-rule: evenodd;
}
.content {
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100vw;
  transform: translate(-50%, -50%);
  text-align: center;
}
.content svg {
  position: relative;
  font-size: 70px;
  -webkit-animation: shotup 1000ms ease-in-out;
  animation: shotup 1000ms ease-in-out;
  -webkit-animation-delay: 300ms;
  animation-delay: 300ms;
}
.logo {
  height: 720px;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 274px 1855px #fff, 963px 645px #fff, 486px 1809px #fff,
    1097px 997px #fff, 1889px 1229px #fff, 1923px 1901px #fff, 483px 1595px #fff,
    860px 1573px #fff, 1059px 308px #fff, 1177px 636px #fff, 1258px 793px #fff,
    1312px 1413px #fff, 103px 252px #fff, 483px 1582px #fff, 650px 438px #fff,
    1224px 429px #fff, 697px 994px #fff, 1768px 690px #fff, 210px 311px #fff,
    1971px 1679px #fff, 1336px 917px #fff, 458px 308px #fff, 524px 358px #fff,
    466px 588px #fff, 45px 185px #fff, 465px 1589px #fff, 1840px 1890px #fff,
    787px 616px #fff, 1649px 1727px #fff, 1196px 286px #fff, 1716px 241px #fff,
    650px 592px #fff, 1852px 1772px #fff, 1615px 448px #fff, 1833px 391px #fff,
    796px 1427px #fff, 1375px 916px #fff, 1344px 32px #fff, 1090px 1911px #fff,
    915px 1267px #fff, 771px 1182px #fff, 1012px 1406px #fff, 262px 1140px #fff,
    1927px 438px #fff, 132px 180px #fff, 1249px 1821px #fff, 1665px 758px #fff,
    285px 837px #fff, 849px 786px #fff, 398px 1337px #fff, 1428px 1951px #fff,
    1735px 1191px #fff, 1520px 315px #fff, 1875px 1987px #fff, 1602px 931px #fff,
    1546px 1795px #fff, 471px 61px #fff, 1844px 1216px #fff, 759px 915px #fff,
    1932px 563px #fff, 945px 1516px #fff, 1321px 452px #fff, 1412px 1077px #fff,
    1869px 1518px #fff, 54px 1259px #fff, 919px 1879px #fff, 994px 1526px #fff,
    1420px 1047px #fff, 1123px 425px #fff, 1401px 1434px #fff, 1989px 678px #fff,
    1199px 289px #fff, 1478px 1502px #fff, 1022px 553px #fff, 1024px 1959px #fff,
    524px 191px #fff, 23px 774px #fff, 486px 1604px #fff, 1517px 376px #fff,
    1230px 1588px #fff, 636px 173px #fff, 844px 1525px #fff, 1275px 985px #fff,
    672px 987px #fff, 219px 1278px #fff, 43px 1579px #fff, 1726px 84px #fff,
    1733px 1660px #fff, 703px 1595px #fff, 666px 1975px #fff, 259px 170px #fff,
    1647px 188px #fff, 854px 902px #fff, 1186px 1133px #fff, 206px 1969px #fff,
    1887px 868px #fff, 72px 35px #fff, 217px 1150px #fff, 727px 766px #fff,
    1644px 1951px #fff, 1500px 398px #fff, 1145px 1291px #fff, 298px 1700px #fff,
    1585px 1512px #fff, 714px 1812px #fff, 790px 1381px #fff, 1620px 1402px #fff,
    1071px 1693px #fff, 999px 1802px #fff, 1850px 605px #fff, 961px 1844px #fff,
    1662px 1227px #fff, 887px 151px #fff, 1441px 208px #fff, 1566px 1364px #fff,
    689px 1774px #fff, 1917px 272px #fff, 1333px 1723px #fff, 275px 242px #fff,
    684px 1682px #fff, 593px 12px #fff, 1505px 326px #fff, 493px 988px #fff,
    551px 761px #fff, 1112px 1355px #fff, 1369px 481px #fff, 1646px 1526px #fff,
    663px 930px #fff, 619px 1526px #fff, 897px 796px #fff, 457px 607px #fff,
    750px 1075px #fff, 1245px 587px #fff, 888px 185px #fff, 984px 905px #fff,
    169px 378px #fff, 689px 1410px #fff, 124px 82px #fff, 1574px 678px #fff,
    82px 1383px #fff, 770px 1395px #fff, 459px 579px #fff, 1977px 464px #fff,
    52px 623px #fff, 1216px 1428px #fff, 254px 879px #fff, 1593px 1780px #fff,
    281px 1148px #fff, 302px 1852px #fff, 1412px 1066px #fff, 1573px 1375px #fff,
    1095px 1142px #fff, 854px 1224px #fff, 1344px 630px #fff, 1356px 1684px #fff,
    478px 1965px #fff, 1689px 535px #fff, 597px 631px #fff, 953px 256px #fff,
    854px 1252px #fff, 102px 1064px #fff, 490px 1912px #fff, 1725px 1155px #fff,
    1225px 245px #fff, 1911px 1146px #fff, 1508px 833px #fff, 1074px 903px #fff,
    1233px 1295px #fff, 478px 923px #fff, 1486px 1639px #fff, 1832px 1157px #fff,
    644px 1820px #fff, 159px 154px #fff, 1842px 1818px #fff, 1883px 1286px #fff,
    782px 1598px #fff, 1516px 1044px #fff, 593px 511px #fff, 1400px 574px #fff,
    1685px 907px #fff, 1114px 727px #fff, 1784px 386px #fff, 1418px 847px #fff,
    1796px 1587px #fff, 245px 256px #fff, 1070px 1788px #fff, 1134px 377px #fff,
    702px 51px #fff, 1980px 1396px #fff, 1119px 363px #fff, 1740px 769px #fff,
    648px 616px #fff, 927px 956px #fff, 1186px 1577px #fff, 1356px 1328px #fff,
    885px 1106px #fff, 686px 521px #fff, 538px 1561px #fff, 1876px 297px #fff,
    745px 1571px #fff, 740px 1514px #fff, 190px 1489px #fff, 1516px 1912px #fff,
    1114px 200px #fff, 46px 184px #fff, 545px 477px #fff, 277px 485px #fff,
    1624px 704px #fff, 1389px 1666px #fff, 1721px 1603px #fff, 42px 1763px #fff,
    125px 63px #fff, 1716px 650px #fff, 1069px 828px #fff, 693px 595px #fff,
    148px 1010px #fff, 636px 373px #fff, 424px 1276px #fff, 1530px 269px #fff,
    259px 603px #fff, 1905px 625px #fff, 273px 372px #fff, 1387px 1465px #fff,
    295px 250px #fff, 664px 1734px #fff, 1805px 1739px #fff, 302px 1166px #fff,
    254px 1262px #fff, 1889px 1929px #fff, 837px 1828px #fff, 1100px 1986px #fff,
    76px 510px #fff, 608px 544px #fff, 1522px 1768px #fff, 409px 1452px #fff,
    440px 949px #fff, 236px 1831px #fff, 817px 390px #fff, 268px 345px #fff,
    1034px 1253px #fff, 1741px 1203px #fff, 993px 1153px #fff, 329px 1668px #fff,
    1262px 591px #fff, 417px 1216px #fff, 1857px 1601px #fff, 635px 759px #fff,
    1086px 611px #fff, 1686px 778px #fff, 149px 1038px #fff, 2000px 1704px #fff,
    212px 696px #fff, 1485px 1898px #fff, 1852px 1853px #fff, 338px 775px #fff,
    1059px 229px #fff, 181px 1309px #fff, 1144px 1157px #fff, 1764px 1073px #fff,
    1518px 1130px #fff, 884px 901px #fff, 1553px 606px #fff, 717px 1748px #fff,
    1937px 1820px #fff, 906px 469px #fff, 426px 1671px #fff, 875px 71px #fff,
    1176px 1299px #fff, 941px 1557px #fff, 752px 1798px #fff, 1977px 656px #fff,
    1735px 540px #fff, 1583px 1132px #fff, 1834px 379px #fff, 1897px 455px #fff,
    280px 1754px #fff, 707px 552px #fff, 833px 76px #fff, 861px 1445px #fff,
    218px 775px #fff, 373px 393px #fff, 1719px 155px #fff, 895px 1215px #fff,
    228px 1608px #fff, 46px 58px #fff, 326px 1776px #fff, 94px 582px #fff,
    1246px 511px #fff, 1607px 1839px #fff, 1298px 663px #fff, 967px 199px #fff,
    1093px 1825px #fff, 1454px 1786px #fff, 1921px 1581px #fff,
    776px 1327px #fff, 1388px 1020px #fff, 1492px 942px #fff, 239px 428px #fff,
    923px 1284px #fff, 1204px 978px #fff, 891px 43px #fff, 197px 776px #fff,
    1001px 1133px #fff, 1986px 1723px #fff, 446px 1021px #fff, 970px 1581px #fff,
    1624px 925px #fff, 794px 149px #fff, 1377px 1583px #fff, 483px 1209px #fff,
    844px 1720px #fff, 990px 77px #fff, 1441px 168px #fff, 898px 940px #fff,
    1614px 1308px #fff, 1140px 995px #fff, 483px 1609px #fff, 1718px 1987px #fff,
    1440px 1891px #fff, 1137px 1312px #fff, 1427px 1613px #fff,
    326px 1093px #fff, 57px 1314px #fff, 977px 44px #fff, 1458px 989px #fff,
    1642px 1712px #fff, 1030px 972px #fff, 163px 569px #fff, 965px 91px #fff,
    467px 1042px #fff, 1652px 671px #fff, 1187px 1265px #fff, 428px 1056px #fff,
    78px 1162px #fff, 1759px 439px #fff, 463px 177px #fff, 283px 1883px #fff,
    1040px 500px #fff, 1039px 346px #fff, 1129px 546px #fff, 1391px 152px #fff,
    1552px 1874px #fff, 111px 281px #fff, 1740px 576px #fff, 81px 1986px #fff,
    417px 624px #fff, 1855px 1925px #fff, 1348px 12px #fff, 1945px 46px #fff,
    1641px 579px #fff, 966px 868px #fff, 503px 172px #fff, 46px 1966px #fff,
    1719px 130px #fff, 1792px 474px #fff, 1854px 256px #fff, 1938px 807px #fff,
    1110px 1345px #fff, 1676px 1355px #fff, 301px 1809px #fff, 835px 1768px #fff,
    924px 711px #fff, 1507px 1661px #fff, 36px 1381px #fff, 665px 1753px #fff,
    1687px 483px #fff, 292px 1337px #fff, 956px 298px #fff, 1683px 781px #fff,
    1102px 223px #fff, 140px 349px #fff, 283px 105px #fff, 592px 1677px #fff,
    784px 1968px #fff, 296px 197px #fff, 1811px 244px #fff, 1517px 287px #fff,
    738px 1282px #fff, 931px 1598px #fff, 1300px 614px #fff, 1020px 1464px #fff,
    1582px 1480px #fff, 364px 1955px #fff, 184px 1776px #fff, 533px 1172px #fff,
    464px 837px #fff, 1513px 350px #fff, 625px 611px #fff, 1393px 971px #fff,
    1994px 1256px #fff, 1917px 752px #fff, 154px 1478px #fff, 424px 1140px #fff,
    448px 102px #fff, 397px 512px #fff, 1689px 1039px #fff, 336px 1885px #fff,
    1159px 1147px #fff, 1869px 1338px #fff, 1306px 480px #fff, 1017px 891px #fff,
    302px 938px #fff, 2px 411px #fff, 923px 1285px #fff, 744px 114px #fff,
    1329px 1206px #fff, 1023px 1993px #fff, 3px 1581px #fff, 729px 627px #fff,
    820px 816px #fff, 253px 484px #fff, 202px 1046px #fff, 1740px 308px #fff,
    841px 727px #fff, 1765px 1962px #fff, 11px 460px #fff, 1799px 516px #fff,
    1657px 157px #fff, 867px 246px #fff, 82px 1704px #fff, 1106px 1035px #fff,
    388px 776px #fff, 1962px 617px #fff, 1969px 984px #fff, 793px 1025px #fff,
    529px 84px #fff, 126px 1975px #fff, 343px 852px #fff, 1476px 1105px #fff,
    1674px 1032px #fff, 33px 986px #fff, 301px 1350px #fff, 1335px 1093px #fff,
    385px 1833px #fff, 1461px 957px #fff, 813px 1708px #fff, 660px 580px #fff,
    115px 1567px #fff, 702px 1481px #fff, 1935px 186px #fff, 303px 966px #fff,
    1425px 1426px #fff, 1505px 1902px #fff, 1577px 1597px #fff,
    1797px 799px #fff, 1287px 649px #fff, 12px 482px #fff, 1358px 1413px #fff,
    1185px 1100px #fff, 1330px 1310px #fff, 1161px 123px #fff,
    1719px 1499px #fff, 1439px 155px #fff, 709px 712px #fff, 876px 912px #fff,
    699px 668px #fff, 892px 780px #fff, 425px 1056px #fff, 1579px 1371px #fff,
    186px 486px #fff, 1898px 1550px #fff, 623px 628px #fff, 1979px 1816px #fff,
    74px 1620px #fff, 1167px 447px #fff, 1347px 609px #fff, 1314px 1632px #fff,
    1596px 1648px #fff, 656px 1928px #fff, 1153px 1983px #fff, 773px 1654px #fff,
    1834px 379px #fff, 301px 222px #fff, 1895px 1481px #fff, 1974px 974px #fff,
    964px 528px #fff, 723px 848px #fff, 1797px 1783px #fff, 1442px 1737px #fff,
    1996px 480px #fff, 542px 1425px #fff, 1253px 1837px #fff, 792px 377px #fff,
    1754px 679px #fff, 1454px 950px #fff, 480px 63px #fff, 186px 938px #fff,
    463px 27px #fff, 1593px 1728px #fff, 1413px 969px #fff, 1540px 384px #fff,
    1614px 413px #fff, 91px 582px #fff, 1542px 776px #fff, 1467px 448px #fff,
    1141px 1318px #fff, 1042px 1366px #fff, 318px 471px #fff, 672px 454px #fff,
    713px 642px #fff, 1035px 1562px #fff, 803px 1686px #fff, 1042px 1978px #fff,
    951px 1205px #fff, 1709px 1791px #fff, 1982px 771px #fff, 124px 71px #fff,
    934px 1490px #fff, 752px 1456px #fff, 1234px 1587px #fff, 1972px 1783px #fff,
    899px 641px #fff, 1124px 1833px #fff, 540px 127px #fff, 827px 1331px #fff,
    1661px 313px #fff, 1912px 1702px #fff, 1519px 1953px #fff,
    1309px 1904px #fff, 1570px 1014px #fff, 435px 83px #fff, 1738px 1832px #fff,
    287px 1361px #fff, 112px 451px #fff, 547px 1986px #fff, 1251px 1503px #fff,
    538px 935px #fff, 1973px 137px #fff, 1129px 1994px #fff, 1718px 1242px #fff,
    1075px 1856px #fff, 175px 1747px #fff, 327px 1259px #fff, 284px 37px #fff,
    912px 1767px #fff, 1913px 1659px #fff, 660px 1025px #fff, 681px 1277px #fff,
    1242px 902px #fff, 1689px 1179px #fff, 1503px 758px #fff, 794px 624px #fff,
    1988px 1330px #fff, 1430px 183px #fff, 462px 550px #fff, 830px 444px #fff,
    1757px 808px #fff, 1452px 1808px #fff, 1607px 1024px #fff, 1301px 419px #fff,
    1638px 163px #fff, 208px 703px #fff, 788px 1976px #fff, 1516px 1076px #fff,
    987px 1999px #fff, 367px 187px #fff, 995px 1717px #fff, 44px 906px #fff,
    53px 240px #fff, 442px 1921px #fff, 1418px 1776px #fff, 840px 1757px #fff,
    544px 779px #fff, 258px 1497px #fff, 336px 1061px #fff, 1793px 789px #fff,
    344px 640px #fff, 347px 207px #fff, 629px 1011px #fff, 365px 601px #fff,
    1120px 1268px #fff, 979px 619px #fff, 281px 698px #fff, 690px 371px #fff,
    855px 413px #fff, 1158px 555px #fff, 702px 518px #fff, 1631px 1652px #fff,
    178px 1790px #fff, 810px 1998px #fff, 1724px 1080px #fff, 1164px 1124px #fff,
    1769px 1422px #fff, 1242px 1786px #fff, 1100px 1522px #fff,
    436px 1742px #fff, 1018px 911px #fff, 1242px 613px #fff, 160px 57px #fff,
    1331px 237px #fff, 1024px 306px #fff, 284px 887px #fff, 510px 626px #fff,
    1993px 1252px #fff, 1990px 547px #fff, 747px 490px #fff, 946px 1142px #fff,
    1898px 361px #fff, 1564px 472px #fff, 127px 980px #fff, 1937px 1151px #fff,
    620px 130px #fff, 1449px 1207px #fff, 992px 1720px #fff, 1628px 1656px #fff,
    1940px 1300px #fff, 1501px 1326px #fff, 1853px 925px #fff, 79px 82px #fff,
    1856px 1476px #fff, 487px 1674px #fff, 1522px 163px #fff, 1490px 998px #fff,
    769px 1554px #fff, 932px 189px #fff, 1409px 1712px #fff, 636px 1408px #fff,
    786px 1293px #fff, 169px 1191px #fff, 983px 1782px #fff, 435px 453px #fff,
    726px 1832px #fff, 1998px 1304px #fff, 1669px 1838px #fff,
    1644px 1042px #fff, 174px 1280px #fff, 282px 945px #fff, 1906px 1605px #fff,
    648px 516px #fff, 1456px 1913px #fff, 1636px 1499px #fff, 493px 1832px #fff,
    1146px 1260px #fff, 873px 64px #fff, 1485px 1873px #fff, 1187px 543px #fff,
    1131px 534px #fff, 909px 1827px #fff, 1969px 1908px #fff, 1178px 455px #fff,
    1894px 1137px #fff, 235px 1819px #fff, 1298px 50px #fff, 1890px 986px #fff,
    1788px 662px #fff, 172px 364px #fff, 711px 52px #fff, 45px 1938px #fff,
    1038px 45px #fff, 1762px 832px #fff, 46px 1055px #fff, 205px 624px #fff,
    616px 1362px #fff, 68px 1997px #fff, 70px 667px #fff, 297px 281px #fff,
    726px 1250px #fff, 9px 1842px #fff, 672px 1451px #fff, 1627px 897px #fff,
    1945px 223px #fff, 862px 754px #fff, 1183px 1444px #fff, 1892px 421px #fff,
    630px 444px #fff, 543px 1800px #fff, 1335px 1577px #fff, 357px 1442px #fff,
    971px 341px #fff, 468px 675px #fff, 530px 449px #fff, 1449px 1865px #fff,
    493px 747px #fff, 46px 619px #fff, 564px 1078px #fff, 330px 1002px #fff,
    269px 1934px #fff, 1960px 1149px #fff, 1540px 277px #fff, 712px 1285px #fff,
    645px 280px #fff, 275px 329px #fff, 735px 219px #fff, 1413px 1446px #fff,
    1301px 1752px #fff, 1251px 276px #fff, 1069px 348px #fff, 1771px 1326px #fff,
    260px 746px #fff, 695px 1226px #fff, 1009px 1635px #fff, 1032px 1132px #fff,
    715px 652px #fff, 925px 643px #fff, 1851px 253px #fff, 96px 908px #fff,
    827px 412px #fff, 979px 1161px #fff, 530px 711px #fff, 862px 1998px #fff;
  -webkit-animation: animStar 50s linear infinite;
  animation: animStar 50s linear infinite;
}
/* #stars:after {
content: " ";
position: absolute;
top: 2000px;
width: 1px;
height: 1px;
background: transparent;
box-shadow: 274px 1855px #FFF , 963px 645px #FFF , 486px 1809px #FFF , 1097px 997px #FFF , 1889px 1229px #FFF , 1923px 1901px #FFF , 483px 1595px #FFF , 860px 1573px #FFF , 1059px 308px #FFF , 1177px 636px #FFF , 1258px 793px #FFF , 1312px 1413px #FFF , 103px 252px #FFF , 483px 1582px #FFF , 650px 438px #FFF , 1224px 429px #FFF , 697px 994px #FFF , 1768px 690px #FFF , 210px 311px #FFF , 1971px 1679px #FFF , 1336px 917px #FFF , 458px 308px #FFF , 524px 358px #FFF , 466px 588px #FFF , 45px 185px #FFF , 465px 1589px #FFF , 1840px 1890px #FFF , 787px 616px #FFF , 1649px 1727px #FFF , 1196px 286px #FFF , 1716px 241px #FFF , 650px 592px #FFF , 1852px 1772px #FFF , 1615px 448px #FFF , 1833px 391px #FFF , 796px 1427px #FFF , 1375px 916px #FFF , 1344px 32px #FFF , 1090px 1911px #FFF , 915px 1267px #FFF , 771px 1182px #FFF , 1012px 1406px #FFF , 262px 1140px #FFF , 1927px 438px #FFF , 132px 180px #FFF , 1249px 1821px #FFF , 1665px 758px #FFF , 285px 837px #FFF , 849px 786px #FFF , 398px 1337px #FFF , 1428px 1951px #FFF , 1735px 1191px #FFF , 1520px 315px #FFF , 1875px 1987px #FFF , 1602px 931px #FFF , 1546px 1795px #FFF , 471px 61px #FFF , 1844px 1216px #FFF , 759px 915px #FFF , 1932px 563px #FFF , 945px 1516px #FFF , 1321px 452px #FFF , 1412px 1077px #FFF , 1869px 1518px #FFF , 54px 1259px #FFF , 919px 1879px #FFF , 994px 1526px #FFF , 1420px 1047px #FFF , 1123px 425px #FFF , 1401px 1434px #FFF , 1989px 678px #FFF , 1199px 289px #FFF , 1478px 1502px #FFF , 1022px 553px #FFF , 1024px 1959px #FFF , 524px 191px #FFF , 23px 774px #FFF , 486px 1604px #FFF , 1517px 376px #FFF , 1230px 1588px #FFF , 636px 173px #FFF , 844px 1525px #FFF , 1275px 985px #FFF , 672px 987px #FFF , 219px 1278px #FFF , 43px 1579px #FFF , 1726px 84px #FFF , 1733px 1660px #FFF , 703px 1595px #FFF , 666px 1975px #FFF , 259px 170px #FFF , 1647px 188px #FFF , 854px 902px #FFF , 1186px 1133px #FFF , 206px 1969px #FFF , 1887px 868px #FFF , 72px 35px #FFF , 217px 1150px #FFF , 727px 766px #FFF , 1644px 1951px #FFF , 1500px 398px #FFF , 1145px 1291px #FFF , 298px 1700px #FFF , 1585px 1512px #FFF , 714px 1812px #FFF , 790px 1381px #FFF , 1620px 1402px #FFF , 1071px 1693px #FFF , 999px 1802px #FFF , 1850px 605px #FFF , 961px 1844px #FFF , 1662px 1227px #FFF , 887px 151px #FFF , 1441px 208px #FFF , 1566px 1364px #FFF , 689px 1774px #FFF , 1917px 272px #FFF , 1333px 1723px #FFF , 275px 242px #FFF , 684px 1682px #FFF , 593px 12px #FFF , 1505px 326px #FFF , 493px 988px #FFF , 551px 761px #FFF , 1112px 1355px #FFF , 1369px 481px #FFF , 1646px 1526px #FFF , 663px 930px #FFF , 619px 1526px #FFF , 897px 796px #FFF , 457px 607px #FFF , 750px 1075px #FFF , 1245px 587px #FFF , 888px 185px #FFF , 984px 905px #FFF , 169px 378px #FFF , 689px 1410px #FFF , 124px 82px #FFF , 1574px 678px #FFF , 82px 1383px #FFF , 770px 1395px #FFF , 459px 579px #FFF , 1977px 464px #FFF , 52px 623px #FFF , 1216px 1428px #FFF , 254px 879px #FFF , 1593px 1780px #FFF , 281px 1148px #FFF , 302px 1852px #FFF , 1412px 1066px #FFF , 1573px 1375px #FFF , 1095px 1142px #FFF , 854px 1224px #FFF , 1344px 630px #FFF , 1356px 1684px #FFF , 478px 1965px #FFF , 1689px 535px #FFF , 597px 631px #FFF , 953px 256px #FFF , 854px 1252px #FFF , 102px 1064px #FFF , 490px 1912px #FFF , 1725px 1155px #FFF , 1225px 245px #FFF , 1911px 1146px #FFF , 1508px 833px #FFF , 1074px 903px #FFF , 1233px 1295px #FFF , 478px 923px #FFF , 1486px 1639px #FFF , 1832px 1157px #FFF , 644px 1820px #FFF , 159px 154px #FFF , 1842px 1818px #FFF , 1883px 1286px #FFF , 782px 1598px #FFF , 1516px 1044px #FFF , 593px 511px #FFF , 1400px 574px #FFF , 1685px 907px #FFF , 1114px 727px #FFF , 1784px 386px #FFF , 1418px 847px #FFF , 1796px 1587px #FFF , 245px 256px #FFF , 1070px 1788px #FFF , 1134px 377px #FFF , 702px 51px #FFF , 1980px 1396px #FFF , 1119px 363px #FFF , 1740px 769px #FFF , 648px 616px #FFF , 927px 956px #FFF , 1186px 1577px #FFF , 1356px 1328px #FFF , 885px 1106px #FFF , 686px 521px #FFF , 538px 1561px #FFF , 1876px 297px #FFF , 745px 1571px #FFF , 740px 1514px #FFF , 190px 1489px #FFF , 1516px 1912px #FFF , 1114px 200px #FFF , 46px 184px #FFF , 545px 477px #FFF , 277px 485px #FFF , 1624px 704px #FFF , 1389px 1666px #FFF , 1721px 1603px #FFF , 42px 1763px #FFF , 125px 63px #FFF , 1716px 650px #FFF , 1069px 828px #FFF , 693px 595px #FFF , 148px 1010px #FFF , 636px 373px #FFF , 424px 1276px #FFF , 1530px 269px #FFF , 259px 603px #FFF , 1905px 625px #FFF , 273px 372px #FFF , 1387px 1465px #FFF , 295px 250px #FFF , 664px 1734px #FFF , 1805px 1739px #FFF , 302px 1166px #FFF , 254px 1262px #FFF , 1889px 1929px #FFF , 837px 1828px #FFF , 1100px 1986px #FFF , 76px 510px #FFF , 608px 544px #FFF , 1522px 1768px #FFF , 409px 1452px #FFF , 440px 949px #FFF , 236px 1831px #FFF , 817px 390px #FFF , 268px 345px #FFF , 1034px 1253px #FFF , 1741px 1203px #FFF , 993px 1153px #FFF , 329px 1668px #FFF , 1262px 591px #FFF , 417px 1216px #FFF , 1857px 1601px #FFF , 635px 759px #FFF , 1086px 611px #FFF , 1686px 778px #FFF , 149px 1038px #FFF , 2000px 1704px #FFF , 212px 696px #FFF , 1485px 1898px #FFF , 1852px 1853px #FFF , 338px 775px #FFF , 1059px 229px #FFF , 181px 1309px #FFF , 1144px 1157px #FFF , 1764px 1073px #FFF , 1518px 1130px #FFF , 884px 901px #FFF , 1553px 606px #FFF , 717px 1748px #FFF , 1937px 1820px #FFF , 906px 469px #FFF , 426px 1671px #FFF , 875px 71px #FFF , 1176px 1299px #FFF , 941px 1557px #FFF , 752px 1798px #FFF , 1977px 656px #FFF , 1735px 540px #FFF , 1583px 1132px #FFF , 1834px 379px #FFF , 1897px 455px #FFF , 280px 1754px #FFF , 707px 552px #FFF , 833px 76px #FFF , 861px 1445px #FFF , 218px 775px #FFF , 373px 393px #FFF , 1719px 155px #FFF , 895px 1215px #FFF , 228px 1608px #FFF , 46px 58px #FFF , 326px 1776px #FFF , 94px 582px #FFF , 1246px 511px #FFF , 1607px 1839px #FFF , 1298px 663px #FFF , 967px 199px #FFF , 1093px 1825px #FFF , 1454px 1786px #FFF , 1921px 1581px #FFF , 776px 1327px #FFF , 1388px 1020px #FFF , 1492px 942px #FFF , 239px 428px #FFF , 923px 1284px #FFF , 1204px 978px #FFF , 891px 43px #FFF , 197px 776px #FFF , 1001px 1133px #FFF , 1986px 1723px #FFF , 446px 1021px #FFF , 970px 1581px #FFF , 1624px 925px #FFF , 794px 149px #FFF , 1377px 1583px #FFF , 483px 1209px #FFF , 844px 1720px #FFF , 990px 77px #FFF , 1441px 168px #FFF , 898px 940px #FFF , 1614px 1308px #FFF , 1140px 995px #FFF , 483px 1609px #FFF , 1718px 1987px #FFF , 1440px 1891px #FFF , 1137px 1312px #FFF , 1427px 1613px #FFF , 326px 1093px #FFF , 57px 1314px #FFF , 977px 44px #FFF , 1458px 989px #FFF , 1642px 1712px #FFF , 1030px 972px #FFF , 163px 569px #FFF , 965px 91px #FFF , 467px 1042px #FFF , 1652px 671px #FFF , 1187px 1265px #FFF , 428px 1056px #FFF , 78px 1162px #FFF , 1759px 439px #FFF , 463px 177px #FFF , 283px 1883px #FFF , 1040px 500px #FFF , 1039px 346px #FFF , 1129px 546px #FFF , 1391px 152px #FFF , 1552px 1874px #FFF , 111px 281px #FFF , 1740px 576px #FFF , 81px 1986px #FFF , 417px 624px #FFF , 1855px 1925px #FFF , 1348px 12px #FFF , 1945px 46px #FFF , 1641px 579px #FFF , 966px 868px #FFF , 503px 172px #FFF , 46px 1966px #FFF , 1719px 130px #FFF , 1792px 474px #FFF , 1854px 256px #FFF , 1938px 807px #FFF , 1110px 1345px #FFF , 1676px 1355px #FFF , 301px 1809px #FFF , 835px 1768px #FFF , 924px 711px #FFF , 1507px 1661px #FFF , 36px 1381px #FFF , 665px 1753px #FFF , 1687px 483px #FFF , 292px 1337px #FFF , 956px 298px #FFF , 1683px 781px #FFF , 1102px 223px #FFF , 140px 349px #FFF , 283px 105px #FFF , 592px 1677px #FFF , 784px 1968px #FFF , 296px 197px #FFF , 1811px 244px #FFF , 1517px 287px #FFF , 738px 1282px #FFF , 931px 1598px #FFF , 1300px 614px #FFF , 1020px 1464px #FFF , 1582px 1480px #FFF , 364px 1955px #FFF , 184px 1776px #FFF , 533px 1172px #FFF , 464px 837px #FFF , 1513px 350px #FFF , 625px 611px #FFF , 1393px 971px #FFF , 1994px 1256px #FFF , 1917px 752px #FFF , 154px 1478px #FFF , 424px 1140px #FFF , 448px 102px #FFF , 397px 512px #FFF , 1689px 1039px #FFF , 336px 1885px #FFF , 1159px 1147px #FFF , 1869px 1338px #FFF , 1306px 480px #FFF , 1017px 891px #FFF , 302px 938px #FFF , 2px 411px #FFF , 923px 1285px #FFF , 744px 114px #FFF , 1329px 1206px #FFF , 1023px 1993px #FFF , 3px 1581px #FFF , 729px 627px #FFF , 820px 816px #FFF , 253px 484px #FFF , 202px 1046px #FFF , 1740px 308px #FFF , 841px 727px #FFF , 1765px 1962px #FFF , 11px 460px #FFF , 1799px 516px #FFF , 1657px 157px #FFF , 867px 246px #FFF , 82px 1704px #FFF , 1106px 1035px #FFF , 388px 776px #FFF , 1962px 617px #FFF , 1969px 984px #FFF , 793px 1025px #FFF , 529px 84px #FFF , 126px 1975px #FFF , 343px 852px #FFF , 1476px 1105px #FFF , 1674px 1032px #FFF , 33px 986px #FFF , 301px 1350px #FFF , 1335px 1093px #FFF , 385px 1833px #FFF , 1461px 957px #FFF , 813px 1708px #FFF , 660px 580px #FFF , 115px 1567px #FFF , 702px 1481px #FFF , 1935px 186px #FFF , 303px 966px #FFF , 1425px 1426px #FFF , 1505px 1902px #FFF , 1577px 1597px #FFF , 1797px 799px #FFF , 1287px 649px #FFF , 12px 482px #FFF , 1358px 1413px #FFF , 1185px 1100px #FFF , 1330px 1310px #FFF , 1161px 123px #FFF , 1719px 1499px #FFF , 1439px 155px #FFF , 709px 712px #FFF , 876px 912px #FFF , 699px 668px #FFF , 892px 780px #FFF , 425px 1056px #FFF , 1579px 1371px #FFF , 186px 486px #FFF , 1898px 1550px #FFF , 623px 628px #FFF , 1979px 1816px #FFF , 74px 1620px #FFF , 1167px 447px #FFF , 1347px 609px #FFF , 1314px 1632px #FFF , 1596px 1648px #FFF , 656px 1928px #FFF , 1153px 1983px #FFF , 773px 1654px #FFF , 1834px 379px #FFF , 301px 222px #FFF , 1895px 1481px #FFF , 1974px 974px #FFF , 964px 528px #FFF , 723px 848px #FFF , 1797px 1783px #FFF , 1442px 1737px #FFF , 1996px 480px #FFF , 542px 1425px #FFF , 1253px 1837px #FFF , 792px 377px #FFF , 1754px 679px #FFF , 1454px 950px #FFF , 480px 63px #FFF , 186px 938px #FFF , 463px 27px #FFF , 1593px 1728px #FFF , 1413px 969px #FFF , 1540px 384px #FFF , 1614px 413px #FFF , 91px 582px #FFF , 1542px 776px #FFF , 1467px 448px #FFF , 1141px 1318px #FFF , 1042px 1366px #FFF , 318px 471px #FFF , 672px 454px #FFF , 713px 642px #FFF , 1035px 1562px #FFF , 803px 1686px #FFF , 1042px 1978px #FFF , 951px 1205px #FFF , 1709px 1791px #FFF , 1982px 771px #FFF , 124px 71px #FFF , 934px 1490px #FFF , 752px 1456px #FFF , 1234px 1587px #FFF , 1972px 1783px #FFF , 899px 641px #FFF , 1124px 1833px #FFF , 540px 127px #FFF , 827px 1331px #FFF , 1661px 313px #FFF , 1912px 1702px #FFF , 1519px 1953px #FFF , 1309px 1904px #FFF , 1570px 1014px #FFF , 435px 83px #FFF , 1738px 1832px #FFF , 287px 1361px #FFF , 112px 451px #FFF , 547px 1986px #FFF , 1251px 1503px #FFF , 538px 935px #FFF , 1973px 137px #FFF , 1129px 1994px #FFF , 1718px 1242px #FFF , 1075px 1856px #FFF , 175px 1747px #FFF , 327px 1259px #FFF , 284px 37px #FFF , 912px 1767px #FFF , 1913px 1659px #FFF , 660px 1025px #FFF , 681px 1277px #FFF , 1242px 902px #FFF , 1689px 1179px #FFF , 1503px 758px #FFF , 794px 624px #FFF , 1988px 1330px #FFF , 1430px 183px #FFF , 462px 550px #FFF , 830px 444px #FFF , 1757px 808px #FFF , 1452px 1808px #FFF , 1607px 1024px #FFF , 1301px 419px #FFF , 1638px 163px #FFF , 208px 703px #FFF , 788px 1976px #FFF , 1516px 1076px #FFF , 987px 1999px #FFF , 367px 187px #FFF , 995px 1717px #FFF , 44px 906px #FFF , 53px 240px #FFF , 442px 1921px #FFF , 1418px 1776px #FFF , 840px 1757px #FFF , 544px 779px #FFF , 258px 1497px #FFF , 336px 1061px #FFF , 1793px 789px #FFF , 344px 640px #FFF , 347px 207px #FFF , 629px 1011px #FFF , 365px 601px #FFF , 1120px 1268px #FFF , 979px 619px #FFF , 281px 698px #FFF , 690px 371px #FFF , 855px 413px #FFF , 1158px 555px #FFF , 702px 518px #FFF , 1631px 1652px #FFF , 178px 1790px #FFF , 810px 1998px #FFF , 1724px 1080px #FFF , 1164px 1124px #FFF , 1769px 1422px #FFF , 1242px 1786px #FFF , 1100px 1522px #FFF , 436px 1742px #FFF , 1018px 911px #FFF , 1242px 613px #FFF , 160px 57px #FFF , 1331px 237px #FFF , 1024px 306px #FFF , 284px 887px #FFF , 510px 626px #FFF , 1993px 1252px #FFF , 1990px 547px #FFF , 747px 490px #FFF , 946px 1142px #FFF , 1898px 361px #FFF , 1564px 472px #FFF , 127px 980px #FFF , 1937px 1151px #FFF , 620px 130px #FFF , 1449px 1207px #FFF , 992px 1720px #FFF , 1628px 1656px #FFF , 1940px 1300px #FFF , 1501px 1326px #FFF , 1853px 925px #FFF , 79px 82px #FFF , 1856px 1476px #FFF , 487px 1674px #FFF , 1522px 163px #FFF , 1490px 998px #FFF , 769px 1554px #FFF , 932px 189px #FFF , 1409px 1712px #FFF , 636px 1408px #FFF , 786px 1293px #FFF , 169px 1191px #FFF , 983px 1782px #FFF , 435px 453px #FFF , 726px 1832px #FFF , 1998px 1304px #FFF , 1669px 1838px #FFF , 1644px 1042px #FFF , 174px 1280px #FFF , 282px 945px #FFF , 1906px 1605px #FFF , 648px 516px #FFF , 1456px 1913px #FFF , 1636px 1499px #FFF , 493px 1832px #FFF , 1146px 1260px #FFF , 873px 64px #FFF , 1485px 1873px #FFF , 1187px 543px #FFF , 1131px 534px #FFF , 909px 1827px #FFF , 1969px 1908px #FFF , 1178px 455px #FFF , 1894px 1137px #FFF , 235px 1819px #FFF , 1298px 50px #FFF , 1890px 986px #FFF , 1788px 662px #FFF , 172px 364px #FFF , 711px 52px #FFF , 45px 1938px #FFF , 1038px 45px #FFF , 1762px 832px #FFF , 46px 1055px #FFF , 205px 624px #FFF , 616px 1362px #FFF , 68px 1997px #FFF , 70px 667px #FFF , 297px 281px #FFF , 726px 1250px #FFF , 9px 1842px #FFF , 672px 1451px #FFF , 1627px 897px #FFF , 1945px 223px #FFF , 862px 754px #FFF , 1183px 1444px #FFF , 1892px 421px #FFF , 630px 444px #FFF , 543px 1800px #FFF , 1335px 1577px #FFF , 357px 1442px #FFF , 971px 341px #FFF , 468px 675px #FFF , 530px 449px #FFF , 1449px 1865px #FFF , 493px 747px #FFF , 46px 619px #FFF , 564px 1078px #FFF , 330px 1002px #FFF , 269px 1934px #FFF , 1960px 1149px #FFF , 1540px 277px #FFF , 712px 1285px #FFF , 645px 280px #FFF , 275px 329px #FFF , 735px 219px #FFF , 1413px 1446px #FFF , 1301px 1752px #FFF , 1251px 276px #FFF , 1069px 348px #FFF , 1771px 1326px #FFF , 260px 746px #FFF , 695px 1226px #FFF , 1009px 1635px #FFF , 1032px 1132px #FFF , 715px 652px #FFF , 925px 643px #FFF , 1851px 253px #FFF , 96px 908px #FFF , 827px 412px #FFF , 979px 1161px #FFF , 530px 711px #FFF , 862px 1998px #FFF;
} */

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 716px 478px #fff, 559px 934px #fff, 208px 1777px #fff,
    1708px 137px #fff, 1969px 1071px #fff, 163px 186px #fff, 441px 694px #fff,
    1589px 829px #fff, 1603px 1482px #fff, 309px 60px #fff, 384px 764px #fff,
    1875px 93px #fff, 1253px 69px #fff, 720px 573px #fff, 254px 1899px #fff,
    18px 693px #fff, 1843px 374px #fff, 1089px 663px #fff, 1461px 220px #fff,
    1464px 752px #fff, 318px 48px #fff, 1768px 1116px #fff, 1836px 1443px #fff,
    261px 932px #fff, 1707px 1784px #fff, 65px 1955px #fff, 1879px 1492px #fff,
    1395px 1476px #fff, 128px 1109px #fff, 28px 657px #fff, 71px 457px #fff,
    1230px 960px #fff, 1817px 649px #fff, 869px 1146px #fff, 142px 895px #fff,
    1293px 1825px #fff, 1785px 962px #fff, 1334px 419px #fff, 785px 1602px #fff,
    366px 193px #fff, 1410px 1645px #fff, 1855px 56px #fff, 1078px 184px #fff,
    1853px 1119px #fff, 242px 151px #fff, 634px 1220px #fff, 1253px 1487px #fff,
    1041px 1930px #fff, 1310px 1642px #fff, 610px 1358px #fff, 445px 368px #fff,
    1689px 351px #fff, 336px 24px #fff, 1740px 222px #fff, 1969px 925px #fff,
    1842px 937px #fff, 21px 1144px #fff, 1445px 153px #fff, 239px 1114px #fff,
    1474px 664px #fff, 607px 396px #fff, 468px 87px #fff, 447px 43px #fff,
    665px 595px #fff, 1332px 34px #fff, 1983px 855px #fff, 1027px 1780px #fff,
    196px 368px #fff, 738px 1099px #fff, 691px 222px #fff, 132px 133px #fff,
    1006px 142px #fff, 1703px 1767px #fff, 1943px 1838px #fff, 1545px 532px #fff,
    529px 696px #fff, 1103px 1330px #fff, 1370px 1540px #fff, 151px 597px #fff,
    1322px 728px #fff, 1643px 428px #fff, 738px 1740px #fff, 1632px 1318px #fff,
    312px 1558px #fff, 645px 1195px #fff, 1470px 378px #fff, 112px 959px #fff,
    292px 1645px #fff, 1342px 681px #fff, 1752px 1028px #fff, 1470px 1562px #fff,
    115px 25px #fff, 1806px 1608px #fff, 118px 150px #fff, 1097px 1685px #fff,
    771px 88px #fff, 1866px 1851px #fff, 632px 1857px #fff, 182px 13px #fff,
    1417px 554px #fff, 1253px 1557px #fff, 16px 1911px #fff, 110px 559px #fff,
    281px 351px #fff, 587px 1776px #fff, 1942px 715px #fff, 452px 1319px #fff,
    699px 1814px #fff, 1453px 279px #fff, 1290px 501px #fff, 1412px 77px #fff,
    1827px 1761px #fff, 1151px 1904px #fff, 1390px 835px #fff,
    1534px 1101px #fff, 884px 1463px #fff, 683px 63px #fff, 1352px 263px #fff,
    1309px 1564px #fff, 59px 620px #fff, 1028px 1082px #fff, 235px 484px #fff,
    1564px 1055px #fff, 1545px 1087px #fff, 1487px 1724px #fff,
    197px 1574px #fff, 1468px 828px #fff, 1731px 1198px #fff, 992px 815px #fff,
    1945px 1362px #fff, 503px 1854px #fff, 1095px 1674px #fff, 503px 151px #fff,
    1397px 26px #fff, 1463px 325px #fff, 845px 1940px #fff, 517px 1300px #fff,
    738px 539px #fff, 792px 1484px #fff, 1737px 150px #fff, 1614px 1691px #fff,
    1821px 8px #fff, 198px 1706px #fff, 221px 786px #fff, 1105px 1231px #fff,
    407px 715px #fff, 231px 1133px #fff, 1149px 157px #fff, 1289px 858px #fff,
    508px 1160px #fff, 1340px 1595px #fff, 440px 890px #fff, 979px 1155px #fff,
    1317px 165px #fff, 710px 1386px #fff, 326px 1288px #fff, 987px 923px #fff,
    651px 84px #fff, 1675px 613px #fff, 1355px 1924px #fff, 209px 1527px #fff,
    125px 68px #fff, 1224px 1089px #fff, 1969px 1661px #fff, 1357px 963px #fff,
    1643px 363px #fff, 614px 267px #fff, 177px 617px #fff, 1524px 1211px #fff,
    1232px 825px #fff, 997px 454px #fff, 423px 113px #fff, 1150px 1532px #fff,
    470px 529px #fff, 698px 1382px #fff, 1341px 726px #fff, 1101px 687px #fff,
    267px 1877px #fff, 899px 891px #fff, 1489px 1851px #fff, 859px 520px #fff,
    57px 642px #fff, 1686px 183px #fff, 564px 221px #fff, 1421px 1698px #fff,
    184px 703px #fff, 360px 660px #fff, 850px 1785px #fff, 719px 1923px #fff,
    74px 1183px #fff, 1499px 657px #fff, 415px 894px #fff, 1216px 1603px #fff,
    1389px 812px #fff, 394px 595px #fff, 1036px 765px #fff, 561px 1400px #fff,
    721px 117px #fff, 864px 856px #fff, 921px 732px #fff;
  -webkit-animation: animStar 100s linear infinite;
  animation: animStar 100s linear infinite;
}
/* #stars2:after {
content: " ";
position: absolute;
top: 2000px;
width: 2px;
height: 2px;
background: transparent;
box-shadow: 716px 478px #FFF , 559px 934px #FFF , 208px 1777px #FFF , 1708px 137px #FFF , 1969px 1071px #FFF , 163px 186px #FFF , 441px 694px #FFF , 1589px 829px #FFF , 1603px 1482px #FFF , 309px 60px #FFF , 384px 764px #FFF , 1875px 93px #FFF , 1253px 69px #FFF , 720px 573px #FFF , 254px 1899px #FFF , 18px 693px #FFF , 1843px 374px #FFF , 1089px 663px #FFF , 1461px 220px #FFF , 1464px 752px #FFF , 318px 48px #FFF , 1768px 1116px #FFF , 1836px 1443px #FFF , 261px 932px #FFF , 1707px 1784px #FFF , 65px 1955px #FFF , 1879px 1492px #FFF , 1395px 1476px #FFF , 128px 1109px #FFF , 28px 657px #FFF , 71px 457px #FFF , 1230px 960px #FFF , 1817px 649px #FFF , 869px 1146px #FFF , 142px 895px #FFF , 1293px 1825px #FFF , 1785px 962px #FFF , 1334px 419px #FFF , 785px 1602px #FFF , 366px 193px #FFF , 1410px 1645px #FFF , 1855px 56px #FFF , 1078px 184px #FFF , 1853px 1119px #FFF , 242px 151px #FFF , 634px 1220px #FFF , 1253px 1487px #FFF , 1041px 1930px #FFF , 1310px 1642px #FFF , 610px 1358px #FFF , 445px 368px #FFF , 1689px 351px #FFF , 336px 24px #FFF , 1740px 222px #FFF , 1969px 925px #FFF , 1842px 937px #FFF , 21px 1144px #FFF , 1445px 153px #FFF , 239px 1114px #FFF , 1474px 664px #FFF , 607px 396px #FFF , 468px 87px #FFF , 447px 43px #FFF , 665px 595px #FFF , 1332px 34px #FFF , 1983px 855px #FFF , 1027px 1780px #FFF , 196px 368px #FFF , 738px 1099px #FFF , 691px 222px #FFF , 132px 133px #FFF , 1006px 142px #FFF , 1703px 1767px #FFF , 1943px 1838px #FFF , 1545px 532px #FFF , 529px 696px #FFF , 1103px 1330px #FFF , 1370px 1540px #FFF , 151px 597px #FFF , 1322px 728px #FFF , 1643px 428px #FFF , 738px 1740px #FFF , 1632px 1318px #FFF , 312px 1558px #FFF , 645px 1195px #FFF , 1470px 378px #FFF , 112px 959px #FFF , 292px 1645px #FFF , 1342px 681px #FFF , 1752px 1028px #FFF , 1470px 1562px #FFF , 115px 25px #FFF , 1806px 1608px #FFF , 118px 150px #FFF , 1097px 1685px #FFF , 771px 88px #FFF , 1866px 1851px #FFF , 632px 1857px #FFF , 182px 13px #FFF , 1417px 554px #FFF , 1253px 1557px #FFF , 16px 1911px #FFF , 110px 559px #FFF , 281px 351px #FFF , 587px 1776px #FFF , 1942px 715px #FFF , 452px 1319px #FFF , 699px 1814px #FFF , 1453px 279px #FFF , 1290px 501px #FFF , 1412px 77px #FFF , 1827px 1761px #FFF , 1151px 1904px #FFF , 1390px 835px #FFF , 1534px 1101px #FFF , 884px 1463px #FFF , 683px 63px #FFF , 1352px 263px #FFF , 1309px 1564px #FFF , 59px 620px #FFF , 1028px 1082px #FFF , 235px 484px #FFF , 1564px 1055px #FFF , 1545px 1087px #FFF , 1487px 1724px #FFF , 197px 1574px #FFF , 1468px 828px #FFF , 1731px 1198px #FFF , 992px 815px #FFF , 1945px 1362px #FFF , 503px 1854px #FFF , 1095px 1674px #FFF , 503px 151px #FFF , 1397px 26px #FFF , 1463px 325px #FFF , 845px 1940px #FFF , 517px 1300px #FFF , 738px 539px #FFF , 792px 1484px #FFF , 1737px 150px #FFF , 1614px 1691px #FFF , 1821px 8px #FFF , 198px 1706px #FFF , 221px 786px #FFF , 1105px 1231px #FFF , 407px 715px #FFF , 231px 1133px #FFF , 1149px 157px #FFF , 1289px 858px #FFF , 508px 1160px #FFF , 1340px 1595px #FFF , 440px 890px #FFF , 979px 1155px #FFF , 1317px 165px #FFF , 710px 1386px #FFF , 326px 1288px #FFF , 987px 923px #FFF , 651px 84px #FFF , 1675px 613px #FFF , 1355px 1924px #FFF , 209px 1527px #FFF , 125px 68px #FFF , 1224px 1089px #FFF , 1969px 1661px #FFF , 1357px 963px #FFF , 1643px 363px #FFF , 614px 267px #FFF , 177px 617px #FFF , 1524px 1211px #FFF , 1232px 825px #FFF , 997px 454px #FFF , 423px 113px #FFF , 1150px 1532px #FFF , 470px 529px #FFF , 698px 1382px #FFF , 1341px 726px #FFF , 1101px 687px #FFF , 267px 1877px #FFF , 899px 891px #FFF , 1489px 1851px #FFF , 859px 520px #FFF , 57px 642px #FFF , 1686px 183px #FFF , 564px 221px #FFF , 1421px 1698px #FFF , 184px 703px #FFF , 360px 660px #FFF , 850px 1785px #FFF , 719px 1923px #FFF , 74px 1183px #FFF , 1499px 657px #FFF , 415px 894px #FFF , 1216px 1603px #FFF , 1389px 812px #FFF , 394px 595px #FFF , 1036px 765px #FFF , 561px 1400px #FFF , 721px 117px #FFF , 864px 856px #FFF , 921px 732px #FFF;
} */

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 585px 606px #fff, 1098px 228px #fff, 1930px 1578px #fff,
    1839px 74px #fff, 1581px 1370px #fff, 1794px 914px #fff, 76px 1392px #fff,
    1370px 101px #fff, 353px 648px #fff, 1981px 1120px #fff, 1623px 386px #fff,
    1339px 1994px #fff, 826px 1916px #fff, 1120px 1873px #fff,
    1535px 1658px #fff, 1339px 1684px #fff, 311px 782px #fff, 360px 697px #fff,
    1782px 1220px #fff, 1541px 1438px #fff, 1300px 608px #fff, 1532px 638px #fff,
    521px 406px #fff, 60px 463px #fff, 54px 1808px #fff, 742px 1749px #fff,
    768px 1129px #fff, 1223px 927px #fff, 250px 1881px #fff, 1450px 834px #fff,
    557px 1033px #fff, 626px 1447px #fff, 1508px 357px #fff, 720px 208px #fff,
    1268px 497px #fff, 576px 92px #fff, 111px 1965px #fff, 1832px 920px #fff,
    1816px 354px #fff, 166px 1048px #fff, 1569px 223px #fff, 326px 6px #fff,
    970px 718px #fff, 93px 1320px #fff, 386px 988px #fff, 1013px 463px #fff,
    572px 1751px #fff, 859px 1520px #fff, 927px 1150px #fff, 1603px 655px #fff,
    306px 1056px #fff, 1714px 1699px #fff, 1314px 1540px #fff, 1096px 748px #fff,
    1657px 1772px #fff, 1850px 659px #fff, 1784px 942px #fff, 1797px 1397px #fff,
    1096px 197px #fff, 494px 112px #fff, 1948px 978px #fff, 384px 678px #fff,
    1180px 789px #fff, 1105px 152px #fff, 883px 267px #fff, 591px 602px #fff,
    1244px 1036px #fff, 890px 463px #fff, 20px 1245px #fff, 667px 1208px #fff,
    545px 785px #fff, 789px 1745px #fff, 899px 1368px #fff, 516px 227px #fff,
    23px 1280px #fff, 1644px 781px #fff, 1760px 902px #fff, 368px 956px #fff,
    1166px 487px #fff, 312px 80px #fff, 248px 1382px #fff, 1704px 110px #fff,
    286px 726px #fff, 714px 1857px #fff, 1422px 1251px #fff, 245px 343px #fff,
    1273px 79px #fff, 537px 620px #fff, 1454px 371px #fff, 55px 180px #fff,
    1962px 245px #fff, 1286px 1953px #fff, 1833px 1229px #fff,
    1008px 1910px #fff, 1103px 516px #fff, 237px 1320px #fff, 1934px 1305px #fff,
    252px 169px #fff, 1776px 1647px #fff, 1946px 401px #fff;
  -webkit-animation: animStar 150s linear infinite;
  animation: animStar 150s linear infinite;
}
/* #stars3:after {
content: " ";
position: absolute;
top: 2000px;
width: 3px;
height: 3px;
background: transparent;
box-shadow: 585px 606px #FFF , 1098px 228px #FFF , 1930px 1578px #FFF , 1839px 74px #FFF , 1581px 1370px #FFF , 1794px 914px #FFF , 76px 1392px #FFF , 1370px 101px #FFF , 353px 648px #FFF , 1981px 1120px #FFF , 1623px 386px #FFF , 1339px 1994px #FFF , 826px 1916px #FFF , 1120px 1873px #FFF , 1535px 1658px #FFF , 1339px 1684px #FFF , 311px 782px #FFF , 360px 697px #FFF , 1782px 1220px #FFF , 1541px 1438px #FFF , 1300px 608px #FFF , 1532px 638px #FFF , 521px 406px #FFF , 60px 463px #FFF , 54px 1808px #FFF , 742px 1749px #FFF , 768px 1129px #FFF , 1223px 927px #FFF , 250px 1881px #FFF , 1450px 834px #FFF , 557px 1033px #FFF , 626px 1447px #FFF , 1508px 357px #FFF , 720px 208px #FFF , 1268px 497px #FFF , 576px 92px #FFF , 111px 1965px #FFF , 1832px 920px #FFF , 1816px 354px #FFF , 166px 1048px #FFF , 1569px 223px #FFF , 326px 6px #FFF , 970px 718px #FFF , 93px 1320px #FFF , 386px 988px #FFF , 1013px 463px #FFF , 572px 1751px #FFF , 859px 1520px #FFF , 927px 1150px #FFF , 1603px 655px #FFF , 306px 1056px #FFF , 1714px 1699px #FFF , 1314px 1540px #FFF , 1096px 748px #FFF , 1657px 1772px #FFF , 1850px 659px #FFF , 1784px 942px #FFF , 1797px 1397px #FFF , 1096px 197px #FFF , 494px 112px #FFF , 1948px 978px #FFF , 384px 678px #FFF , 1180px 789px #FFF , 1105px 152px #FFF , 883px 267px #FFF , 591px 602px #FFF , 1244px 1036px #FFF , 890px 463px #FFF , 20px 1245px #FFF , 667px 1208px #FFF , 545px 785px #FFF , 789px 1745px #FFF , 899px 1368px #FFF , 516px 227px #FFF , 23px 1280px #FFF , 1644px 781px #FFF , 1760px 902px #FFF , 368px 956px #FFF , 1166px 487px #FFF , 312px 80px #FFF , 248px 1382px #FFF , 1704px 110px #FFF , 286px 726px #FFF , 714px 1857px #FFF , 1422px 1251px #FFF , 245px 343px #FFF , 1273px 79px #FFF , 537px 620px #FFF , 1454px 371px #FFF , 55px 180px #FFF , 1962px 245px #FFF , 1286px 1953px #FFF , 1833px 1229px #FFF , 1008px 1910px #FFF , 1103px 516px #FFF , 237px 1320px #FFF , 1934px 1305px #FFF , 252px 169px #FFF , 1776px 1647px #FFF , 1946px 401px #FFF;
} */

#title {
  position: absolute;
  top: 50vh;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 0px;
}
#title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@-webkit-keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
@media (max-width: 480px) {
  nav ul li {
    font-size: 18px;
  }

  nav ul {
    margin: 0;
    position: absolute;
    top: 30%;
    left: 10%;
  }
  nav.show {
    width: 50%;
    opacity: 1;
  }
  .dark-blue.slide {
    width: 50%;
    opacity: 1;
  }
}
@media (max-width: 900px) {
  nav ul li {
    font-size: 18px;
  }

  nav ul {
    margin: 0;
    position: absolute;
    top: 30%;
    left: 10%;
  }
  nav.show {
    width: 50%;
    opacity: 1;
  }
  .dark-blue.slide {
    width: 50%;
    opacity: 1;
  }
}

nav ul li {
  background-image: linear-gradient(to right, #6102ba, #000 80%);
  background-size: 200% 100%;
  background-position: -100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;
}

nav ul li:hover {
  background-position: 0;
}

nav ul li:hover::before {
  width: 100%;
  background-color: black;
  color: white;
}
</style>