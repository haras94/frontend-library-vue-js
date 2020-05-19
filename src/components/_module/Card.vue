<template>
    <div>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <!-- card colomn -->
  <h1 class="listbook">List Book</h1>
  <div class="container">
    <div class="posisi">
      <div class="row">
        <div class="column">
          <!-- <router-link to='/DetailProduk'> -->
            <div class="card" v-for="isibook in books.result" :key="isibook.result">
              <img class="thumb1" :src="isibook.image">
              <div class="isian">
              <h3 class="isidilan"> <router-link :to="'/DetailProduk/'+isibook.id"> {{
                isibook.title
              }}</router-link> </h3>
              <p class="deskrip">{{
                isibook.description}}</p>
            </div>
          <!-- </router-link> -->
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'card',
  props: ['book'],
  data() {
    return {
      books: [],
      container: null,
    };
  },
  mounted() {
    Axios.get('http://localhost:3500/api/v1/book/')
      .then((res) => {
        this.books = res.data;
        console.log(res.data);
      });
  },
};
</script>

<style lang="css" scoped>

/* style pada card */

.card {
    width: 300px;
    height: 400px;
    left: 379px;
    top: 574px;
    text-align: center;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 15px;
    overflow-y: hidden !important;
    padding-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
    object-fit: cover;
}


.listbook {
    position: absolute;
    width: 242px;
    height: 43px;
    left: 120px;
    top: 515px;
    font-size: 25px;
    line-height: 33px;
    color: #424242;
    font-family: 'Montserrat', sans-serif;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: grey;

}

/* Float coloums */
.column {
    box-sizing: border-box;
    padding: 0px 20px;
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    background: #FFFFFF;
    margin-left: 150px;
}

/* menghilangkan margin sisa kanan kiri */
.row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 280px;
    justify-content: center;
}

.thumb1{
  object-fit: cover;
  width: 280px;
  height: 150px;
}

.isidilan{
  height: 50px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 10px;
  /* margin-left: 30px; */
}

.isian{
  padding: 25px;
  height: 200px;
  overflow: hidden;
}

.deskrip{
  height: 153px;
  overflow: hidden;
}
</style>
