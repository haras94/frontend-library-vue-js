<template>
    <div>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
        <router-link to='/Dashboard'><div class="backbutton" id="backbutton"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="black" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg></div></router-link>
    <div>
    <img class="panahback" src="../assets/img/img/Detail produk/arrow.png">
    </div>

    <!-- tulisan di halaman -->
    <div>
        <div>
    <div class="coveratas"><img :src="idBook[0].image"></div>
    <div class="coverbukukecil"><img :src="idBook[0].image"></div>
    <p class="novel">{{idBook[0].name}}</p>
    <p class="author">Author: {{idBook[0].author}}</p>
    <p class="dilan1990"> {{idBook[0].title}}</p>
    <p class="tanggalproduk"> {{idBook[0].update_at}}</p>

    <!-- <p class="edit">Edit</p> -->
    <p class="Available"> Available </p>
    <p class="deskripsi" > {{idBook[0].description}} </p></div>
    <p class="borrow"> Borrow </p>

    <!-- Modal -->

 <!-- tulisan delete -->
 <a href="#modal" class="modal-open">Delete</a>

 <div class="modal" id="modal">
    <div class="modal_content">
      <a href="#" class="modal_close">&times;</a>
      <h2 class="modal_heading"></h2>
      <img class="checked" src="../assets/img/img/Detail produk/checked.png">
      <p class="modal_isi">Data <b>Dilan 1990</b> Berhasil Dihapus!</p>
    </div>
 </div>

 <!-- tulisan edit -->
<a href="#modaledit" class="modal-openedit">Edit</a>
<div class="modaledit" id="modaledit">
    <div class="modal_contentedit">
      <a class="edita" href="#">&times;</a>
      <h2 class="judul-edit">Edit Data</h2>

    <!-- input class -->
      <div>
      <form id="forminput">
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
                <textarea class="description" name="descripion" id=""  rows="5"
                placeholder="Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eos nam eveniet corrupti
                itaque totam doloremque, molestias et praesentium ipsum accusantium?"></textarea>
              </div>
          </div>
          <div class="submit">
            <button type="submit">SAVE</button>
          </div>
      </form>
      </div>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      idBook: '',
    };
  },
  methods: {
    isinya() {
      Axios
        .get(`http://localhost:3500/api/v1/book/${this.$route.params.id}`).then((getisinya) => {
          this.idBook = getisinya.data.result;
        });
    },
  },
  created() {
    this.isinya();
  },
};
</script>

<style lang="css" scoped>
    .backbutton svg{
    width: 20px;
    transform: rotate(-90deg);
    margin-top: 13px;
    display: block;
    margin-left: 15px;
}

.backbutton{
    position: absolute;
    z-index: 1000;
    top: 15px;
    left: 10px;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
}

.coveratas{
    position: absolute;
    width: 100vw;
    height: 454px;
    left: -2px;
    top: 0px;
    overflow: hidden;
}

.coveratas img{
  object-fit: cover;
  transform: scale(1.55);
  width: 100%;
  height: 100%;
}

.coverbukukecil{
    position: absolute;
    width: 200px;
    height: 288.81px;
    right: 50px;
    top: 253px;
    border-radius: 15px;
}

.coverbukukecil img{
  object-fit: cover;
  transform: scale(1);
  width: 100%;
  height: 100%;
}

.novel{
    position: relative;
    font-family: 'Montserrat', sans-serif;
    background: #FBCC38 ;
    color: #e8e4e3;
    font-size: 17px;
    width: 80px;
    border-radius: 15px;
    padding: 4px 4px;
    text-align: center;

    top: 474px;
    left: 104px;
    height: 20px;
    width: 80px;
    position: absolute;
    line-height: 22px;
}

.author{
   position: relative;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 12px;
    width: 650px;
    height: 65px;
    left: 104px;
    top: 500px;
    color: cadetblue;
}

.dilan1990{
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 40px;
    width: 650px;
    height: 65px;
    left: 100px;
    top: 460px;
}

.Available{
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    width: 278px;
    height: 51px;
    left: 771px;
    top: 509px;

    font-size: 30px;
    color: #1ff037;
    line-height: 39px;
}

