const glide = new Glide(".glide")
const captionsEL = document.querySelectorAll(".slide-caption");

glide.on(["mount.after", "run.after"], () => {
    const caption = captionsEL[glide.index];
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, { start: 300 }), //等300mm出现第一个，然后等400mm出现第二个，400mm后出现第三个
        translateY: [anime.stagger([40, 10]), 0], //从h1到btn，出现向下的越来越少
    });
});

glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    });
});
glide.mount();