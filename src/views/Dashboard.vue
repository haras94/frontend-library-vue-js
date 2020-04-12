<template>
    <div>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
        <div class="bodyyy">
    <!-- top navbar-->
        <nav>
      <div class="batok-menubar">
        <button id="openNav" onclick="open()"><img class="burger1"
        src="../assets/img/img/dashboard/menu.png"></button>
        <div class="anaknav">
          <router-link class="homee" to='/LandingPage'>Home</router-link>
          <a class="home" href="#">
            <p>All Categories</p>
            <img class="panahbawah" id="panahbawah" src="../assets/img/img/dashboard/Polygon.png">
          </a>
          <a class="time" href="#">
            <p>All Time</p>
            <img class="panahbawah1" src="../assets/img/img/dashboard/Polygon.png">
          </a>
        </div>

        <div class="cari">
          <img class="glass" src="../assets/img/img/dashboard/glass.png">
          <input class="search" type="text" placeholder="Search book">
        </div>
        <div class="icnlbr">
          <img class="icon" src="../assets/img/img/dashboard/bookshelf.png">
          <p class="tulisanlbr">Library</p>
        </div>
      </div>
        </nav>
  </div>
  <!-- tampilan dalam caraousel-->
  <div class="caraousel">
    <img class="car1" src="../assets/img/img/dashboard/caraousel1.png" alt="dilan 1990">
    <img class="car2" src="../assets/img/img/dashboard/caraousel2.png" alt="ubur ubur lembur">
    <img class="car3" src="../assets/img/img/dashboard/caraousel3.png" alt="Laskar Pelangi">
    <!-- kanan dan kiri tombol -->
    <div class="buttonprev"></div>
    <div class="buttonnext"></div>
  </div>

  <!-- sidebar -->
  <div class="sidebar">
    <img class="burger" src="../assets/img/img/dashboard/menu.png">
    <img class="fotoniki" src="../assets/img/img/dashboard/profile.png">
    <p class="namaniki">Niki Zefanya</p>
    <a class="explore" href="#"><i></i> Explore</a>
    <a class="history" href="#"><i></i> History</a>
    <div>
      <a href="#modaledit" class="modal-openedit"><i></i>Add Book*</a>
      <div class="modaledit" id="modaledit">
        <div class="modal_contentedit">
          <a class="edita" href="#">&times;</a>
          <h2 class="judul-edit">Add Data</h2>

          <!-- input class -->
          <div>
            <!-- <form id="forminput"> -->

              <div class="urlimage1 baris">
                <div class="kolom-40"><label for="url_image">Url Image</label></div>
                <div class="kolom-60"><input class="urlimage" type="text" placeholder="http://gambar.com/dilan.jpg">
                </div>
              </div>

              <div class="title baris">
                <div class="kolom-40">
                  <label for="title">Title</label>
                </div>
                <div class="kolom-60">
                  <input class="title" type="text" name="title">
                </div>
              </div>

              <div class="penjelasan baris">
                <div class="kolom-40">
                  <label for="description">Description</label></div>
                <div class="kolom-60">
                  <textarea class="description" name="descripion" id="" rows="5"
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos nam eveniet corrupti itaque totam doloremque,
                    molestias et praesentium ipsum accusantium?"></textarea>
                </div>
              </div>
              <div class="submit">
                <button type="submit">SAVE</button>
              </div>
             </div>
            <!-- </form> -->
        </div>
      </div>
    </div>
  </div>
  <Card/>
</div>
</template>

<script>
import Card from '../components/_module/Card.vue';

export default {
  name: 'Dashboard',
  components: {
    Card,
  },

  open() {
    document.getElementById('sidebar').style.marginLeft = '25%';
    document.getElementById('sidebar').style.width = '25%';
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('burger1').style.display = 'none';
  },

  close() {
    document.getElementById('burger').style.marginLeft = '0%';
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('openNav').style.display = 'inline-block';
  },

//   methods: {
//     showModal() {
//       document.querySelector('.parent-modal').classList.add('parent-active');
//     },
//     removeModal() {
//       document.querySelector('.parent-modal').classList.remove('parent-active');
//     },
//   },
};
</script>

<style scoped>
 body {
    width: 100%;
    position: relative;
}


nav {
    margin: auto;
    text-align: center;
    width: 100%;
}

.batok-menubar {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    box-sizing: border-box;
    /*box sizing penting dalam memodifikasi margin, padding dan box border */
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 70px;
    padding-right: 20px;
}

.anaknav {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}

/* tulisan library dan logo */
.icon {
    /* position: absolute; */
    width: 50px;
    height: 50px;
    right: 100px;
    top: 5px;
}

.tulisanlbr {
    /* position: absolute; */
    width: auto;
    margin-top: 17px;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    font-family: 'Montserrat', sans-serif;
    margin-left: 5px;
}

.icnlbr {
    display: flex;
    flex-wrap: nowrap;
}

/* menu pada navbar */

/* tulisan home */
.homee {
    /* position: absolute; */
    width: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    color: #000000;
    font-weight: bold;
}

.home {
    /* position: absolute; */
    width: auto;
    font-size: 17px;
    line-height: 22px;
    font-weight: bolder;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 20px;
}

.time {
    /* position: absolute; */
    width: auto;
    font-size: 17px;
    line-height: 22px;
    font-weight: bolder;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 20px;

}

.cari {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}