.tanggalproduk{
    position: relative;
    color: #000000;
    width: 124px;
    height: 24px;
    left: 109px;
    top: 500px;

    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 26px;
}

.borrow{
    background: #FBCC38;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    position: absolute;
    font-family: 'Montserrat', sans-serif;
    width: 146px;
    height: 38px;
    left: 1130px;
    top: 858px;
    font-weight: bold;

    font-size: 20px;
    line-height: 39px;
    text-align: center;
    color: #edf7ef;

}

.deskripsi{
    font-family: 'Montserrat', sans-serif;
    position: relative;
    width: 824px;
    height: 342px;
    left: 104px;
    top: 535px;

    font-size: 20px;
    line-height: 26px;
    text-align: justify;
    margin-bottom: 10px;
}


/* Modal popup*/

/* text dekorasi pada link modal */
a:link,
a:visited{
 text-decoration: none;
}

/* kontainer modal */
.modal{
 width: 1340px;
 height: 454px;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 10;
 opacity: 0;
 visibility: hidden;
 transition: all .8s;
}

/* kotak modal */
.modal_content{
 width: 600px;
 height: 250px;
 background-color: #fff;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 padding: 2em;
 border-radius: 1em;
 opacity: 0;
 visibility: hidden;
 transition: all .7s;
}

/* penampakan kotak modal */
#modal:target{
 opacity: 1;
 visibility: visible;
}

/* penampakan isi dalam modal */
#modal:target .modal_content{
 opacity: 1;
 visibility: visible;
}

/* tanda silang close dalam modal */
.modal_close{
 color: #ee0909;
 font-size: 1.5em;
 position: absolute;
 top: .5em;
 right: 0.8em;
 font-weight: bold;
}

/* isi dalam modal */
.modal_isi{
 line-height: 1.5px;
 position: absolute;
 width: 300px;
 height: 51px;
 left: 190px;
 top: 200px;
 font-size: 20px;
}

/* gambar ceklis dalam modal */
.checked{
    position: absolute;
    left: 277px;
    top: 80px;
    width: 100px;
    height: 100px;
}

/* tulisan delete */
.modal-open{
position: absolute;
width: auto;
height: 40px;
left: 1200px;
top: 17px;
font-family: 'Montserrat', sans-serif;
font-size: 30px;
line-height: 39px;
color: white;

}

/* modal edit */

/* text dekorasi pada link modal edit */
.edita:link,
.edita:visited{
 text-decoration: none;
}

/* kontainer modal edit */
.modaledit{
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

/* kotak modal edit */
.modal_contentedit{
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

/* penampakan kotak modal edit */
#modaledit:target{
 opacity: 1;
 visibility: visible;
}

/* penampakan isi dalam modal edit */
#modaledit:target .modal_contentedit{
 opacity: 1;
 visibility: visible;
}

/* tanda silang close dalam modal edit */
.edita{
 color: #ee0909;
 position: absolute;
 width: 30px;
 height: 30px;
 right: 10px;
 top: 20px;
 font-weight: bolder;
 font-size: 24px;
}

/* tulisan edit */
.modal-openedit{
    position: absolute;
    width: auto;
    height: 40px;
    left: 1100px;
    top: 17px;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    line-height: 39px;
    color: white;
    }

/* header isi dalam modal */
.modal_isiedit{
 position: absolute;
 width: 279px;
 height: 66px;
 left: 169px;
 top: 109px;
}

/* input class */
.baris{
    top: 1800px;
    display:flex;
    align-items: center;
}

/* */
.kolom-40{
    width: 20%;
}

.kolom-60{
    width: 80%;
}

/* header */
.judul{
    top: 1000px;

}
h2.judul-edit{
    margin-top: 0px;
}


/* induk form */
#forminput input, #forminput textarea{
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}


/* title */
.title{
    margin-top: 10px;
}

/* description */
.penjelasan{
    margin-top: 10px;
}

/* tombol save */
.submit{
    margin-top: 20px;
    width: 110px;
    height: 30px;
    margin-left: auto;
}

.submit button{
    width: 100%;
    height: 100%;
    background: #F4CF5D;
    color: white;
    border: none;
    border-radius: 5px;
}
</style>
