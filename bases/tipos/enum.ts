(() => {

    enum audioLevel{
        min = 1,
        medium,
        medium2,
        max = 10
    }

    let currentAudio:audioLevel = audioLevel.max

    console.log({currentAudio})

})()