const slideshow = {

    photoList: ["Olivia", "Sarah", "Ruby", "Cat"],
 
    currentPhotoIndex: -1,
 
    nextPhoto() {
       if(this.currentPhotoIndex<3) {
          this.currentPhotoIndex++
          console.log(this.photoList[this.currentPhotoIndex])
       }
       else {
        /* Automatically pause the slideshow if it gets to the end of the photolist while playing. */
          this.pause(),
          console.log("End of slideshow.")
          }
       },
 
    prevPhoto() {
       if(this.currentPhotoIndex>0) {
          this.currentPhotoIndex--
          console.log(this.photoList[this.currentPhotoIndex])
       }
       else {
          console.log("Beginning of slideshow.")
       }
 
    },
 
    getCurrentPhoto() {
       console.log(this.photoList[this.currentPhotoIndex])
    },

    /* Create an empty property named "playInterval". */
    playInterval:null,
    /* Create a play function that moves to the next photo every 2000ms until the end of the slideshow. */
        play: function(){
            this.playInterval = setInterval(this.nextPhoto.bind(this), 2000)
        },
    /* Create a pause function that stops the slideshow. */
        pause(){
            clearInterval(this.playInterval)
        }
    }

slideshow.play();