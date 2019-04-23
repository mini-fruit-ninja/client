<template>
    <div>
        <img id="image0" src='../assets/grape.png' style="display:none">
        <img id="image1" src='../assets/kiwi.png'  style="display:none">
        <img id="image2" src='../assets/lemon.png'  style="display:none">
        <img id="image3" src='../assets/raspberry.png' style="display:none">
        <img id="image4" src='../assets/strawberry.png' style="display:none">
        <img id="image5" src='../assets/watermelon.png' style="display:none">
        <img id="image6" src='../assets/orange.png' style="display:none">
        <img id="image7" src='../assets/pear.png' style="display:none">
        <canvas id="canvas" @click="click" @mousemove="updateXY" width="950" height="480"></canvas>
    </div>
</template>
<script>
export default {
    data()
    {
        return {
                audiosuccess: new Audio('https://storage.googleapis.com/mri-bucket-ecommerce/successAudio.m4a'),
                failedAudio :new Audio('https://storage.googleapis.com/mri-bucket-ecommerce/failedAudio.m4a'),
                x: 0,
                y: 0,
                ctx: '',
                img: [],
                ximage: 468,
                yimage: 210
    } 
            },
            sockets: {
                fruitClicked(fruitAxis) {
                        this.audiosuccess.play()
                        this.yimage = fruitAxis.yimage
                        this.ximage = fruitAxis.ximage
                },
                fruitNotClicked() {
                        this.failedAudio.play()
                },
                onChange(rand) {
                    console.log(rand);
                    this.ctx.clearRect(0, 0, document.getElementById('canvas').width, document.getElementById('canvas').height);
                    this.ctx = document.getElementById("canvas").getContext("2d")
                    this.ctx.drawImage(this.img[rand], this.ximage, this.yimage,60,60);
                }
            },
            methods: {
                updateXY: function (event) {
                    this.x = event.offsetX
                    this.y = event.offsetY

                },
                click: function () {
                    if (this.ximage < this.x && this.yimage < this.y && this.ximage  + 60 >  this.x && this.yimage+ 60 > this.y ) {
                        this.$socket.emit('fruitClicked');
                    } else {
                        this.$socket.emit('fruitNotClicked');

                    }

                    console.log(this.x, this.y)


                },
                image() { 
                    this.ctx = document.getElementById("canvas").getContext("2d")
                    for(let i=0; i<7; i++){
                        this.img.push(document.getElementById(`image${i}`))
                    }
                },
                fruit() {
                    this.ctx.drawImage(this.img[0], this.ximage, this.yimage, 60, 60);
                }

            },
            mounted() {
                this.image()
                setTimeout(() => {
                    this.fruit()
                },200)  
            },
            watch:{
                yimage : function(){
                    this.$socket.emit('onChange');
                }    
            }



}
</script>



