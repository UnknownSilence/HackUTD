import anime from 'animejs';

export function translate(element) {
    anime({
        targets: element,
        translateX: [
            {
                value: '-=50px',
                duration: 500,
            },
            {
                value: '+=50px',
                duration: 500,
            }
        ],


    });
}