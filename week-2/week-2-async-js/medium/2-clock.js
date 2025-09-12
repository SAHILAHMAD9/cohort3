

const updateTime = () => {
    const now = new Date();
    const hours24 = now.getHours().toString();
    const hours12 = ((now.getHours() + 11) % 12 + 1).toString();
    const minutes = now.getMinutes().toString();
    const seconds = now.getSeconds().toString();
    const ampm = hours12 >= 12 ? "pm" : "am";

    console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
    console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);
}

setInterval(updateTime, 1000);