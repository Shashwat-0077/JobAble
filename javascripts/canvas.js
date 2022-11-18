const canvas = document.querySelector("canvas.main-page-background");

const ctx = canvas.getContext("2d");

const universalRadius = 60;
const universalSpeed = 0.15;
let numberOfCircles = 25;

if (window.innerWidth <= 1100) {
    numberOfCircles = 15;
}
if (window.innerWidth <= 950) {
    numberOfCircles = 10;
}

let head = window.getComputedStyle(canvas.closest(".head"));
let parentWidth = parseInt(head.width);
let parentHeight = parseInt(head.height);

class Circle {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color =
            Math.random() > 0.5
                ? "rgba(0 ,0 ,0, 0.1 )"
                : "rgba(255 ,255 ,255, 0.2 )";
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, universalRadius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();
    }

    update() {
        this.draw();
        if (
            this.x + universalRadius > parentWidth ||
            this.x - universalRadius < 0
        ) {
            this.dx = -this.dx;
        }
        if (
            this.y + universalRadius > parentHeight ||
            this.y - universalRadius < 0
        ) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

let circles = [];

for (let i = 0; i < numberOfCircles; i++) {
    let x =
        Math.random() * (parentWidth - universalRadius * 2) + universalRadius;
    let y =
        Math.random() * (parentHeight - universalRadius * 2) + universalRadius;
    let dx = (Math.random() - 0.5) * universalSpeed;
    let dy = (Math.random() - 0.5) * universalSpeed;
    circles.push(new Circle(x, y, dx, dy));
}

function animate() {
    requestAnimationFrame(animate);

    head = window.getComputedStyle(canvas.closest(".head"));
    parentWidth = parseInt(head.width);
    parentHeight = parseInt(head.height);

    canvas.width = parentWidth;
    canvas.height = parentHeight;
    ctx.strokeStyle = "transparent";

    ctx.clearRect(0, 0, parentWidth, parentHeight);
    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
    }
}

animate();
