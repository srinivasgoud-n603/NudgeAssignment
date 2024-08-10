function sleep(timeInSeconds)
{
    const t = new Date().getTime() + (timeInSeconds * 1000);
    while (new Date().getTime() <= t) {}
}

sleep(seconds);
