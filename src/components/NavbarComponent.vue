<template>
  <div class="star-container" id="home">
    <div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>


<div class="hamburger-icon" id="icon" ref="icon" @click="handleClick">
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
          <li><a href="#time">Timeline</a></li>
          <li><a href="#home">Sponsors</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      
      </nav>
<div id="title">
  <span></span>
      <SvgComponent />
      <DevfolioComponent />
</div>
</div>
</template>

<script>
  //  import DevfolioComponent from "./DevfolioComponent.vue";
import DevfolioComponent from "./DevfolioComponent.vue";

import SvgComponent from "./SvgComponent.vue";
    export default {
      name : "NavbarComponent",
      components: {
    // DevfolioComponent,
    DevfolioComponent,
    SvgComponent
}

      ,
      methods : {
        handleClick(){
          this.$refs.icon1.classList.toggle("a");
          this.$refs.icon2.classList.toggle("c");
          this.$refs.icon3.classList.toggle("b");
          this.$refs.nav.classList.toggle("show");
          this.$refs.blue.classList.toggle("blue");
        }
      },
    }
</script>

<style>
.star-container{
  position: relative;
  height : 100vh;
  width : 100vw;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #080518 100%);
  overflow: hidden;
}

.icon-1, .icon-2, .icon-3 {
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
  top: 10%;
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
  z-index: 10;
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
}
.cls-1,.cls-2{
      fill:#ecf27c;
      height:400px;
      width : 400px;
    }
    .cls-2{
      fill-rule:evenodd;
    }
    .content {
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100vw;
  transform: translate(-50%, -50%);
  text-align: center;
}
.content svg{
  position: relative;
  font-size: 70px;
  -webkit-animation: shotup 1000ms ease-in-out;
          animation: shotup 1000ms ease-in-out;
  -webkit-animation-delay: 300ms;
          animation-delay: 300ms;
}
.logo{
  height : 720px;
}
     /* html{
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #080518 100%);
  overflow: hidden;
} */

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 274px 1855px #FFF , 963px 645px #FFF , 486px 1809px #FFF , 1097px 997px #FFF , 1889px 1229px #FFF , 1923px 1901px #FFF , 483px 1595px #FFF , 860px 1573px #FFF , 1059px 308px #FFF , 1177px 636px #FFF , 1258px 793px #FFF , 1312px 1413px #FFF , 103px 252px #FFF , 483px 1582px #FFF , 650px 438px #FFF , 1224px 429px #FFF , 697px 994px #FFF , 1768px 690px #FFF , 210px 311px #FFF , 1971px 1679px #FFF , 1336px 917px #FFF , 458px 308px #FFF , 524px 358px #FFF , 466px 588px #FFF , 45px 185px #FFF , 465px 1589px #FFF , 1840px 1890px #FFF , 787px 616px #FFF , 1649px 1727px #FFF , 1196px 286px #FFF , 1716px 241px #FFF , 650px 592px #FFF , 1852px 1772px #FFF , 1615px 448px #FFF , 1833px 391px #FFF , 796px 1427px #FFF , 1375px 916px #FFF , 1344px 32px #FFF , 1090px 1911px #FFF , 915px 1267px #FFF , 771px 1182px #FFF , 1012px 1406px #FFF , 262px 1140px #FFF , 1927px 438px #FFF , 132px 180px #FFF , 1249px 1821px #FFF , 1665px 758px #FFF , 285px 837px #FFF , 849px 786px #FFF , 398px 1337px #FFF , 1428px 1951px #FFF , 1735px 1191px #FFF , 1520px 315px #FFF , 1875px 1987px #FFF , 1602px 931px #FFF , 1546px 1795px #FFF , 471px 61px #FFF , 1844px 1216px #FFF , 759px 915px #FFF , 1932px 563px #FFF , 945px 1516px #FFF , 1321px 452px #FFF , 1412px 1077px #FFF , 1869px 1518px #FFF , 54px 1259px #FFF , 919px 1879px #FFF , 994px 1526px #FFF , 1420px 1047px #FFF , 1123px 425px #FFF , 1401px 1434px #FFF , 1989px 678px #FFF , 1199px 289px #FFF , 1478px 1502px #FFF , 1022px 553px #FFF , 1024px 1959px #FFF , 524px 191px #FFF , 23px 774px #FFF , 486px 1604px #FFF , 1517px 376px #FFF , 1230px 1588px #FFF , 636px 173px #FFF , 844px 1525px #FFF , 1275px 985px #FFF , 672px 987px #FFF , 219px 1278px #FFF , 43px 1579px #FFF , 1726px 84px #FFF , 1733px 1660px #FFF , 703px 1595px #FFF , 666px 1975px #FFF , 259px 170px #FFF , 1647px 188px #FFF , 854px 902px #FFF , 1186px 1133px #FFF , 206px 1969px #FFF , 1887px 868px #FFF , 72px 35px #FFF , 217px 1150px #FFF , 727px 766px #FFF , 1644px 1951px #FFF , 1500px 398px #FFF , 1145px 1291px #FFF , 298px 1700px #FFF , 1585px 1512px #FFF , 714px 1812px #FFF , 790px 1381px #FFF , 1620px 1402px #FFF , 1071px 1693px #FFF , 999px 1802px #FFF , 1850px 605px #FFF , 961px 1844px #FFF , 1662px 1227px #FFF , 887px 151px #FFF , 1441px 208px #FFF , 1566px 1364px #FFF , 689px 1774px #FFF , 1917px 272px #FFF , 1333px 1723px #FFF , 275px 242px #FFF , 684px 1682px #FFF , 593px 12px #FFF , 1505px 326px #FFF , 493px 988px #FFF , 551px 761px #FFF , 1112px 1355px #FFF , 1369px 481px #FFF , 1646px 1526px #FFF , 663px 930px #FFF , 619px 1526px #FFF , 897px 796px #FFF , 457px 607px #FFF , 750px 1075px #FFF , 1245px 587px #FFF , 888px 185px #FFF , 984px 905px #FFF , 169px 378px #FFF , 689px 1410px #FFF , 124px 82px #FFF , 1574px 678px #FFF , 82px 1383px #FFF , 770px 1395px #FFF , 459px 579px #FFF , 1977px 464px #FFF , 52px 623px #FFF , 1216px 1428px #FFF , 254px 879px #FFF , 1593px 1780px #FFF , 281px 1148px #FFF , 302px 1852px #FFF , 1412px 1066px #FFF , 1573px 1375px #FFF , 1095px 1142px #FFF , 854px 1224px #FFF , 1344px 630px #FFF , 1356px 1684px #FFF , 478px 1965px #FFF , 1689px 535px #FFF , 597px 631px #FFF , 953px 256px #FFF , 854px 1252px #FFF , 102px 1064px #FFF , 490px 1912px #FFF , 1725px 1155px #FFF , 1225px 245px #FFF , 1911px 1146px #FFF , 1508px 833px #FFF , 1074px 903px #FFF , 1233px 1295px #FFF , 478px 923px #FFF , 1486px 1639px #FFF , 1832px 1157px #FFF , 644px 1820px #FFF , 159px 154px #FFF , 1842px 1818px #FFF , 1883px 1286px #FFF , 782px 1598px #FFF , 1516px 1044px #FFF , 593px 511px #FFF , 1400px 574px #FFF , 1685px 907px #FFF , 1114px 727px #FFF , 1784px 386px #FFF , 1418px 847px #FFF , 1796px 1587px #FFF , 245px 256px #FFF , 1070px 1788px #FFF , 1134px 377px #FFF , 702px 51px #FFF , 1980px 1396px #FFF , 1119px 363px #FFF , 1740px 769px #FFF , 648px 616px #FFF , 927px 956px #FFF , 1186px 1577px #FFF , 1356px 1328px #FFF , 885px 1106px #FFF , 686px 521px #FFF , 538px 1561px #FFF , 1876px 297px #FFF , 745px 1571px #FFF , 740px 1514px #FFF , 190px 1489px #FFF , 1516px 1912px #FFF , 1114px 200px #FFF , 46px 184px #FFF , 545px 477px #FFF , 277px 485px #FFF , 1624px 704px #FFF , 1389px 1666px #FFF , 1721px 1603px #FFF , 42px 1763px #FFF , 125px 63px #FFF , 1716px 650px #FFF , 1069px 828px #FFF , 693px 595px #FFF , 148px 1010px #FFF , 636px 373px #FFF , 424px 1276px #FFF , 1530px 269px #FFF , 259px 603px #FFF , 1905px 625px #FFF , 273px 372px #FFF , 1387px 1465px #FFF , 295px 250px #FFF , 664px 1734px #FFF , 1805px 1739px #FFF , 302px 1166px #FFF , 254px 1262px #FFF , 1889px 1929px #FFF , 837px 1828px #FFF , 1100px 1986px #FFF , 76px 510px #FFF , 608px 544px #FFF , 1522px 1768px #FFF , 409px 1452px #FFF , 440px 949px #FFF , 236px 1831px #FFF , 817px 390px #FFF , 268px 345px #FFF , 1034px 1253px #FFF , 1741px 1203px #FFF , 993px 1153px #FFF , 329px 1668px #FFF , 1262px 591px #FFF , 417px 1216px #FFF , 1857px 1601px #FFF , 635px 759px #FFF , 1086px 611px #FFF , 1686px 778px #FFF , 149px 1038px #FFF , 2000px 1704px #FFF , 212px 696px #FFF , 1485px 1898px #FFF , 1852px 1853px #FFF , 338px 775px #FFF , 1059px 229px #FFF , 181px 1309px #FFF , 1144px 1157px #FFF , 1764px 1073px #FFF , 1518px 1130px #FFF , 884px 901px #FFF , 1553px 606px #FFF , 717px 1748px #FFF , 1937px 1820px #FFF , 906px 469px #FFF , 426px 1671px #FFF , 875px 71px #FFF , 1176px 1299px #FFF , 941px 1557px #FFF , 752px 1798px #FFF , 1977px 656px #FFF , 1735px 540px #FFF , 1583px 1132px #FFF , 1834px 379px #FFF , 1897px 455px #FFF , 280px 1754px #FFF , 707px 552px #FFF , 833px 76px #FFF , 861px 1445px #FFF , 218px 775px #FFF , 373px 393px #FFF , 1719px 155px #FFF , 895px 1215px #FFF , 228px 1608px #FFF , 46px 58px #FFF , 326px 1776px #FFF , 94px 582px #FFF , 1246px 511px #FFF , 1607px 1839px #FFF , 1298px 663px #FFF , 967px 199px #FFF , 1093px 1825px #FFF , 1454px 1786px #FFF , 1921px 1581px #FFF , 776px 1327px #FFF , 1388px 1020px #FFF , 1492px 942px #FFF , 239px 428px #FFF , 923px 1284px #FFF , 1204px 978px #FFF , 891px 43px #FFF , 197px 776px #FFF , 1001px 1133px #FFF , 1986px 1723px #FFF , 446px 1021px #FFF , 970px 1581px #FFF , 1624px 925px #FFF , 794px 149px #FFF , 1377px 1583px #FFF , 483px 1209px #FFF , 844px 1720px #FFF , 990px 77px #FFF , 1441px 168px #FFF , 898px 940px #FFF , 1614px 1308px #FFF , 1140px 995px #FFF , 483px 1609px #FFF , 1718px 1987px #FFF , 1440px 1891px #FFF , 1137px 1312px #FFF , 1427px 1613px #FFF , 326px 1093px #FFF , 57px 1314px #FFF , 977px 44px #FFF , 1458px 989px #FFF , 1642px 1712px #FFF , 1030px 972px #FFF , 163px 569px #FFF , 965px 91px #FFF , 467px 1042px #FFF , 1652px 671px #FFF , 1187px 1265px #FFF , 428px 1056px #FFF , 78px 1162px #FFF , 1759px 439px #FFF , 463px 177px #FFF , 283px 1883px #FFF , 1040px 500px #FFF , 1039px 346px #FFF , 1129px 546px #FFF , 1391px 152px #FFF , 1552px 1874px #FFF , 111px 281px #FFF , 1740px 576px #FFF , 81px 1986px #FFF , 417px 624px #FFF , 1855px 1925px #FFF , 1348px 12px #FFF , 1945px 46px #FFF , 1641px 579px #FFF , 966px 868px #FFF , 503px 172px #FFF , 46px 1966px #FFF , 1719px 130px #FFF , 1792px 474px #FFF , 1854px 256px #FFF , 1938px 807px #FFF , 1110px 1345px #FFF , 1676px 1355px #FFF , 301px 1809px #FFF , 835px 1768px #FFF , 924px 711px #FFF , 1507px 1661px #FFF , 36px 1381px #FFF , 665px 1753px #FFF , 1687px 483px #FFF , 292px 1337px #FFF , 956px 298px #FFF , 1683px 781px #FFF , 1102px 223px #FFF , 140px 349px #FFF , 283px 105px #FFF , 592px 1677px #FFF , 784px 1968px #FFF , 296px 197px #FFF , 1811px 244px #FFF , 1517px 287px #FFF , 738px 1282px #FFF , 931px 1598px #FFF , 1300px 614px #FFF , 1020px 1464px #FFF , 1582px 1480px #FFF , 364px 1955px #FFF , 184px 1776px #FFF , 533px 1172px #FFF , 464px 837px #FFF , 1513px 350px #FFF , 625px 611px #FFF , 1393px 971px #FFF , 1994px 1256px #FFF , 1917px 752px #FFF , 154px 1478px #FFF , 424px 1140px #FFF , 448px 102px #FFF , 397px 512px #FFF , 1689px 1039px #FFF , 336px 1885px #FFF , 1159px 1147px #FFF , 1869px 1338px #FFF , 1306px 480px #FFF , 1017px 891px #FFF , 302px 938px #FFF , 2px 411px #FFF , 923px 1285px #FFF , 744px 114px #FFF , 1329px 1206px #FFF , 1023px 1993px #FFF , 3px 1581px #FFF , 729px 627px #FFF , 820px 816px #FFF , 253px 484px #FFF , 202px 1046px #FFF , 1740px 308px #FFF , 841px 727px #FFF , 1765px 1962px #FFF , 11px 460px #FFF , 1799px 516px #FFF , 1657px 157px #FFF , 867px 246px #FFF , 82px 1704px #FFF , 1106px 1035px #FFF , 388px 776px #FFF , 1962px 617px #FFF , 1969px 984px #FFF , 793px 1025px #FFF , 529px 84px #FFF , 126px 1975px #FFF , 343px 852px #FFF , 1476px 1105px #FFF , 1674px 1032px #FFF , 33px 986px #FFF , 301px 1350px #FFF , 1335px 1093px #FFF , 385px 1833px #FFF , 1461px 957px #FFF , 813px 1708px #FFF , 660px 580px #FFF , 115px 1567px #FFF , 702px 1481px #FFF , 1935px 186px #FFF , 303px 966px #FFF , 1425px 1426px #FFF , 1505px 1902px #FFF , 1577px 1597px #FFF , 1797px 799px #FFF , 1287px 649px #FFF , 12px 482px #FFF , 1358px 1413px #FFF , 1185px 1100px #FFF , 1330px 1310px #FFF , 1161px 123px #FFF , 1719px 1499px #FFF , 1439px 155px #FFF , 709px 712px #FFF , 876px 912px #FFF , 699px 668px #FFF , 892px 780px #FFF , 425px 1056px #FFF , 1579px 1371px #FFF , 186px 486px #FFF , 1898px 1550px #FFF , 623px 628px #FFF , 1979px 1816px #FFF , 74px 1620px #FFF , 1167px 447px #FFF , 1347px 609px #FFF , 1314px 1632px #FFF , 1596px 1648px #FFF , 656px 1928px #FFF , 1153px 1983px #FFF , 773px 1654px #FFF , 1834px 379px #FFF , 301px 222px #FFF , 1895px 1481px #FFF , 1974px 974px #FFF , 964px 528px #FFF , 723px 848px #FFF , 1797px 1783px #FFF , 1442px 1737px #FFF , 1996px 480px #FFF , 542px 1425px #FFF , 1253px 1837px #FFF , 792px 377px #FFF , 1754px 679px #FFF , 1454px 950px #FFF , 480px 63px #FFF , 186px 938px #FFF , 463px 27px #FFF , 1593px 1728px #FFF , 1413px 969px #FFF , 1540px 384px #FFF , 1614px 413px #FFF , 91px 582px #FFF , 1542px 776px #FFF , 1467px 448px #FFF , 1141px 1318px #FFF , 1042px 1366px #FFF , 318px 471px #FFF , 672px 454px #FFF , 713px 642px #FFF , 1035px 1562px #FFF , 803px 1686px #FFF , 1042px 1978px #FFF , 951px 1205px #FFF , 1709px 1791px #FFF , 1982px 771px #FFF , 124px 71px #FFF , 934px 1490px #FFF , 752px 1456px #FFF , 1234px 1587px #FFF , 1972px 1783px #FFF , 899px 641px #FFF , 1124px 1833px #FFF , 540px 127px #FFF , 827px 1331px #FFF , 1661px 313px #FFF , 1912px 1702px #FFF , 1519px 1953px #FFF , 1309px 1904px #FFF , 1570px 1014px #FFF , 435px 83px #FFF , 1738px 1832px #FFF , 287px 1361px #FFF , 112px 451px #FFF , 547px 1986px #FFF , 1251px 1503px #FFF , 538px 935px #FFF , 1973px 137px #FFF , 1129px 1994px #FFF , 1718px 1242px #FFF , 1075px 1856px #FFF , 175px 1747px #FFF , 327px 1259px #FFF , 284px 37px #FFF , 912px 1767px #FFF , 1913px 1659px #FFF , 660px 1025px #FFF , 681px 1277px #FFF , 1242px 902px #FFF , 1689px 1179px #FFF , 1503px 758px #FFF , 794px 624px #FFF , 1988px 1330px #FFF , 1430px 183px #FFF , 462px 550px #FFF , 830px 444px #FFF , 1757px 808px #FFF , 1452px 1808px #FFF , 1607px 1024px #FFF , 1301px 419px #FFF , 1638px 163px #FFF , 208px 703px #FFF , 788px 1976px #FFF , 1516px 1076px #FFF , 987px 1999px #FFF , 367px 187px #FFF , 995px 1717px #FFF , 44px 906px #FFF , 53px 240px #FFF , 442px 1921px #FFF , 1418px 1776px #FFF , 840px 1757px #FFF , 544px 779px #FFF , 258px 1497px #FFF , 336px 1061px #FFF , 1793px 789px #FFF , 344px 640px #FFF , 347px 207px #FFF , 629px 1011px #FFF , 365px 601px #FFF , 1120px 1268px #FFF , 979px 619px #FFF , 281px 698px #FFF , 690px 371px #FFF , 855px 413px #FFF , 1158px 555px #FFF , 702px 518px #FFF , 1631px 1652px #FFF , 178px 1790px #FFF , 810px 1998px #FFF , 1724px 1080px #FFF , 1164px 1124px #FFF , 1769px 1422px #FFF , 1242px 1786px #FFF , 1100px 1522px #FFF , 436px 1742px #FFF , 1018px 911px #FFF , 1242px 613px #FFF , 160px 57px #FFF , 1331px 237px #FFF , 1024px 306px #FFF , 284px 887px #FFF , 510px 626px #FFF , 1993px 1252px #FFF , 1990px 547px #FFF , 747px 490px #FFF , 946px 1142px #FFF , 1898px 361px #FFF , 1564px 472px #FFF , 127px 980px #FFF , 1937px 1151px #FFF , 620px 130px #FFF , 1449px 1207px #FFF , 992px 1720px #FFF , 1628px 1656px #FFF , 1940px 1300px #FFF , 1501px 1326px #FFF , 1853px 925px #FFF , 79px 82px #FFF , 1856px 1476px #FFF , 487px 1674px #FFF , 1522px 163px #FFF , 1490px 998px #FFF , 769px 1554px #FFF , 932px 189px #FFF , 1409px 1712px #FFF , 636px 1408px #FFF , 786px 1293px #FFF , 169px 1191px #FFF , 983px 1782px #FFF , 435px 453px #FFF , 726px 1832px #FFF , 1998px 1304px #FFF , 1669px 1838px #FFF , 1644px 1042px #FFF , 174px 1280px #FFF , 282px 945px #FFF , 1906px 1605px #FFF , 648px 516px #FFF , 1456px 1913px #FFF , 1636px 1499px #FFF , 493px 1832px #FFF , 1146px 1260px #FFF , 873px 64px #FFF , 1485px 1873px #FFF , 1187px 543px #FFF , 1131px 534px #FFF , 909px 1827px #FFF , 1969px 1908px #FFF , 1178px 455px #FFF , 1894px 1137px #FFF , 235px 1819px #FFF , 1298px 50px #FFF , 1890px 986px #FFF , 1788px 662px #FFF , 172px 364px #FFF , 711px 52px #FFF , 45px 1938px #FFF , 1038px 45px #FFF , 1762px 832px #FFF , 46px 1055px #FFF , 205px 624px #FFF , 616px 1362px #FFF , 68px 1997px #FFF , 70px 667px #FFF , 297px 281px #FFF , 726px 1250px #FFF , 9px 1842px #FFF , 672px 1451px #FFF , 1627px 897px #FFF , 1945px 223px #FFF , 862px 754px #FFF , 1183px 1444px #FFF , 1892px 421px #FFF , 630px 444px #FFF , 543px 1800px #FFF , 1335px 1577px #FFF , 357px 1442px #FFF , 971px 341px #FFF , 468px 675px #FFF , 530px 449px #FFF , 1449px 1865px #FFF , 493px 747px #FFF , 46px 619px #FFF , 564px 1078px #FFF , 330px 1002px #FFF , 269px 1934px #FFF , 1960px 1149px #FFF , 1540px 277px #FFF , 712px 1285px #FFF , 645px 280px #FFF , 275px 329px #FFF , 735px 219px #FFF , 1413px 1446px #FFF , 1301px 1752px #FFF , 1251px 276px #FFF , 1069px 348px #FFF , 1771px 1326px #FFF , 260px 746px #FFF , 695px 1226px #FFF , 1009px 1635px #FFF , 1032px 1132px #FFF , 715px 652px #FFF , 925px 643px #FFF , 1851px 253px #FFF , 96px 908px #FFF , 827px 412px #FFF , 979px 1161px #FFF , 530px 711px #FFF , 862px 1998px #FFF;
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
  box-shadow: 716px 478px #FFF , 559px 934px #FFF , 208px 1777px #FFF , 1708px 137px #FFF , 1969px 1071px #FFF , 163px 186px #FFF , 441px 694px #FFF , 1589px 829px #FFF , 1603px 1482px #FFF , 309px 60px #FFF , 384px 764px #FFF , 1875px 93px #FFF , 1253px 69px #FFF , 720px 573px #FFF , 254px 1899px #FFF , 18px 693px #FFF , 1843px 374px #FFF , 1089px 663px #FFF , 1461px 220px #FFF , 1464px 752px #FFF , 318px 48px #FFF , 1768px 1116px #FFF , 1836px 1443px #FFF , 261px 932px #FFF , 1707px 1784px #FFF , 65px 1955px #FFF , 1879px 1492px #FFF , 1395px 1476px #FFF , 128px 1109px #FFF , 28px 657px #FFF , 71px 457px #FFF , 1230px 960px #FFF , 1817px 649px #FFF , 869px 1146px #FFF , 142px 895px #FFF , 1293px 1825px #FFF , 1785px 962px #FFF , 1334px 419px #FFF , 785px 1602px #FFF , 366px 193px #FFF , 1410px 1645px #FFF , 1855px 56px #FFF , 1078px 184px #FFF , 1853px 1119px #FFF , 242px 151px #FFF , 634px 1220px #FFF , 1253px 1487px #FFF , 1041px 1930px #FFF , 1310px 1642px #FFF , 610px 1358px #FFF , 445px 368px #FFF , 1689px 351px #FFF , 336px 24px #FFF , 1740px 222px #FFF , 1969px 925px #FFF , 1842px 937px #FFF , 21px 1144px #FFF , 1445px 153px #FFF , 239px 1114px #FFF , 1474px 664px #FFF , 607px 396px #FFF , 468px 87px #FFF , 447px 43px #FFF , 665px 595px #FFF , 1332px 34px #FFF , 1983px 855px #FFF , 1027px 1780px #FFF , 196px 368px #FFF , 738px 1099px #FFF , 691px 222px #FFF , 132px 133px #FFF , 1006px 142px #FFF , 1703px 1767px #FFF , 1943px 1838px #FFF , 1545px 532px #FFF , 529px 696px #FFF , 1103px 1330px #FFF , 1370px 1540px #FFF , 151px 597px #FFF , 1322px 728px #FFF , 1643px 428px #FFF , 738px 1740px #FFF , 1632px 1318px #FFF , 312px 1558px #FFF , 645px 1195px #FFF , 1470px 378px #FFF , 112px 959px #FFF , 292px 1645px #FFF , 1342px 681px #FFF , 1752px 1028px #FFF , 1470px 1562px #FFF , 115px 25px #FFF , 1806px 1608px #FFF , 118px 150px #FFF , 1097px 1685px #FFF , 771px 88px #FFF , 1866px 1851px #FFF , 632px 1857px #FFF , 182px 13px #FFF , 1417px 554px #FFF , 1253px 1557px #FFF , 16px 1911px #FFF , 110px 559px #FFF , 281px 351px #FFF , 587px 1776px #FFF , 1942px 715px #FFF , 452px 1319px #FFF , 699px 1814px #FFF , 1453px 279px #FFF , 1290px 501px #FFF , 1412px 77px #FFF , 1827px 1761px #FFF , 1151px 1904px #FFF , 1390px 835px #FFF , 1534px 1101px #FFF , 884px 1463px #FFF , 683px 63px #FFF , 1352px 263px #FFF , 1309px 1564px #FFF , 59px 620px #FFF , 1028px 1082px #FFF , 235px 484px #FFF , 1564px 1055px #FFF , 1545px 1087px #FFF , 1487px 1724px #FFF , 197px 1574px #FFF , 1468px 828px #FFF , 1731px 1198px #FFF , 992px 815px #FFF , 1945px 1362px #FFF , 503px 1854px #FFF , 1095px 1674px #FFF , 503px 151px #FFF , 1397px 26px #FFF , 1463px 325px #FFF , 845px 1940px #FFF , 517px 1300px #FFF , 738px 539px #FFF , 792px 1484px #FFF , 1737px 150px #FFF , 1614px 1691px #FFF , 1821px 8px #FFF , 198px 1706px #FFF , 221px 786px #FFF , 1105px 1231px #FFF , 407px 715px #FFF , 231px 1133px #FFF , 1149px 157px #FFF , 1289px 858px #FFF , 508px 1160px #FFF , 1340px 1595px #FFF , 440px 890px #FFF , 979px 1155px #FFF , 1317px 165px #FFF , 710px 1386px #FFF , 326px 1288px #FFF , 987px 923px #FFF , 651px 84px #FFF , 1675px 613px #FFF , 1355px 1924px #FFF , 209px 1527px #FFF , 125px 68px #FFF , 1224px 1089px #FFF , 1969px 1661px #FFF , 1357px 963px #FFF , 1643px 363px #FFF , 614px 267px #FFF , 177px 617px #FFF , 1524px 1211px #FFF , 1232px 825px #FFF , 997px 454px #FFF , 423px 113px #FFF , 1150px 1532px #FFF , 470px 529px #FFF , 698px 1382px #FFF , 1341px 726px #FFF , 1101px 687px #FFF , 267px 1877px #FFF , 899px 891px #FFF , 1489px 1851px #FFF , 859px 520px #FFF , 57px 642px #FFF , 1686px 183px #FFF , 564px 221px #FFF , 1421px 1698px #FFF , 184px 703px #FFF , 360px 660px #FFF , 850px 1785px #FFF , 719px 1923px #FFF , 74px 1183px #FFF , 1499px 657px #FFF , 415px 894px #FFF , 1216px 1603px #FFF , 1389px 812px #FFF , 394px 595px #FFF , 1036px 765px #FFF , 561px 1400px #FFF , 721px 117px #FFF , 864px 856px #FFF , 921px 732px #FFF;
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
  box-shadow: 585px 606px #FFF , 1098px 228px #FFF , 1930px 1578px #FFF , 1839px 74px #FFF , 1581px 1370px #FFF , 1794px 914px #FFF , 76px 1392px #FFF , 1370px 101px #FFF , 353px 648px #FFF , 1981px 1120px #FFF , 1623px 386px #FFF , 1339px 1994px #FFF , 826px 1916px #FFF , 1120px 1873px #FFF , 1535px 1658px #FFF , 1339px 1684px #FFF , 311px 782px #FFF , 360px 697px #FFF , 1782px 1220px #FFF , 1541px 1438px #FFF , 1300px 608px #FFF , 1532px 638px #FFF , 521px 406px #FFF , 60px 463px #FFF , 54px 1808px #FFF , 742px 1749px #FFF , 768px 1129px #FFF , 1223px 927px #FFF , 250px 1881px #FFF , 1450px 834px #FFF , 557px 1033px #FFF , 626px 1447px #FFF , 1508px 357px #FFF , 720px 208px #FFF , 1268px 497px #FFF , 576px 92px #FFF , 111px 1965px #FFF , 1832px 920px #FFF , 1816px 354px #FFF , 166px 1048px #FFF , 1569px 223px #FFF , 326px 6px #FFF , 970px 718px #FFF , 93px 1320px #FFF , 386px 988px #FFF , 1013px 463px #FFF , 572px 1751px #FFF , 859px 1520px #FFF , 927px 1150px #FFF , 1603px 655px #FFF , 306px 1056px #FFF , 1714px 1699px #FFF , 1314px 1540px #FFF , 1096px 748px #FFF , 1657px 1772px #FFF , 1850px 659px #FFF , 1784px 942px #FFF , 1797px 1397px #FFF , 1096px 197px #FFF , 494px 112px #FFF , 1948px 978px #FFF , 384px 678px #FFF , 1180px 789px #FFF , 1105px 152px #FFF , 883px 267px #FFF , 591px 602px #FFF , 1244px 1036px #FFF , 890px 463px #FFF , 20px 1245px #FFF , 667px 1208px #FFF , 545px 785px #FFF , 789px 1745px #FFF , 899px 1368px #FFF , 516px 227px #FFF , 23px 1280px #FFF , 1644px 781px #FFF , 1760px 902px #FFF , 368px 956px #FFF , 1166px 487px #FFF , 312px 80px #FFF , 248px 1382px #FFF , 1704px 110px #FFF , 286px 726px #FFF , 714px 1857px #FFF , 1422px 1251px #FFF , 245px 343px #FFF , 1273px 79px #FFF , 537px 620px #FFF , 1454px 371px #FFF , 55px 180px #FFF , 1962px 245px #FFF , 1286px 1953px #FFF , 1833px 1229px #FFF , 1008px 1910px #FFF , 1103px 516px #FFF , 237px 1320px #FFF , 1934px 1305px #FFF , 252px 169px #FFF , 1776px 1647px #FFF , 1946px 401px #FFF;
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
  color: #FFF;
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
  background-clip : text;
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
    font-size : 18px;
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
  background-image: linear-gradient(
    to right,
    #6102ba,
    #000 80%
  ); 
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
  color:white;
 }
</style>