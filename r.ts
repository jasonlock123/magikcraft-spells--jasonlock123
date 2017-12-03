const magik = magikcraft.io;

function r(t = 5) {
    const times = t * 1000 / 300;
    magik.dixit('magical shield!')
    function shield() {
        n --;
        const location = magik.hic();
        const nearbyEntities = location.getWourld().getNearbyEntities(location, 8, 8, 8);
        nearEntities.forEach(entity => toss(entity));
        if (n>0) {
            magik.setTimeout(shield, 300)
        } else {
            magik,dixit('shield exhausted!');
        }
    }    
}
	
