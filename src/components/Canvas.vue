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
        <canvas id="canvas" @click="click" @mousemove="updateXY" width="999" height="480"></canvas>
    </div>
</template>
<script>
export default {
    data()
    {
        return {
                x: 0,
                y: 0,
                ctx: '',
                img: [],
                ximage: Math.floor(Math.random() * (999 - 60)),
                yimage: Math.floor(Math.random() * (480 - 60))

    } 
            },
            methods: {
                updateXY: function (event) {
                    this.x = event.offsetX
                    this.y = event.offsetY
                    
                },
                click: function () {
                    if (this.ximage < this.x && this.yimage < this.y && this.ximage  + 60 >  this.x && this.yimage+ 60 > this.y/(480/146) ) {\
                        var audiosuccess = new Audio('../assets/successAudio.m4a')
                        audiosuccess.play()
                        this.yimage = Math.floor(Math.random() * (480 - 60))
                        this.ximage = Math.floor(Math.random() * ((999) - 60))                      
                    } else {
                        var failedAudio = new Audio('../assets/failedAudio.m4a')
                        failedAudio.play()


                    }  
                                     

                },
                image() {
                         
                    this.ctx = document.getElementById("canvas").getContext("2d")
                    for(let i=0; i<7; i++){
                        this.img.push(document.getElementById(`image${i}`))
                    }
                }, 
                fruit() {
                    this.ctx.drawImage(this.img[2], this.ximage, this.yimage, 60, 60);
               

                }

            },
            mounted() {
              
                this.image()
                this.fruit()
                console.log(this.ximage,this.yimage)
                


            },
            watch:{
                yimage : function(){
                    this.ctx.clearRect(0, 0, document.getElementById('canvas').width, document.getElementById('canvas').height);
                    this.ctx = document.getElementById("canvas").getContext("2d")
                  
                    this.ctx.drawImage(this.img[Math.floor(Math.random()*7)], this.ximage, this.yimage,60,60);
                }
                
            }
        

    
}
</script>



