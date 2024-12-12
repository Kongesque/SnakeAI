"use client"

import React, { useRef, useEffect} from 'react';
import p5 from 'p5';

const SnakeGame: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      let blocksX = 40, blocksY = 20;
      let maxBlocks = 1000, blockSize: number, xOffset = 0, yOffset = 0, s: Snake, pause = false, speedMultiplier = 1, hc: HamiltonianCycle, outlineLength = 3, setup_i = 0;
    
      const sketch = (p: p5) => {
          p.setup = () => {
              setup_i++;
              let a = canvasRef.current;
              if (!a) return; // Ensure canvasRef.current is defined
              blockSize = Math.min(a.offsetWidth / blocksX, a.offsetHeight / blocksY);
              p.createCanvas(a.offsetWidth - blockSize, a.offsetHeight - blockSize).parent(a);
              p.pixelDensity(15);
              setBlocks();
              blockSize = Math.min(p.width / blocksX, p.height / blocksY);
              outlineLength = blockSize / 15;
              yOffset = xOffset = 0;
              if (setup_i == 1) p.setup();
              s = new Snake(p);
              hc = new HamiltonianCycle(blocksX, blocksY, p);
              s.resetOnHamiltonian(hc.cycle);
              p.frameRate(30);
            
              let isSpeedUp = false;
              const toggleSpeed = () => {
                  isSpeedUp = !isSpeedUp;
                  speedMultiplier = isSpeedUp ? 10 : 1;
              }
              
              if (a) {
                a.addEventListener('mouseover', toggleSpeed);
                a.addEventListener('mouseout', toggleSpeed);
                a.addEventListener('touchstart', toggleSpeed);
              }
              
              window.addEventListener("resize", resize);
          };
    
          const setBlocks = () => {
              let a = 1;
              for (; ;) {
                  if (Math.floor(p.width / a) * Math.floor(p.height / a) < maxBlocks) {
                      blockSize = a;
                      blocksX = Math.floor(p.width / blockSize) - Math.floor(p.width / blockSize) % 2 - 2;
                      blocksY = Math.floor(p.height / blockSize) - Math.floor(p.height / blockSize) % 2;
                      break;
                  } else a++;
              }
          };
          const resize = () => {
              blockSize = Math.min(p.width / blocksX, p.height / blocksY);
              outlineLength = blockSize / 15;
              xOffset = (p.width - blockSize * blocksX) / 2;
              yOffset = (p.height - blockSize * blocksY) / 2;
              p.setup();
          }
          let resizeDelay: any;
          const windowResized = () => {
              clearTimeout(resizeDelay);
              resizeDelay = setTimeout(resize, 500)
          }
           p.windowResized = windowResized
          p.draw = () => {
              if (!pause) {
                p.background("#202222");
                p.stroke("#202222");
                p.strokeWeight(1);
                p.fill(20);
                p.rect(0, 0, p.width, yOffset);
                p.rect(0, 0, xOffset, p.height);
                p.rect(p.width, p.height, -p.width, -yOffset);
                p.rect(p.width, p.height, -xOffset, -p.height);
                p.push();
                p.translate(xOffset, yOffset);
                p.fill(0);
                s.show();
                for (let a = 0; a < speedMultiplier; a++) s.update();
                p.pop();
              }
          };

         class Snake {
              x: number;
              y: number;
              tailBlocks: p5.Vector[];
              velX: number;
              velY: number;
              apple: Apple;
              addCount: number;
              survivalMode: boolean;
              dead: boolean;
              path: any;
              weWin: boolean;
              lateGame: boolean;
              noMoreAStar: boolean;
              searchForLongestPathModeActive: boolean;
              controlledByPlayer: boolean;
              cycle: any;
              headCyclePosition: number;
              tailCyclePosition: number;
              constructor(p: p5) {
                this.x = Math.floor(blocksX / 2);
                this.y = Math.floor(blocksY / 2);
                this.tailBlocks = [];
                this.tailBlocks.push(p.createVector(this.x - 3, this.y));
                this.tailBlocks.push(p.createVector(this.x - 2, this.y));
                this.tailBlocks.push(p.createVector(this.x - 1, this.y));
                this.velX = 1;
                this.velY = 0;
                this.apple = new Apple(this,p);
                this.addCount = 0;
                this.survivalMode = this.dead = false;
                this.path = null;
                this.weWin = this.lateGame = this.noMoreAStar = this.searchForLongestPathModeActive = this.controlledByPlayer = false;
                this.cycle = null;
                this.headCyclePosition = 0;
                this.tailCyclePosition = 0;
              }
              resetOnHamiltonian(a: any) {
                this.cycle = a;
                this.tailBlocks = [];
                this.tailBlocks.push(p.createVector(a[0].x, a[0].y));
                this.tailBlocks.push(p.createVector(a[1].x, a[1].y));
                this.tailBlocks.push(p.createVector(a[2].x, a[2].y));
                this.x = a[3].x;
                this.y = a[3].y;
                this.apple = new Apple(this,p);
                this.headCyclePosition = 3;
                this.tailCyclePosition = 0;
              }
                show() {
                    p.noStroke();
                    p.fill("#e8e8e6");
                    p.ellipse(this.x * blockSize + blockSize / 2, this.y * blockSize + blockSize / 2, blockSize - outlineLength * 2, blockSize - outlineLength * 2);
                    p.rect((this.x + this.tailBlocks[this.tailBlocks.length - 1].x) * blockSize / 2 + outlineLength, (this.y + this.tailBlocks[this.tailBlocks.length - 1].y) * blockSize / 2 + outlineLength, blockSize - outlineLength * 2, blockSize - outlineLength * 2);
                    for (var a = 0; a < this.tailBlocks.length; a++)
                        p.ellipse(this.tailBlocks[a].x * blockSize + blockSize / 2, this.tailBlocks[a].y * blockSize + blockSize / 2, blockSize - outlineLength * 2, blockSize - outlineLength * 2),
                            a < this.tailBlocks.length - 1 && p.rect((this.tailBlocks[a].x + this.tailBlocks[a + 1].x) / 2 * blockSize + outlineLength, (this.tailBlocks[a].y + this.tailBlocks[a + 1].y) / 2 * blockSize + outlineLength, blockSize - outlineLength * 2, blockSize - outlineLength * 2);
                    this.weWin || this.apple.show();
                }
                move() {
                    if (!this.weWin) {
                        if (!this.controlledByPlayer)
                            if ((!this.path || this.path.pathCounter >= this.path.pathLength) && this.calculatePath(), this.path && this.path.pathLength !== 0) {
                                var a = this.path.getNextMove();
                                this.velX = a.x;
                                this.velY = a.y;
                            } else {
                                var a = this.getNextPosition();
                                this.velX = a.x - this.x;
                                this.velY = a.y - this.y;
                            }
                        this.addCount <= 0 ? (this.tailBlocks.splice(0, 1), this.tailCyclePosition = (this.tailCyclePosition + 1) % this.cycle.length) : this.addCount--;
                        this.tailBlocks.push(p.createVector(this.x, this.y));
                        this.x += this.velX;
                        this.y += this.velY;
                    }
                }
                getNextPosition() {
                    this.appleCyclePosition = hc.getNodeNo(this.apple.x, this.apple.y);
                    let a = hc.getPossiblePositionsFrom(this.x, this.y),
                        b = 100000,
                        c = 0;
                    for (let d = 0; d < a.length; d++) {
                        let e = this.appleCyclePosition - a[d];
                        for (; e < 0;) e += this.cycle.length;
                        !this.overTakesTail(this.cycle[a[d]]) && e < b && (b = e, c = d);
                    }
                    return b === 100000 ? this.cycle[(hc.getNodeNo(this.x, this.y) + 1) % this.cycle.length] : this.cycle[a[c]];
                }
              overTakesTail(a: any, b?: any, c?: any) {
                  b = b ? b.cycleNo : hc.getNodeNo(this.x, this.y);
                  c = c ? hc.getNodeNo(c.x, c.y) : hc.getNodeNo(this.tailBlocks[0].x, this.tailBlocks[0].y);
                  if (this.getDistanceBetweenPoints(b, c) <= 50 + this.addCount) return true;
                  c = c - 50 - this.addCount;
                  c < 0 && (c += this.cycle.length);
                  return this.getDistanceBetweenPoints(b, a.cycleNo) >= this.getDistanceBetweenPoints(b, c) ? true : false;
              }
                getPathBasedOnAStar() {
                  for (var a of this.cycle) a.resetForAStar();
                    this.appleCyclePosition = hc.getNodeNo(this.apple.x, this.apple.y);
                  var b = this.cycle[hc.getNodeNo(this.x, this.y)];
                    a = [];
                    let c: any;
                    b = new HPath(b, this.cycle[this.appleCyclePosition],p);
                    for (a.push(b);;) {
                        if (a.length === 0) return c;
                      b = a.shift();
                        if (c && b.pathLength >= c.pathLength) continue;
                        if (b.distanceToApple === 0) {
                            if (c == null || b.pathLength < c.pathLength) c = b.clone();
                            continue;
                        }
                        let e = b.getLastNode();
                        if (!e.alreadyVisited || b.pathLength < e.shortestDistanceToThisPoint) {
                            e.alreadyVisited = true;
                            e.shortestDistanceToThisPoint = b.pathLength;
                            for (var d of e.edges) {
                              if (this.overTakesTail(d, e, b.getSnakeTailPositionAfterFollowingPath(this)) && d.cycleNo !== e.cycleNo + 1) continue;
                                let f = b.clone();
                                f.addToTail(d);
                                f.getLastNode().alreadyVisited && f.pathLength > f.getLastNode().shortestDistanceToThisPoint || a.push(f);
                            }
                        }
                        a.sort((f, n) => f.distanceToApple + f.pathLength - (n.distanceToApple + n.pathLength));
                    }
                }
                getDistanceBetweenPoints(a: any, b: any) {
                  for (a = b - a; a < 0;) a += this.cycle.length;
                  return a;
              }
              checkFuturePos() {
                  this.x += this.velX;
                  this.y += this.velY;
                  for (var a = 0; a < this.tailBlocks.length; a++) this.tailBlocks[a].x === this.x && this.tailBlocks[a].y === this.y && (this.dead = true);
                  if (this.x < 0 || this.x >= blocksX || this.y < 0 || this.y >= blocksY) this.dead = true;
                  this.x -= this.velX;
                  this.y -= this.velY;
                  this.dead && (this.dead = false, pause = true);
              }
                update() {
                    this.dead || (this.move(), this.checkCollisions());
                }
                checkCollisions() {
                    if (blocksX * blocksY - (this.tailBlocks.length + 1) <= 0) this.weWin = true, p.setup();
                    else {
                        for (var a = 0; a < this.tailBlocks.length; a++) if (this.tailBlocks[a].x === this.x && this.tailBlocks[a].y === this.y) {
                            this.dead = true;
                            return;
                        }
                        this.x < 0 || this.x >= blocksX || this.y < 0 || this.y >= blocksY ? this.dead = true : this.x === this.apple.x && this.y === this.apple.y && this.ateApple();
                    }
                }
                ateApple() {
                    this.addCount += 4;
                    this.apple = new Apple(this,p);
                    this.calculatePath();
                }
                calculatePath() {
                    this.path = this.getPathBasedOnAStar();
                }
                isAppleOnSnake(a: any) {
                    return this.snakeAtPosition(a.x, a.y);
                }
                snakeAtPosition(a: any, b: any) {
                    return this.snakeTailAtPosition(a, b) || this.x == a && this.y == b;
                }
                snakeTailAtPosition(a: any, b: any) {
                  for (var c = 0; c < this.tailBlocks.length; c++) if (this.tailBlocks[c].x == a && this.tailBlocks[c].y == b) return true;
                    return false;
                }
            }
          class Apple {
              x: number;
              y: number;
              constructor(a: Snake,p: p5) {
                  this.x = Math.floor(p.random(blocksX));
                  for (this.y = Math.floor(p.random(blocksY)); a.isAppleOnSnake(this);) this.x = Math.floor(p.random(blocksX)), this.y = Math.floor(p.random(blocksY));
                
              }
            show() {
                p.noStroke();
                p.fill("#21b8cd");
                p.push();
                p.translate(this.x * blockSize + outlineLength, this.y * blockSize + outlineLength);
                p.ellipse(blockSize / 2, blockSize / 2, blockSize - 2 * outlineLength, blockSize - 2 * outlineLength);
                p.pop();
            }
                isAtPosition(a: any, b: any) {
                  return this.x === a && this.y === b;
              }
          }

          class HamiltonianCycle {
              w: number;
              h: number;
              cycle: any[];
              spanningTreeNodes: HNode[];
              constructor(a: number, b: number,p: p5) {
                  this.w = a;
                  this.h = b;
                this.cycle = [];
                  this.spanningTreeNodes = [];
                this.createCycle(p);
              }
              createCycle(p: p5) {
                this.createSpanningTree(p);
                  var a:any[] = [];
                  let b:HNode[] = [];
                  for (a = 0; a < this.w; a++)
                      for (var c = 0; c < this.h; c++) b.push(new HNode(a, c));
                  for (var d of b) d.setEdges(b);
                  for (a = 0; a < this.spanningTreeNodes.length; a++) {
                      d = this.spanningTreeNodes[a];
                      for (var e of d.spanningTreeAdjacentNodes) {
                          c = (p: any, t: any, q: any, u: any) => {
                              t + this.h * p >= b.length || u + this.h * q >= b.length || (p = b[t + this.h * p], q = b[u + this.h * q], p.spanningTreeAdjacentNodes.push(q), q.spanningTreeAdjacentNodes.push(p))
                          };
                          let k = d.getDirectionTo(e),
                              l = d.x * 2,
                              m = d.y * 2;
                          k.x === 1 ? (c(l + 1, m, l + 2, m), c(l + 1, m + 1, l + 2, m + 1)) :
                              k.y === 1 && (c(l, m + 1, l, m + 2), c(l + 1, m + 1, l + 1, m + 2));
                      }
                  }
                  a = b.filter(k => k.spanningTreeAdjacentNodes.length === 1);
                
                    e = [];
                    for (var f of a) {
                        a = f.spanningTreeAdjacentNodes[0].getDirectionTo(f);
                        a.x += f.x;
                        a.y += f.y;
                        a = new HEdge(b[a.y + this.h * a.x], f);
                        d = true;
                        for (var n of e) if (n.isEqualTo(a)) {
                            d = false;
                            break;
                        }
                        d && e.push(a);
                    }
                
                  for (let k of e) k.connectNodes();
                  a = b.filter(k => k.spanningTreeAdjacentNodes.length === 1);
                    e = [];
                    for (var g of a)
                        for (var h of a)
                            if (p.dist(g.x, g.y, h.x, h.y) === 1 && Math.floor(g.x / 2) === Math.floor(h.x / 2) && Math.floor(g.y / 2) === Math.floor(h.y / 2)) {
                                f = new HEdge(h, g);
                                n = true;
                                for (var r of e) if (r.isEqualTo(f)) {
                                    n = false;
                                    break;
                                }
                                n && e.push(f);
                                break;
                            }
                  for (let k of e) k.connectNodes();
                a = [b.getRandomElement()];
                  g = a[0];
                  for (h = a[0].spanningTreeAdjacentNodes[0]; h !== a[0];) {
                      r = h.spanningTreeAdjacentNodes[0];
                      r === g && (r = h.spanningTreeAdjacentNodes[1]);
                      a.push(h);
                      g = h;
                      h = r;
                  }
                  this.cycle = a;
                for (g = 0; g < this.cycle.length; g++) this.cycle[g].cycleNo = g;
              }
              show(p: p5) {
                  for (let a = 0; a < this.cycle.length; a++)
                      p.push(),
                          p.translate(blockSize / 2, blockSize / 2),
                          p.scale(blockSize),
                          p.fill(255),
                          p.textAlign(p.CENTER, p.CENTER),
                          p.textSize(.3),
                          p.text(a, this.cycle[a].x, this.cycle[a].y),
                          p.stroke(255, 100),
                          p.strokeWeight(.1),
                          a !== this.cycle.length - 1 ? p.line(this.cycle[a].x, this.cycle[a].y, this.cycle[a + 1].x, this.cycle[a + 1].y) :
                              p.line(this.cycle[a].x, this.cycle[a].y, this.cycle[0].x, this.cycle[0].y),
                          p.pop();
              }
              createSpanningTree(p:p5) {
                  let a: HNode[] = [];
                  for (var b = 0; b < this.w / 2; b++) for (var c = 0; c < this.h / 2; c++) a.push(new HNode(b, c));
                  for (var d of a) d.setEdges(a);
                b = [];
                  c = a[Math.floor(p.random(a.length))];
                  b.push(new HEdge(c, c.edges[0]));
                  let e = [c, c.edges[0]];
                  for (; e.length < a.length;) {
                      c = e.getRandomElement();
                      d = c.edges.filter(f => !e.includes(f));
                      d.length !== 0 && (d = d.getRandomElement(), e.push(d), b.push(new HEdge(c, d)));
                  }
                  for (let f of a) f.setSpanningTreeEdges(b);
                this.spanningTreeNodes = a;
                }
              getNextPosition(a: any, b: any) {
                  for (let c = 0; c < this.cycle.length; c++) if (this.cycle[c].x === a && this.cycle[c].y === b) return this.cycle[(c + 1) % this.cycle.length];
                  return null;
              }
              getNodeNo(a: any, b: any) {
                  for (let c = 0; c < this.cycle.length; c++) if (this.cycle[c].x === a && this.cycle[c].y === b) return c;
                  return -1;
              }
              getPossiblePositionsFrom(a: any, b: any) {
                  a = this.cycle[this.getNodeNo(a, b)];
                  b = [];
                  for (let c of a.edges) b.push(this.getNodeNo(c.x, c.y));
                  return b;
              }
          }
           
          (Array.prototype as any).getRandomElement = function () {
            return this[Math.floor(p.random(this.length))];
          };
          class HNode {
              x: number;
              y: number;
              spanningTreeAdjacentNodes: HNode[];
              cycleNo: number;
              alreadyVisited: boolean;
              shortestDistanceToThisPoint: number;
              edges: HNode[];
            constructor(a: number, b: number) {
                  this.x = a;
                  this.y = b;
                  this.spanningTreeAdjacentNodes = [];
                  this.cycleNo = -1;
                  this.alreadyVisited = false;
                  this.shortestDistanceToThisPoint = 0;
                this.edges = [];
              }
              setEdges(a: HNode[]) {
                this.edges = a.filter(b => p.dist(b.x, b.y, this.x, this.y) === 1)
              }
              setSpanningTreeEdges(a: HEdge[]) {
                  for (let b of a) b.contains(this) && this.spanningTreeAdjacentNodes.push(b.getOtherNode(this));
              }
              getNextNodeMovingLeft(a: HNode): HNode {
                let b = a.getDirectionTo(this);
                  a = [];
                  for (var c of this.spanningTreeAdjacentNodes) a.push(this.getDirectionTo(c));
                  for (c = getLeftOf(b); !a.includes(c);) c = getRightOf(c);
                  return this.spanningTreeAdjacentNodes[a.indexOf(c)];
              }
              getDirectionTo(a: HNode): { x: number; y: number; } {
                return { x: a.x - this.x, y: a.y - this.y };
              }
              resetForAStar() {
                  this.alreadyVisited = false;
                  this.shortestDistanceToThisPoint = 0;
              }
          }
           function getLeftOf(a: { x: number; y: number; }): { x: number; y: number; } {
              return a.x === 0 && a.y === 1 ? { x: 1, y: 0 } :
                  a.x === 0 && a.y === -1 ? { x: -1, y: 0 } :
                      a.x === 1 ? { x: 0, y: -1 } : { x: 0, y: 1 }
          }
          function getRightOf(a: { x: number; y: number; }): { x: number; y: number; } {
              return a.x === 0 && a.y === 1 ? { x: -1, y: 0 } :
                  a.x === 0 && a.y === -1 ? { x: 1, y: 0 } :
                      a.x === 1 ? { x: 0, y: 1 } : { x: 0, y: -1 }
          }
          class HEdge {
              node1: HNode;
              node2: HNode;
              constructor(a: HNode, b: HNode) {
                  this.node1 = a;
                  this.node2 = b;
              }
              isEqualTo(a: HEdge): boolean {
                  return this.node1 === a.node1 && this.node2 === a.node2 || this.node1 === a.node2 && this.node2 === a.node1;
              }
              contains(a: HNode): boolean {
                  return a === this.node1 || a === this.node2;
              }
              getOtherNode(a: HNode): HNode {
                  return a === this.node1 ? this.node2 : this.node1;
              }
              connectNodes() {
                  this.node1.spanningTreeAdjacentNodes.push(this.node2);
                  this.node2.spanningTreeAdjacentNodes.push(this.node1);
              }
          }
          class HPath {
              pathLength: number;
              nodesInPath: HNode[];
              finishNode: HNode;
              distanceToApple: number;
              pathCounter: number;
              constructor(a: HNode, b: HNode, p:p5) {
                  this.pathLength = 0;
                  this.nodesInPath = [a];
                  this.finishNode = b;
                  this.distanceToApple = 0;
                  this.setDistanceToApple(p);
                  this.pathCounter = 0;
                
              }
              setDistanceToApple(p: p5) {
                  this.distanceToApple = p.dist(this.finishNode.x, this.finishNode.y, this.getLastNode().x, this.getLastNode().y);
              }
              addToTail(a: HNode) {
                  this.nodesInPath.push(a);
                  this.pathLength += 1;
                  this.setDistanceToApple(p);
              }
              getLastNode(): HNode {
                  return this.nodesInPath[this.nodesInPath.length - 1];
              }
              getSnakeTailPositionAfterFollowingPath(a: Snake): HNode {
                  return this.pathLength - a.addCount < a.tailBlocks.length ?
                      a.tailBlocks[Math.max(0, this.pathLength - a.addCount)]
                      :
                      this.nodesInPath[this.pathLength - a.addCount - a.tailBlocks.length];
                }
              getNextMove(): { x: number; y: number; } {
                  let a = this.nodesInPath[this.pathCounter + 1].x - this.nodesInPath[this.pathCounter].x,
                      b = this.nodesInPath[this.pathCounter + 1].y - this.nodesInPath[this.pathCounter].y;
                  this.pathCounter++;
                  return { x: a, y: b };
              }
              clone(): HPath {
                  let a = new HPath(this.nodesInPath[0], this.finishNode,p);
                  a.nodesInPath = [...this.nodesInPath];
                  a.pathLength = this.pathLength;
                  a.distanceToApple = this.distanceToApple;
                  return a;
              }
          }
      };
     if (canvasRef.current) {
         new p5(sketch, canvasRef.current);
     }
    }, []);
    
    return (
        <div className="w-full aspect-[2.39/1] bg-[#202222] rounded-md border-[2px] border-[#3d3f40]" id="snake-game-container">
            <div className="flex justify-center items-center h-full" id="snake-game" ref={canvasRef}></div>
        </div>
        
    );
};

export default SnakeGame;