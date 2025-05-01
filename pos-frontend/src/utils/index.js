export const getRandomBG = () => {
    const colors = [
        "#f6b100",
        "#2e4a40",
        "#664a04",
                
    ];
    const color = colors[Math.floor(Math.random() * colors.length) ];
    return "bg-[" + color + "]";
}

export const getBgColor = () => {
    const bgarr = ["#b73e3e", "#5b45b0", "#735f32", "#1d2569", "#285430"]
    const randomBg = Math.floor(Math.random() * bgarr.length);
    const color = bgarr[randomBg];
    return color;
}