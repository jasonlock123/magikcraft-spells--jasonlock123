const magik = magikcraft.io;

function echo(msg) {
    magik.doNTimes(() => magik.dixit(msg), 3);
}