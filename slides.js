const slides = document.querySelectorAll("section div.slides")

slides.forEach(slide => {
    let current = 0;
    let z = 1000000000; 

    const images = slide.querySelectorAll("img")

    images.forEach(image => {
    z = z - 1
    image.style.zIndex = z
    })

    const timeline = gsap.timeline() 

    timeline
        .set(images, {
            x: () => {
                return 500 * Math.random() - 250
            }, 
            y: "500%", 
            rotation: () => {
                return 90 * Math.random() - 45
            }
        
        })
        .to(images, {x: 0, y: 0, stagger: -0.25})
        .to(images, {
            rotate: () => {
            return 16 * Math.random() - 8
        }
    })

    slide.addEventListener("click", function() {
    z = z - 1; //add 1 to z index every time is clicked

    let direction = "150%"
    let midAngle = 15

    if (Math.random() > 0.5) {
        direction = "-150%"
        midAngle = -15
    }

    const currentImage = images[current]

    const flipTimeline = gsap.timeline()

    flipTimeline
        .set(currentImage, { x: 0})
        .to(currentImage, { 
            x: direction,
            rotation: midAngle
        })
        .set(currentImage, {zIndex: z})
        .to(currentImage, {
            x : 0,
            rotation: () => {
                return 16 * Math.random() - 8
            }
        })

    images[current].style.zIndex = z;
    current = current + 1; //update current image until it runs out of images
    current = current % images.length //go back to start image when current runs out of images

    })

})