.panahbawah {
    width: 10px;
    height: 8px;
    margin-left: 5px;
}

.panahbawah1 {
    width: 10px;
    height: 8px;
    margin-left: 5px;
}

/* kolom pencarian */
.search {
    width: 400px;
    height: 43px;
    left: 723px;
    top: 10px;
    padding-left: 50px;
    background: #FFFFFF;
    border: 1px solid #CACACA;
    box-sizing: border-box;
    border-radius: 20px;
    margin-right: 130px;


}

.glass {
    width: 20px;
    height: 20px;
    margin-right: -38px;
    position: relative;
    z-index: 1;
}

/* sidebar */
.sidebar {
    height: 100%;
    width: 200px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: -80px;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    transition: 0.8s;
    margin-left: -200px;
}

.sidebarb {
    height: 100%;
    width: 200px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    margin-left: 0px;
    /*agar sidebar tidak muncul duluan*/
    transition: 0.8s;
}

.sidebar a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: black;
    display: block;
}

/* menu explore */
.explore {
    position: absolute;
    width: 244px;
    height: 56px;
    left: -3px;
    top: 345px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    color: #000000;
}

/* menu history */
.history {
    position: absolute;
    width: 244px;
    height: 56px;
    left: -3px;
    top: 415px;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    color: #000000;
}

/* menu add book */
.add-book {
    position: absolute;
    width: 148px;
    height: 33px;
    left: -3px;
    top: 486px;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    color: #000000;
}

/* foto profile */
.fotoniki {
    position: absolute;
    width: 150px;
    height: 150px;
    left: 20px;
    top: 66px;

    border-radius: 150px;
}

/* nama niki */
.namaniki {
    position: absolute;
    width: 244px;
    height: 78px;
    left: 13px;
    top: 232px;

    font-size: 30px;
    line-height: 39px;
    color: #000000;
}

/* titik 3 pada sidebar */
.burger {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 160px;
    top: 17px;
}

.burger,
.burger1 {
    cursor: pointer;
}

.burger:hover,
.burger1:hover {
    opacity: 0.3;
}


.burger1 {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 20px;
    top: 20px;
}


/* Modal dalam sidebar add data */

/* text dekorasi pada link modal add */
.edita:link,
.edita:visited {
    text-decoration: none;
}

/* kontainer modal add */
.modaledit {
    width: 1340px;
    height: 454px;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: all .8s;
}

/* kotak modal add */
.modal_contentedit {
    width: 400px;
    height: auto;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    border-radius: 1em;
    opacity: 0;
    visibility: hidden;
    transition: all .7s;
}

/* penampakan kotak modal add */
#modaledit:target {
    opacity: 1;
    visibility: visible;
}

/* penampakan isi dalam modal add */
#modaledit:target .modal_contentedit {
    opacity: 1;
    visibility: visible;
}

/* tanda silang close dalam modal add */
.edita {
    color: #ee0909;
    position: absolute;
    width: 30px;
    height: 30px;
    right: 3px;
    top: 7px;
    font-weight: bolder;
    font-size: 24px;

}

/* tulisan add */
.modal-openedit {
    position: absolute;
    width: 244px;
    height: 56px;
    left: -3px;
    top: 480px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    color: #000000;

}

/* header isi dalam modal */
.modal_isiedit {
    position: absolute;
    width: 279px;
    height: 66px;
    left: 169px;
    top: 109px;
    font-family: 'Montserrat', sans-serif;
}

/* input class */
.baris {
    top: 1800px;
    display: flex;
    align-items: center;

}

/* */
.kolom-40 {
    width: 20%;
}

.kolom-60 {
    width: 80%;
}

/* header */
.judul {
    top: 1000px;
    font-family: 'Montserrat', sans-serif;

}

h2.judul-edit {
    margin-top: 0px;
    font-family: 'Montserrat', sans-serif;
}


/* induk form */
#forminput input,
#forminput textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}


/* title */
.title {
    margin-top: 10px;
    font-family: 'Montserrat', sans-serif;
}

/* description */
.penjelasan {
    margin-top: 10px;
    font-family: 'Montserrat', sans-serif;
}

/* tombol save */
.submit {
    margin-top: 20px;
    width: 110px;
    height: 30px;
    margin-left: auto;
    font-family: 'Montserrat', sans-serif;
}

.submit button {
    width: 100%;
    height: 100%;
    background: #F4CF5D;
    color: white;
    border: none;
    border-radius: 5px;
}

/* caraousel button */
.buttonprev {
    position: absolute;
    z-index: 10;
    top: 200px;
    right: 300px;
    background-color: blue;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2); */
}

.buttonnext {
    position: absolute;
    z-index: 10;
    top: 200px;
    left: 300px;
    background-color: blue;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2); */
}

/* caraousel isi */
.caraousel {
    flex-wrap: nowrap !important;
    overflow: hidden;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 50px;


}

.car1 {
    /* position: absolute; */
    width: auto;
    height: 200px;
    /* top: 120px; */
    border-radius: 15px;
    display: block;
    margin-right: 30px;
}

.car2 {
    /* position: absolute; */
    width: auto;
    height: 200px;
    /* top: 116px; */
    border-radius: 15px;
    display: block;
    margin-right: 30px;
}

.car3 {
    /* position: absolute; */
    width: auto;
    height: 200px;
    /* top: 130px; */
    border-radius: 15px;
    display: block;
    margin-right: 30px;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: grey;

}
</style>
