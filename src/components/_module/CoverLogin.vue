<template>
    <div>
        <img class="images" src="../../assets/img/img/tampilan login/gambarlogin.png">
        <img id="icon" src="../../assets/img/img/tampilan login/bookshelf.png">
        <p id="tulisan_atasgambar">Book is a window <br>to the world</p>

    </div>
</template>

<script>
export default {

};
</script>

<style lang="css" scoped>
    .images {
    height: 100vh;
    width: 800px;
    background-position: left center;
    background-repeat: no-repeat;
    float: left;

    /* menulis tulisan diatas gambar */
    position: relative;
    z-index: 1;
    top: 0px;
    opacity: 0.8;

}

#tulisan_atasgambar {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: 88px;
    z-index: 2;
    color: darkcyan;
    font-size: 64px;
    left: 58px;
    font-weight: bold;
}

#icon {
    margin-left: auto;
    margin-right: 5px;
    display: block;
    width: auto;
}


</style>
