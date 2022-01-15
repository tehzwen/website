import React, { useRef, useEffect } from 'react';

class Boid {
  constructor(context, x, y, id, destination, avoidDistance, leader = false, speed = 1) {
    this.ctx = context;
    this.radius = 2.5;
    this.position = { x, y };
    this.leader = leader;
    this.speed = speed;
    this.id = id;
    this.destination = destination;
    this.avoidDistance = avoidDistance;
    this.lineColor = "#ff130e3d";
    this.pointColor = "#27a4a88d";
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.pointColor;
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.pointColor;
    this.ctx.stroke();
  }

  moveToPosition() {
    let newPosition = { x: this.position.x, y: this.position.y };

    if (Math.abs(this.position.x - this.destination.x) > (this.speed + 0.5)) {
      if (this.position.x < this.destination.x) {
        newPosition.x = this.position.x + this.speed;
      } else {
        newPosition.x = this.position.x - this.speed;
      }
    }

    if (Math.abs(this.position.y - this.destination.y) > (this.speed + 0.5)) {
      if (this.position.y < this.destination.y) {
        newPosition.y = this.position.y + this.speed;
      } else {
        newPosition.y = this.position.y - this.speed;
      }
    }

    this.position = newPosition;
    return Math.abs(this.position.x - this.destination.x) <= (this.speed + 0.5) && Math.abs(this.position.y - this.destination.y) <= (this.speed + 0.5);
  }

  drawLine(destination) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.lineColor;
    this.ctx.moveTo(this.position.x, this.position.y);
    this.ctx.lineTo(destination.x, destination.y);
    this.ctx.stroke();
  }
}

const Boids = () => {
  const canvasRef = useRef(null);
  let width = 0;
  let height = 0;
  let leader = null;
  const boidDistance = 100;

  const getRandomIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    const centerX = canvasRef.current.width / 2;
    const centerY = canvasRef.current.height / 2;

    width = canvasRef.current.width;
    height = canvasRef.current.height;
    leader = new Boid(context, centerX, centerY, 0, { x: getRandomIntInRange(1, width), y: getRandomIntInRange(1, height) }, true);

    const boids = [leader];

    for (let i = 0; i < 500; i++) {
      boids.push(new Boid(context, getRandomIntInRange(1, width), getRandomIntInRange(1, height), i, { x: getRandomIntInRange(1, width), y: getRandomIntInRange(1, height) }, boidDistance));
    }

    canvasRef.current.addEventListener('click', (e) => {
      // reset that they reached single location
      for (let i = 0; i < boids.length; i++) {
        boids[i].destination = { x: e.screenX, y: e.screenY };
      }
    });

    randomizeTargets(boids);
    runBoids(context, boids);
  }, []);

  const randomizeTargets = (boids) => {
    setTimeout(() => {
      for (let i = 0; i < boids.length; i++) {
        boids[i].destination = { x: getRandomIntInRange(1, width), y: getRandomIntInRange(1, height) };
        // boids[i].avoidDistance = boidDistance;
      }
      randomizeTargets(boids);
    }, 3500)
  }

  const runBoids = (context, boids) => {
    for (let i = 0; i < boids.length; i++) {
      if (i === 0) {
        if (boids[i].moveToPosition()) {
          boids[i].destination = { x: getRandomIntInRange(1, width), y: getRandomIntInRange(1, height) };
        }
      } else {
        if (boids[i].moveToPosition()) {
          boids[i].destination = { x: boids[0].position.x, y: boids[0].position.y };
        }

        for (let j = 0; j < boids.length; j++) {
          if (boids[i].id !== boids[j].id) {
            let distance = Math.abs(boids[j].position.x - boids[i].position.x) + Math.abs(boids[j].position.y - boids[i].position.y);
            if (distance > boids[i].avoidDistance) {
              boids[i].avoidDistance += 10;
              boids[i].destination = { x: getRandomIntInRange(1, width), y: getRandomIntInRange(1, height) };
            } else {
              if (distance < boidDistance / 3) {
                boids[i].drawLine(boids[j].position);
              }
            }
          }
        }
      }
      boids[i].draw();
    }

    setTimeout(() => {
      if (canvasRef.current) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        runBoids(context, boids);
      }
    }, 30);
  }

  return (
    <canvas
      style={{ position: 'absolute', width: window.innerWidth + "px", height: window.innerHeight + "px" }}
      width={window.devicePixelRatio * window.innerWidth}
      height={window.devicePixelRatio * window.innerHeight}
      ref={canvasRef} />
  )
}


export {
  Boids
};
