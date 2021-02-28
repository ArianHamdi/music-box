import gsap from 'gsap'

const animation = (className, parent, ...elements) => {

    let coordinates = [];
    const length = elements.length

    for (const element of elements) {

        const node = element.current;

        coordinates.push({
            x: gsap.getProperty(node, 'offsetLeft'),
            translateX: gsap.getProperty(node, 'translateX'),
            y: gsap.getProperty(node, 'offsetTop'),
            translateY: gsap.getProperty(node, 'translateY')
        })
    }

    parent.current.classList.toggle(className);

    for (let i = 0; i < length; i++) {
        const node = elements[i].current;
        coordinates[i] = {
            ...coordinates[i],
            newX: gsap.getProperty(node, 'offsetLeft'),
            newY: gsap.getProperty(node, 'offsetTop'),
        }
    }

    for (let i = 0; i < length; i++) {
        const node = elements[i].current;
        const { translateX, x, newX, translateY, y, newY } = coordinates[i];
        const finalX = translateX + x - newX;
        const finalY = translateY + y - newY;
        gsap.fromTo(node, { x: finalX, y: finalY }, { x: 0, y: 0, duration: 1, ease: 'none' })
    }
}


export default animation;