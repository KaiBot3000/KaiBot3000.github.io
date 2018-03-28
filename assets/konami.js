
if (window.addEventListener) {
    const konami = '38,38,40,40,37,39,37,39,66,65';
    let keys = [];

    window.addEventListener('keydown', function(event) {
        keys.push(event.keyCode);
        if (keys.toString().indexOf(konami) >= 0) {
            console.log('you made it!');
            keys = [];
        }
    }, true);
}
