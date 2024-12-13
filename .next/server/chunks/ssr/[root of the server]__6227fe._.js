module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/snake.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$p5$2f$lib$2f$p5$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/p5/lib/p5.min.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const SnakeGame = ()=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let blocksX = 40, blocksY = 20;
        let maxBlocks = 1000, blockSize, xOffset = 0, yOffset = 0, s, pause = false, speedMultiplier = 1, hc, outlineLength = 3, setup_i = 0;
        const sketch = (p)=>{
            p.setup = ()=>{
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
                const toggleSpeed = ()=>{
                    isSpeedUp = !isSpeedUp;
                    speedMultiplier = isSpeedUp ? 10 : 1;
                };
                if (a) {
                    a.addEventListener('mouseover', toggleSpeed);
                    a.addEventListener('mouseout', toggleSpeed);
                    a.addEventListener('touchstart', toggleSpeed);
                }
                window.addEventListener("resize", resize);
            };
            const setBlocks = ()=>{
                let a = 1;
                for(;;){
                    if (Math.floor(p.width / a) * Math.floor(p.height / a) < maxBlocks) {
                        blockSize = a;
                        blocksX = Math.floor(p.width / blockSize) - Math.floor(p.width / blockSize) % 2 - 2;
                        blocksY = Math.floor(p.height / blockSize) - Math.floor(p.height / blockSize) % 2;
                        break;
                    } else a++;
                }
            };
            const resize = ()=>{
                blockSize = Math.min(p.width / blocksX, p.height / blocksY);
                outlineLength = blockSize / 15;
                xOffset = (p.width - blockSize * blocksX) / 2;
                yOffset = (p.height - blockSize * blocksY) / 2;
                p.setup();
            };
            let resizeDelay;
            const windowResized = ()=>{
                clearTimeout(resizeDelay);
                resizeDelay = setTimeout(resize, 500);
            };
            p.windowResized = windowResized;
            p.draw = ()=>{
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
                    for(let a = 0; a < speedMultiplier; a++)s.update();
                    p.pop();
                }
            };
            class Snake {
                x;
                y;
                tailBlocks;
                velX;
                velY;
                apple;
                addCount;
                survivalMode;
                dead;
                path;
                weWin;
                lateGame;
                noMoreAStar;
                searchForLongestPathModeActive;
                controlledByPlayer;
                cycle;
                headCyclePosition;
                tailCyclePosition;
                appleCyclePosition;
                constructor(p){
                    this.x = Math.floor(blocksX / 2);
                    this.y = Math.floor(blocksY / 2);
                    this.tailBlocks = [];
                    this.tailBlocks.push(p.createVector(this.x - 3, this.y));
                    this.tailBlocks.push(p.createVector(this.x - 2, this.y));
                    this.tailBlocks.push(p.createVector(this.x - 1, this.y));
                    this.velX = 1;
                    this.velY = 0;
                    this.apple = new Apple(this, p);
                    this.addCount = 0;
                    this.survivalMode = this.dead = false;
                    this.path = null;
                    this.weWin = this.lateGame = this.noMoreAStar = this.searchForLongestPathModeActive = this.controlledByPlayer = false;
                    this.cycle = null;
                    this.headCyclePosition = 0;
                    this.tailCyclePosition = 0;
                }
                resetOnHamiltonian(a) {
                    this.cycle = a;
                    this.tailBlocks = [];
                    this.tailBlocks.push(p.createVector(a[0].x, a[0].y));
                    this.tailBlocks.push(p.createVector(a[1].x, a[1].y));
                    this.tailBlocks.push(p.createVector(a[2].x, a[2].y));
                    this.x = a[3].x;
                    this.y = a[3].y;
                    this.apple = new Apple(this, p);
                    this.headCyclePosition = 3;
                    this.tailCyclePosition = 0;
                }
                show() {
                    p.noStroke();
                    p.fill("#e8e8e6");
                    p.ellipse(this.x * blockSize + blockSize / 2, this.y * blockSize + blockSize / 2, blockSize - outlineLength * 2, blockSize - outlineLength * 2);
                    p.rect((this.x + this.tailBlocks[this.tailBlocks.length - 1].x) * blockSize / 2 + outlineLength, (this.y + this.tailBlocks[this.tailBlocks.length - 1].y) * blockSize / 2 + outlineLength, blockSize - outlineLength * 2, blockSize - outlineLength * 2);
                    for(var a = 0; a < this.tailBlocks.length; a++)p.ellipse(this.tailBlocks[a].x * blockSize + blockSize / 2, this.tailBlocks[a].y * blockSize + blockSize / 2, blockSize - outlineLength * 2, blockSize - outlineLength * 2), a < this.tailBlocks.length - 1 && p.rect((this.tailBlocks[a].x + this.tailBlocks[a + 1].x) / 2 * blockSize + outlineLength, (this.tailBlocks[a].y + this.tailBlocks[a + 1].y) / 2 * blockSize + outlineLength, blockSize - outlineLength * 2, blockSize - outlineLength * 2);
                    this.weWin || this.apple.show();
                }
                move() {
                    if (!this.weWin) {
                        if (!this.controlledByPlayer) if ((!this.path || this.path.pathCounter >= this.path.pathLength) && this.calculatePath(), this.path && this.path.pathLength !== 0) {
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
                    let a = hc.getPossiblePositionsFrom(this.x, this.y), b = 100000, c = 0;
                    for(let d = 0; d < a.length; d++){
                        let e = this.appleCyclePosition - a[d];
                        for(; e < 0;)e += this.cycle.length;
                        !this.overTakesTail(this.cycle[a[d]]) && e < b && (b = e, c = d);
                    }
                    return b === 100000 ? this.cycle[(hc.getNodeNo(this.x, this.y) + 1) % this.cycle.length] : this.cycle[a[c]];
                }
                overTakesTail(a, b, c) {
                    b = b ? b.cycleNo : hc.getNodeNo(this.x, this.y);
                    c = c ? hc.getNodeNo(c.x, c.y) : hc.getNodeNo(this.tailBlocks[0].x, this.tailBlocks[0].y);
                    if (this.getDistanceBetweenPoints(b, c) <= 50 + this.addCount) return true;
                    c = c - 50 - this.addCount;
                    c < 0 && (c += this.cycle.length);
                    return this.getDistanceBetweenPoints(b, a.cycleNo) >= this.getDistanceBetweenPoints(b, c) ? true : false;
                }
                getPathBasedOnAStar() {
                    for (var a of this.cycle)a.resetForAStar();
                    this.appleCyclePosition = hc.getNodeNo(this.apple.x, this.apple.y);
                    var b = this.cycle[hc.getNodeNo(this.x, this.y)];
                    a = [];
                    let c;
                    b = new HPath(b, this.cycle[this.appleCyclePosition], p);
                    for(a.push(b);;){
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
                            for (var d of e.edges){
                                if (this.overTakesTail(d, e, b.getSnakeTailPositionAfterFollowingPath(this)) && d.cycleNo !== e.cycleNo + 1) continue;
                                let f = b.clone();
                                f.addToTail(d);
                                f.getLastNode().alreadyVisited && f.pathLength > f.getLastNode().shortestDistanceToThisPoint || a.push(f);
                            }
                        }
                        a.sort((f, n)=>f.distanceToApple + f.pathLength - (n.distanceToApple + n.pathLength));
                    }
                }
                getDistanceBetweenPoints(a, b) {
                    for(a = b - a; a < 0;)a += this.cycle.length;
                    return a;
                }
                checkFuturePos() {
                    this.x += this.velX;
                    this.y += this.velY;
                    for(var a = 0; a < this.tailBlocks.length; a++)this.tailBlocks[a].x === this.x && this.tailBlocks[a].y === this.y && (this.dead = true);
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
                        for(var a = 0; a < this.tailBlocks.length; a++)if (this.tailBlocks[a].x === this.x && this.tailBlocks[a].y === this.y) {
                            this.dead = true;
                            return;
                        }
                        this.x < 0 || this.x >= blocksX || this.y < 0 || this.y >= blocksY ? this.dead = true : this.x === this.apple.x && this.y === this.apple.y && this.ateApple();
                    }
                }
                ateApple() {
                    this.addCount += 4;
                    this.apple = new Apple(this, p);
                    this.calculatePath();
                }
                calculatePath() {
                    this.path = this.getPathBasedOnAStar();
                }
                isAppleOnSnake(a) {
                    return this.snakeAtPosition(a.x, a.y);
                }
                snakeAtPosition(a, b) {
                    return this.snakeTailAtPosition(a, b) || this.x == a && this.y == b;
                }
                snakeTailAtPosition(a, b) {
                    for(var c = 0; c < this.tailBlocks.length; c++)if (this.tailBlocks[c].x == a && this.tailBlocks[c].y == b) return true;
                    return false;
                }
            }
            class Apple {
                x;
                y;
                constructor(a, p){
                    this.x = Math.floor(p.random(blocksX));
                    for(this.y = Math.floor(p.random(blocksY)); a.isAppleOnSnake(this);)this.x = Math.floor(p.random(blocksX)), this.y = Math.floor(p.random(blocksY));
                }
                show() {
                    p.noStroke();
                    p.fill("#21b8cd");
                    p.push();
                    p.translate(this.x * blockSize + outlineLength, this.y * blockSize + outlineLength);
                    p.ellipse(blockSize / 2, blockSize / 2, blockSize - 2 * outlineLength, blockSize - 2 * outlineLength);
                    p.pop();
                }
                isAtPosition(a, b) {
                    return this.x === a && this.y === b;
                }
            }
            class HamiltonianCycle {
                w;
                h;
                cycle;
                spanningTreeNodes;
                constructor(a, b, p){
                    this.w = a;
                    this.h = b;
                    this.cycle = [];
                    this.spanningTreeNodes = [];
                    this.createCycle(p);
                }
                createCycle(p) {
                    this.createSpanningTree(p);
                    var a = [];
                    let b = [];
                    for(let i = 0; i < this.w; i++)for(var c = 0; c < this.h; c++)b.push(new HNode(i, c));
                    for (var d of b)d.setEdges(b);
                    for(let i = 0; i < this.spanningTreeNodes.length; i++){
                        let d = this.spanningTreeNodes[i];
                        for (let e of d.spanningTreeAdjacentNodes){
                            let c = (p, t, q, u)=>{
                                t + this.h * p >= b.length || u + this.h * q >= b.length || (p = b[t + this.h * p], q = b[u + this.h * q], p.spanningTreeAdjacentNodes.push(q), q.spanningTreeAdjacentNodes.push(p));
                            };
                            let k = d.getDirectionTo(e), l = d.x * 2, m = d.y * 2;
                            k.x === 1 ? (c(l + 1, m, l + 2, m), c(l + 1, m + 1, l + 2, m + 1)) : k.y === 1 && (c(l, m + 1, l, m + 2), c(l + 1, m + 1, l + 1, m + 2));
                        }
                    }
                    a = b.filter((k)=>k.spanningTreeAdjacentNodes.length === 1);
                    let e = [];
                    for (let f of a){
                        let dir = f.spanningTreeAdjacentNodes[0].getDirectionTo(f);
                        dir.x += f.x;
                        dir.y += f.y;
                        let edge = new HEdge(b[dir.y + this.h * dir.x], f);
                        let d = true;
                        for (let n of e)if (n.isEqualTo(edge)) {
                            d = false;
                            break;
                        }
                        d && e.push(edge);
                    }
                    for (let k of e)k.connectNodes();
                    a = b.filter((k)=>k.spanningTreeAdjacentNodes.length === 1);
                    e = [];
                    for (let g of a)for (let h of a)if (p.dist(g.x, g.y, h.x, h.y) === 1 && Math.floor(g.x / 2) === Math.floor(h.x / 2) && Math.floor(g.y / 2) === Math.floor(h.y / 2)) {
                        let f = new HEdge(h, g);
                        let n = true;
                        for (let r of e)if (r.isEqualTo(f)) {
                            n = false;
                            break;
                        }
                        n && e.push(f);
                        break;
                    }
                    for (let k of e)k.connectNodes();
                    let randomElement = b[Math.floor(p.random(b.length))];
                    a = [
                        randomElement
                    ];
                    let g = a[0];
                    for(let h = a[0].spanningTreeAdjacentNodes[0]; h !== a[0];){
                        let r = h.spanningTreeAdjacentNodes[0];
                        r === g && (r = h.spanningTreeAdjacentNodes[1]);
                        a.push(h);
                        g = h;
                        h = r;
                    }
                    this.cycle = a;
                    for(g = 0; g < this.cycle.length; g++)this.cycle[g].cycleNo = g;
                }
                show(p) {
                    for(let a = 0; a < this.cycle.length; a++)p.push(), p.translate(blockSize / 2, blockSize / 2), p.scale(blockSize), p.fill(255), p.textAlign(p.CENTER, p.CENTER), p.textSize(.3), p.text(a, this.cycle[a].x, this.cycle[a].y), p.stroke(255, 100), p.strokeWeight(.1), a !== this.cycle.length - 1 ? p.line(this.cycle[a].x, this.cycle[a].y, this.cycle[a + 1].x, this.cycle[a + 1].y) : p.line(this.cycle[a].x, this.cycle[a].y, this.cycle[0].x, this.cycle[0].y), p.pop();
                }
                createSpanningTree(p) {
                    let a = [];
                    for(var b = 0; b < this.w / 2; b++)for(let i = 0; i < this.h / 2; i++)a.push(new HNode(b, i));
                    for (var d of a)d.setEdges(a);
                    let edges = [];
                    let c = a[Math.floor(p.random(a.length))];
                    edges.push(new HEdge(c, c.edges[0]));
                    let e = [
                        c,
                        c.edges[0]
                    ];
                    for(; e.length < a.length;){
                        c = e.getRandomElement(p);
                        const filteredEdges = c.edges.filter((f)=>!e.includes(f));
                        if (filteredEdges.length !== 0) {
                            d = filteredEdges.getRandomElement(p);
                            e.push(d);
                            edges.push(new HEdge(c, d));
                        }
                    }
                    for (let f of a)f.setSpanningTreeEdges(edges);
                    this.spanningTreeNodes = a;
                }
                getNextPosition(a, b) {
                    for(let c = 0; c < this.cycle.length; c++)if (this.cycle[c].x === a && this.cycle[c].y === b) return this.cycle[(c + 1) % this.cycle.length];
                    return null;
                }
                getNodeNo(a, b) {
                    for(let c = 0; c < this.cycle.length; c++)if (this.cycle[c].x === a && this.cycle[c].y === b) return c;
                    return -1;
                }
                getPossiblePositionsFrom(a, b) {
                    a = this.cycle[this.getNodeNo(a, b)];
                    let positions = [];
                    for (let c of a.edges)positions.push(this.getNodeNo(c.x, c.y));
                    return positions;
                }
            }
            Array.prototype.getRandomElement = function(p) {
                return this[Math.floor(p.random(this.length))];
            };
            class HNode {
                x;
                y;
                spanningTreeAdjacentNodes;
                cycleNo;
                alreadyVisited;
                shortestDistanceToThisPoint;
                edges;
                constructor(a, b){
                    this.x = a;
                    this.y = b;
                    this.spanningTreeAdjacentNodes = [];
                    this.cycleNo = -1;
                    this.alreadyVisited = false;
                    this.shortestDistanceToThisPoint = 0;
                    this.edges = [];
                }
                setEdges(a) {
                    this.edges = a.filter((b)=>p.dist(b.x, b.y, this.x, this.y) === 1);
                }
                setSpanningTreeEdges(a) {
                    for (let b of a)b.contains(this) && this.spanningTreeAdjacentNodes.push(b.getOtherNode(this));
                }
                getNextNodeMovingLeft(a) {
                    let b = a.getDirectionTo(this);
                    let directions = [];
                    for (var c of this.spanningTreeAdjacentNodes)directions.push(this.getDirectionTo(c));
                    for(let c = getLeftOf(b); !directions.some((dir)=>dir.x === c.x && dir.y === c.y);)c = getRightOf(c);
                    return this.spanningTreeAdjacentNodes[directions.findIndex((dir)=>dir.x === c.x && dir.y === c.y)];
                }
                getDirectionTo(a) {
                    return {
                        x: a.x - this.x,
                        y: a.y - this.y
                    };
                }
                resetForAStar() {
                    this.alreadyVisited = false;
                    this.shortestDistanceToThisPoint = 0;
                }
            }
            function getLeftOf(a) {
                return a.x === 0 && a.y === 1 ? {
                    x: 1,
                    y: 0
                } : a.x === 0 && a.y === -1 ? {
                    x: -1,
                    y: 0
                } : a.x === 1 ? {
                    x: 0,
                    y: -1
                } : {
                    x: 0,
                    y: 1
                };
            }
            function getRightOf(a) {
                return a.x === 0 && a.y === 1 ? {
                    x: -1,
                    y: 0
                } : a.x === 0 && a.y === -1 ? {
                    x: 1,
                    y: 0
                } : a.x === 1 ? {
                    x: 0,
                    y: 1
                } : {
                    x: 0,
                    y: -1
                };
            }
            class HEdge {
                node1;
                node2;
                constructor(a, b){
                    this.node1 = a;
                    this.node2 = b;
                }
                isEqualTo(a) {
                    return this.node1 === a.node1 && this.node2 === a.node2 || this.node1 === a.node2 && this.node2 === a.node1;
                }
                contains(a) {
                    return a === this.node1 || a === this.node2;
                }
                getOtherNode(a) {
                    return a === this.node1 ? this.node2 : this.node1;
                }
                connectNodes() {
                    this.node1.spanningTreeAdjacentNodes.push(this.node2);
                    this.node2.spanningTreeAdjacentNodes.push(this.node1);
                }
            }
            class HPath {
                pathLength;
                nodesInPath;
                finishNode;
                distanceToApple;
                pathCounter;
                constructor(a, b, p){
                    this.pathLength = 0;
                    this.nodesInPath = [
                        a
                    ];
                    this.finishNode = b;
                    this.distanceToApple = 0;
                    this.setDistanceToApple(p);
                    this.pathCounter = 0;
                }
                setDistanceToApple(p) {
                    this.distanceToApple = p.dist(this.finishNode.x, this.finishNode.y, this.getLastNode().x, this.getLastNode().y);
                }
                addToTail(a) {
                    this.nodesInPath.push(a);
                    this.pathLength += 1;
                    this.setDistanceToApple(p);
                }
                getLastNode() {
                    return this.nodesInPath[this.nodesInPath.length - 1];
                }
                getSnakeTailPositionAfterFollowingPath(a) {
                    const tailBlocksAsHNodes = a.tailBlocks.map((block)=>new HNode(block.x, block.y));
                    return this.pathLength - a.addCount < tailBlocksAsHNodes.length ? tailBlocksAsHNodes[Math.max(0, this.pathLength - a.addCount)] : this.nodesInPath[this.pathLength - a.addCount - tailBlocksAsHNodes.length];
                }
                getNextMove() {
                    let a = this.nodesInPath[this.pathCounter + 1].x - this.nodesInPath[this.pathCounter].x, b = this.nodesInPath[this.pathCounter + 1].y - this.nodesInPath[this.pathCounter].y;
                    this.pathCounter++;
                    return {
                        x: a,
                        y: b
                    };
                }
                clone() {
                    let a = new HPath(this.nodesInPath[0], this.finishNode, p);
                    a.nodesInPath = [
                        ...this.nodesInPath
                    ];
                    a.pathLength = this.pathLength;
                    a.distanceToApple = this.distanceToApple;
                    return a;
                }
            }
        };
        if (canvasRef.current) {
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$p5$2f$lib$2f$p5$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](sketch, canvasRef.current);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full aspect-[2.35/1] bg-[#202222] rounded-md border-[2px] border-[#3d3f40]",
        id: "snake-game-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-full",
            id: "snake-game",
            ref: canvasRef
        }, void 0, false, {
            fileName: "[project]/app/snake.tsx",
            lineNumber: 537,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/snake.tsx",
        lineNumber: 536,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SnakeGame;
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__6227fe._.js.map