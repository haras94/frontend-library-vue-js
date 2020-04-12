<template>
  <div>
     <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <div class="container">
      <h1 class="judul">Books Library</h1>
      <img class="images" src="../assets/img/img/tampilan login/gambarlogin.png">
      <img class="icon" src="../assets/img/img/tampilan login/bookshelf.png">
      <div class="tombolan">
        <router-link to="Login"> <p class="login">Login</p></router-link>
        <router-link to = '/Register'><p class="signup">Sign Up</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style lang="css" scoped>
.images{
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: block;
    opacity: 0.8;

}

.icon{
    z-index: 10;
    position: absolute;
    left: 50%;
    top: 300px;
    transform: translate(-50%);
}

.tombolan{
    z-index: 2;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    color: blue;
}

.judul{
    position: absolute;
    color: darkcyan;
    z-index: 3;
    left: 50%;
    top: 20px;
    font-size: 100px;
    font-weight: bold;
    transform: translateX(-50%);
    text-shadow: 0 0 10px white;
    font-family: 'Montserrat', sans-serif;
}

.signup{
    background: darkred;
    color: #e8e4e3;
    font-size: 20px;
    width: 80px;
    border-radius: 5px;
    padding: 10px 10px;
    text-align: center;
    margin-top: 5px;
    font-family: 'Montserrat', sans-serif;
}

.login{
    background: darkred;
    color: #e8e4e3;
    font-size: 20px;
    width: 80px;
    border-radius: 5px;
    padding: 10px 10px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

a{
  text-decoration: none;
}
</style>
