(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_34bdc8._.js", {

"[project]/app/snake.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const SnakeGame = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SnakeGame.useEffect": ()=>{
            if ("object" !== "undefined" && canvasRef.current) {
                let blocksX = 40, blocksY = 20;
                let maxBlocks = 1000, blockSize, xOffset = 0, yOffset = 0, s, pause = false, speedMultiplier = 1, hc, outlineLength = 3, setup_i = 0;
                const sketch = {
                    "SnakeGame.useEffect.sketch": (p)=>{
                        p.setup = ({
                            "SnakeGame.useEffect.sketch": ()=>{
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
                                const toggleSpeed = {
                                    "SnakeGame.useEffect.sketch.toggleSpeed": ()=>{
                                        isSpeedUp = !isSpeedUp;
                                        speedMultiplier = isSpeedUp ? 10 : 1;
                                    }
                                }["SnakeGame.useEffect.sketch.toggleSpeed"];
                                if (a) {
                                    a.addEventListener('mouseover', toggleSpeed);
                                    a.addEventListener('mouseout', toggleSpeed);
                                    a.addEventListener('touchstart', toggleSpeed);
                                }
                                window.addEventListener("resize", resize);
                            }
                        })["SnakeGame.useEffect.sketch"];
                        const setBlocks = {
                            "SnakeGame.useEffect.sketch.setBlocks": ()=>{
                                let a = 1;
                                for(;;){
                                    if (Math.floor(p.width / a) * Math.floor(p.height / a) < maxBlocks) {
                                        blockSize = a;
                                        blocksX = Math.floor(p.width / blockSize) - Math.floor(p.width / blockSize) % 2 - 2;
                                        blocksY = Math.floor(p.height / blockSize) - Math.floor(p.height / blockSize) % 2;
                                        break;
                                    } else a++;
                                }
                            }
                        }["SnakeGame.useEffect.sketch.setBlocks"];
                        const resize = {
                            "SnakeGame.useEffect.sketch.resize": ()=>{
                                blockSize = Math.min(p.width / blocksX, p.height / blocksY);
                                outlineLength = blockSize / 15;
                                xOffset = (p.width - blockSize * blocksX) / 2;
                                yOffset = (p.height - blockSize * blocksY) / 2;
                                p.setup();
                            }
                        }["SnakeGame.useEffect.sketch.resize"];
                        let resizeDelay;
                        const windowResized = {
                            "SnakeGame.useEffect.sketch.windowResized": ()=>{
                                clearTimeout(resizeDelay);
                                resizeDelay = setTimeout(resize, 500);
                            }
                        }["SnakeGame.useEffect.sketch.windowResized"];
                        p.windowResized = windowResized;
                        p.draw = ({
                            "SnakeGame.useEffect.sketch": ()=>{
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
                            }
                        })["SnakeGame.useEffect.sketch"];
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
                                    a.sort({
                                        "SnakeGame.useEffect.sketch": (f, n)=>f.distanceToApple + f.pathLength - (n.distanceToApple + n.pathLength)
                                    }["SnakeGame.useEffect.sketch"]);
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
                                        let c = {
                                            "SnakeGame.useEffect.sketch.c": (p, t, q, u)=>{
                                                t + this.h * p >= b.length || u + this.h * q >= b.length || (p = b[t + this.h * p], q = b[u + this.h * q], p.spanningTreeAdjacentNodes.push(q), q.spanningTreeAdjacentNodes.push(p));
                                            }
                                        }["SnakeGame.useEffect.sketch.c"];
                                        let k = d.getDirectionTo(e), l = d.x * 2, m = d.y * 2;
                                        k.x === 1 ? (c(l + 1, m, l + 2, m), c(l + 1, m + 1, l + 2, m + 1)) : k.y === 1 && (c(l, m + 1, l, m + 2), c(l + 1, m + 1, l + 1, m + 2));
                                    }
                                }
                                a = b.filter({
                                    "SnakeGame.useEffect.sketch": (k)=>k.spanningTreeAdjacentNodes.length === 1
                                }["SnakeGame.useEffect.sketch"]);
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
                                a = b.filter({
                                    "SnakeGame.useEffect.sketch": (k)=>k.spanningTreeAdjacentNodes.length === 1
                                }["SnakeGame.useEffect.sketch"]);
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
                                    const filteredEdges = c.edges.filter({
                                        "SnakeGame.useEffect.sketch.filteredEdges": (f)=>!e.includes(f)
                                    }["SnakeGame.useEffect.sketch.filteredEdges"]);
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
                        Array.prototype.getRandomElement = ({
                            "SnakeGame.useEffect.sketch": function(p) {
                                return this[Math.floor(p.random(this.length))];
                            }
                        })["SnakeGame.useEffect.sketch"];
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
                                this.edges = a.filter({
                                    "SnakeGame.useEffect.sketch": (b)=>p.dist(b.x, b.y, this.x, this.y) === 1
                                }["SnakeGame.useEffect.sketch"]);
                            }
                            setSpanningTreeEdges(a) {
                                for (let b of a)b.contains(this) && this.spanningTreeAdjacentNodes.push(b.getOtherNode(this));
                            }
                            getNextNodeMovingLeft(a) {
                                let b = a.getDirectionTo(this);
                                let directions = [];
                                for (var c of this.spanningTreeAdjacentNodes)directions.push(this.getDirectionTo(c));
                                for(let c = getLeftOf(b); !directions.some({
                                    "SnakeGame.useEffect.sketch": (dir)=>dir.x === c.x && dir.y === c.y
                                }["SnakeGame.useEffect.sketch"]);)c = getRightOf(c);
                                return this.spanningTreeAdjacentNodes[directions.findIndex({
                                    "SnakeGame.useEffect.sketch": (dir)=>dir.x === c.x && dir.y === c.y
                                }["SnakeGame.useEffect.sketch"])];
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
                                const tailBlocksAsHNodes = a.tailBlocks.map({
                                    "SnakeGame.useEffect.sketch.tailBlocksAsHNodes": (block)=>new HNode(block.x, block.y)
                                }["SnakeGame.useEffect.sketch.tailBlocksAsHNodes"]);
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
                    }
                }["SnakeGame.useEffect.sketch"];
            //new p5(sketch);
            }
        }
    }["SnakeGame.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full aspect-[2.35/1] bg-[#202222] rounded-md border-[2px] border-[#3d3f40]",
        id: "snake-game-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-full",
            id: "snake-game",
            ref: canvasRef,
            style: {
                width: '100%',
                height: '100%'
            }
        }, void 0, false, {
            fileName: "[project]/app/snake.tsx",
            lineNumber: 539,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/snake.tsx",
        lineNumber: 538,
        columnNumber: 9
    }, this);
};
_s(SnakeGame, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = SnakeGame;
const __TURBOPACK__default__export__ = SnakeGame;
var _c;
__turbopack_refresh__.register(_c, "SnakeGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$snake$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/snake.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const Home = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    // Any initialization code can go here
                    console.log("Home component mounted");
                } catch (error) {
                    console.error("Error during Home component initialization:", error);
                }
            }
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-screen mx-auto max-w-xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold mb-8 xanh-mono-font",
                    children: "A Perfect Snake AI"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$snake$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 20,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
};
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
                for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
            } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else validateChildKeys(children, type);
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_34bdc8._.js.map