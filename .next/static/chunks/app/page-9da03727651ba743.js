(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8337:(t,e,s)=>{Promise.resolve().then(s.bind(s,4288))},4288:(t,e,s)=>{"use strict";s.d(e,{default:()=>l});var i=s(5155),h=s(2115),o=s(5223),n=s.n(o);let l=()=>{let t=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let e=40,s=20,i,h=0,o=0,l,a=!1,r=1,c,d=3,p=0;new(n())(n=>{let y;n.setup=()=>{p++;let a=t.current;if(!a)return;i=Math.min(a.offsetWidth/e,a.offsetHeight/s),n.createCanvas(a.offsetWidth-i,a.offsetHeight-i).parent(a),n.pixelDensity(15),g(),d=(i=Math.min(n.width/e,n.height/s))/15,o=h=0,1==p&&n.setup(),l=new u(n),c=new N(e,s,n),l.resetOnHamiltonian(c.cycle),n.frameRate(30);let y=!1,x=()=>{r=(y=!y)?10:1};a&&(a.addEventListener("mouseover",x),a.addEventListener("mouseout",x),a.addEventListener("touchstart",x)),window.addEventListener("resize",f)};let g=()=>{let t=1;for(;;){if(Math.floor(n.width/t)*Math.floor(n.height/t)<1e3){i=t,e=Math.floor(n.width/i)-Math.floor(n.width/i)%2-2,s=Math.floor(n.height/i)-Math.floor(n.height/i)%2;break}t++}},f=()=>{d=(i=Math.min(n.width/e,n.height/s))/15,h=(n.width-i*e)/2,o=(n.height-i*s)/2,n.setup()};n.windowResized=()=>{clearTimeout(y),y=setTimeout(f,500)},n.draw=()=>{if(!a){n.background("#202222"),n.stroke("#202222"),n.strokeWeight(1),n.fill(20),n.rect(0,0,n.width,o),n.rect(0,0,h,n.height),n.rect(n.width,n.height,-n.width,-o),n.rect(n.width,n.height,-h,-n.height),n.push(),n.translate(h,o),n.fill(0),l.show();for(let t=0;t<r;t++)l.update();n.pop()}};class u{resetOnHamiltonian(t){this.cycle=t,this.tailBlocks=[],this.tailBlocks.push(n.createVector(t[0].x,t[0].y)),this.tailBlocks.push(n.createVector(t[1].x,t[1].y)),this.tailBlocks.push(n.createVector(t[2].x,t[2].y)),this.x=t[3].x,this.y=t[3].y,this.apple=new x(this,n),this.headCyclePosition=3,this.tailCyclePosition=0}show(){n.noStroke(),n.fill("#e8e8e6"),n.ellipse(this.x*i+i/2,this.y*i+i/2,i-2*d,i-2*d),n.rect((this.x+this.tailBlocks[this.tailBlocks.length-1].x)*i/2+d,(this.y+this.tailBlocks[this.tailBlocks.length-1].y)*i/2+d,i-2*d,i-2*d);for(var t=0;t<this.tailBlocks.length;t++)n.ellipse(this.tailBlocks[t].x*i+i/2,this.tailBlocks[t].y*i+i/2,i-2*d,i-2*d),t<this.tailBlocks.length-1&&n.rect((this.tailBlocks[t].x+this.tailBlocks[t+1].x)/2*i+d,(this.tailBlocks[t].y+this.tailBlocks[t+1].y)/2*i+d,i-2*d,i-2*d);this.weWin||this.apple.show()}move(){if(!this.weWin){if(!this.controlledByPlayer){if((!this.path||this.path.pathCounter>=this.path.pathLength)&&this.calculatePath(),this.path&&0!==this.path.pathLength){var t=this.path.getNextMove();this.velX=t.x,this.velY=t.y}else{var t=this.getNextPosition();this.velX=t.x-this.x,this.velY=t.y-this.y}}this.addCount<=0?(this.tailBlocks.splice(0,1),this.tailCyclePosition=(this.tailCyclePosition+1)%this.cycle.length):this.addCount--,this.tailBlocks.push(n.createVector(this.x,this.y)),this.x+=this.velX,this.y+=this.velY}}getNextPosition(){this.appleCyclePosition=c.getNodeNo(this.apple.x,this.apple.y);let t=c.getPossiblePositionsFrom(this.x,this.y),e=1e5,s=0;for(let i=0;i<t.length;i++){let h=this.appleCyclePosition-t[i];for(;h<0;)h+=this.cycle.length;!this.overTakesTail(this.cycle[t[i]])&&h<e&&(e=h,s=i)}return 1e5===e?this.cycle[(c.getNodeNo(this.x,this.y)+1)%this.cycle.length]:this.cycle[t[s]]}overTakesTail(t,e,s){return e=e?e.cycleNo:c.getNodeNo(this.x,this.y),s=s?c.getNodeNo(s.x,s.y):c.getNodeNo(this.tailBlocks[0].x,this.tailBlocks[0].y),this.getDistanceBetweenPoints(e,s)<=50+this.addCount||((s=s-50-this.addCount)<0&&(s+=this.cycle.length),this.getDistanceBetweenPoints(e,t.cycleNo)>=this.getDistanceBetweenPoints(e,s))}getPathBasedOnAStar(){let t;for(var e of this.cycle)e.resetForAStar();this.appleCyclePosition=c.getNodeNo(this.apple.x,this.apple.y);var s=this.cycle[c.getNodeNo(this.x,this.y)];for(e=[],s=new v(s,this.cycle[this.appleCyclePosition],n),e.push(s);;){if(0===e.length)return t;if(s=e.shift(),t&&s.pathLength>=t.pathLength)continue;if(0===s.distanceToApple){(null==t||s.pathLength<t.pathLength)&&(t=s.clone());continue}let h=s.getLastNode();if(!h.alreadyVisited||s.pathLength<h.shortestDistanceToThisPoint)for(var i of(h.alreadyVisited=!0,h.shortestDistanceToThisPoint=s.pathLength,h.edges)){if(this.overTakesTail(i,h,s.getSnakeTailPositionAfterFollowingPath(this))&&i.cycleNo!==h.cycleNo+1)continue;let t=s.clone();t.addToTail(i),t.getLastNode().alreadyVisited&&t.pathLength>t.getLastNode().shortestDistanceToThisPoint||e.push(t)}e.sort((t,e)=>t.distanceToApple+t.pathLength-(e.distanceToApple+e.pathLength))}}getDistanceBetweenPoints(t,e){for(t=e-t;t<0;)t+=this.cycle.length;return t}checkFuturePos(){this.x+=this.velX,this.y+=this.velY;for(var t=0;t<this.tailBlocks.length;t++)this.tailBlocks[t].x===this.x&&this.tailBlocks[t].y===this.y&&(this.dead=!0);(this.x<0||this.x>=e||this.y<0||this.y>=s)&&(this.dead=!0),this.x-=this.velX,this.y-=this.velY,this.dead&&(this.dead=!1,a=!0)}update(){this.dead||(this.move(),this.checkCollisions())}checkCollisions(){if(e*s-(this.tailBlocks.length+1)<=0)this.weWin=!0,n.setup();else{for(var t=0;t<this.tailBlocks.length;t++)if(this.tailBlocks[t].x===this.x&&this.tailBlocks[t].y===this.y){this.dead=!0;return}this.x<0||this.x>=e||this.y<0||this.y>=s?this.dead=!0:this.x===this.apple.x&&this.y===this.apple.y&&this.ateApple()}}ateApple(){this.addCount+=4,this.apple=new x(this,n),this.calculatePath()}calculatePath(){this.path=this.getPathBasedOnAStar()}isAppleOnSnake(t){return this.snakeAtPosition(t.x,t.y)}snakeAtPosition(t,e){return this.snakeTailAtPosition(t,e)||this.x==t&&this.y==e}snakeTailAtPosition(t,e){for(var s=0;s<this.tailBlocks.length;s++)if(this.tailBlocks[s].x==t&&this.tailBlocks[s].y==e)return!0;return!1}constructor(t){this.x=Math.floor(e/2),this.y=Math.floor(s/2),this.tailBlocks=[],this.tailBlocks.push(t.createVector(this.x-3,this.y)),this.tailBlocks.push(t.createVector(this.x-2,this.y)),this.tailBlocks.push(t.createVector(this.x-1,this.y)),this.velX=1,this.velY=0,this.apple=new x(this,t),this.addCount=0,this.survivalMode=this.dead=!1,this.path=null,this.weWin=this.lateGame=this.noMoreAStar=this.searchForLongestPathModeActive=this.controlledByPlayer=!1,this.cycle=null,this.headCyclePosition=0,this.tailCyclePosition=0}}class x{show(){n.noStroke(),n.fill("#21b8cd"),n.push(),n.translate(this.x*i+d,this.y*i+d),n.ellipse(i/2,i/2,i-2*d,i-2*d),n.pop()}isAtPosition(t,e){return this.x===t&&this.y===e}constructor(t,i){for(this.x=Math.floor(i.random(e)),this.y=Math.floor(i.random(s));t.isAppleOnSnake(this);)this.x=Math.floor(i.random(e)),this.y=Math.floor(i.random(s))}}class N{createCycle(t){this.createSpanningTree(t);var e=[];let s=[];for(e=0;e<this.w;e++)for(var i=0;i<this.h;i++)s.push(new T(e,i));for(var h of s)h.setEdges(s);for(e=0;e<this.spanningTreeNodes.length;e++)for(var o of(h=this.spanningTreeNodes[e]).spanningTreeAdjacentNodes){i=(t,e,i,h)=>{e+this.h*t>=s.length||h+this.h*i>=s.length||(t=s[e+this.h*t],i=s[h+this.h*i],t.spanningTreeAdjacentNodes.push(i),i.spanningTreeAdjacentNodes.push(t))};let t=h.getDirectionTo(o),e=2*h.x,n=2*h.y;1===t.x?(i(e+1,n,e+2,n),i(e+1,n+1,e+2,n+1)):1===t.y&&(i(e,n+1,e,n+2),i(e+1,n+1,e+1,n+2))}for(var n of(e=s.filter(t=>1===t.spanningTreeAdjacentNodes.length),o=[],e)){for(var l of(e=n.spanningTreeAdjacentNodes[0].getDirectionTo(n),e.x+=n.x,e.y+=n.y,e=new k(s[e.y+this.h*e.x],n),h=!0,o))if(l.isEqualTo(e)){h=!1;break}h&&o.push(e)}for(let t of o)t.connectNodes();for(var a of(e=s.filter(t=>1===t.spanningTreeAdjacentNodes.length),o=[],e))for(var r of e)if(1===t.dist(a.x,a.y,r.x,r.y)&&Math.floor(a.x/2)===Math.floor(r.x/2)&&Math.floor(a.y/2)===Math.floor(r.y/2)){for(var c of(n=new k(r,a),l=!0,o))if(c.isEqualTo(n)){l=!1;break}l&&o.push(n);break}for(let t of o)t.connectNodes();for(a=(e=[s.getRandomElement()])[0],r=e[0].spanningTreeAdjacentNodes[0];r!==e[0];)(c=r.spanningTreeAdjacentNodes[0])===a&&(c=r.spanningTreeAdjacentNodes[1]),e.push(r),a=r,r=c;for(a=0,this.cycle=e;a<this.cycle.length;a++)this.cycle[a].cycleNo=a}show(t){for(let e=0;e<this.cycle.length;e++)t.push(),t.translate(i/2,i/2),t.scale(i),t.fill(255),t.textAlign(t.CENTER,t.CENTER),t.textSize(.3),t.text(e,this.cycle[e].x,this.cycle[e].y),t.stroke(255,100),t.strokeWeight(.1),e!==this.cycle.length-1?t.line(this.cycle[e].x,this.cycle[e].y,this.cycle[e+1].x,this.cycle[e+1].y):t.line(this.cycle[e].x,this.cycle[e].y,this.cycle[0].x,this.cycle[0].y),t.pop()}createSpanningTree(t){let e=[];for(var s=0;s<this.w/2;s++)for(var i=0;i<this.h/2;i++)e.push(new T(s,i));for(var h of e)h.setEdges(e);s=[],i=e[Math.floor(t.random(e.length))],s.push(new k(i,i.edges[0]));let o=[i,i.edges[0]];for(;o.length<e.length;)0!==(h=(i=o.getRandomElement()).edges.filter(t=>!o.includes(t))).length&&(h=h.getRandomElement(),o.push(h),s.push(new k(i,h)));for(let t of e)t.setSpanningTreeEdges(s);this.spanningTreeNodes=e}getNextPosition(t,e){for(let s=0;s<this.cycle.length;s++)if(this.cycle[s].x===t&&this.cycle[s].y===e)return this.cycle[(s+1)%this.cycle.length];return null}getNodeNo(t,e){for(let s=0;s<this.cycle.length;s++)if(this.cycle[s].x===t&&this.cycle[s].y===e)return s;return -1}getPossiblePositionsFrom(t,e){for(let s of(t=this.cycle[this.getNodeNo(t,e)],e=[],t.edges))e.push(this.getNodeNo(s.x,s.y));return e}constructor(t,e,s){this.w=t,this.h=e,this.cycle=[],this.spanningTreeNodes=[],this.createCycle(s)}}Array.prototype.getRandomElement=function(){return this[Math.floor(n.random(this.length))]};class T{setEdges(t){this.edges=t.filter(t=>1===n.dist(t.x,t.y,this.x,this.y))}setSpanningTreeEdges(t){for(let e of t)e.contains(this)&&this.spanningTreeAdjacentNodes.push(e.getOtherNode(this))}getNextNodeMovingLeft(t){var e;let s=t.getDirectionTo(this);for(var i of(t=[],this.spanningTreeAdjacentNodes))t.push(this.getDirectionTo(i));for(i=0===s.x&&1===s.y?{x:1,y:0}:0===s.x&&-1===s.y?{x:-1,y:0}:1===s.x?{x:0,y:-1}:{x:0,y:1};!t.includes(i);)i=0===(e=i).x&&1===e.y?{x:-1,y:0}:0===e.x&&-1===e.y?{x:1,y:0}:1===e.x?{x:0,y:1}:{x:0,y:-1};return this.spanningTreeAdjacentNodes[t.indexOf(i)]}getDirectionTo(t){return{x:t.x-this.x,y:t.y-this.y}}resetForAStar(){this.alreadyVisited=!1,this.shortestDistanceToThisPoint=0}constructor(t,e){this.x=t,this.y=e,this.spanningTreeAdjacentNodes=[],this.cycleNo=-1,this.alreadyVisited=!1,this.shortestDistanceToThisPoint=0,this.edges=[]}}class k{isEqualTo(t){return this.node1===t.node1&&this.node2===t.node2||this.node1===t.node2&&this.node2===t.node1}contains(t){return t===this.node1||t===this.node2}getOtherNode(t){return t===this.node1?this.node2:this.node1}connectNodes(){this.node1.spanningTreeAdjacentNodes.push(this.node2),this.node2.spanningTreeAdjacentNodes.push(this.node1)}constructor(t,e){this.node1=t,this.node2=e}}class v{setDistanceToApple(t){this.distanceToApple=t.dist(this.finishNode.x,this.finishNode.y,this.getLastNode().x,this.getLastNode().y)}addToTail(t){this.nodesInPath.push(t),this.pathLength+=1,this.setDistanceToApple(n)}getLastNode(){return this.nodesInPath[this.nodesInPath.length-1]}getSnakeTailPositionAfterFollowingPath(t){return this.pathLength-t.addCount<t.tailBlocks.length?t.tailBlocks[Math.max(0,this.pathLength-t.addCount)]:this.nodesInPath[this.pathLength-t.addCount-t.tailBlocks.length]}getNextMove(){let t=this.nodesInPath[this.pathCounter+1].x-this.nodesInPath[this.pathCounter].x,e=this.nodesInPath[this.pathCounter+1].y-this.nodesInPath[this.pathCounter].y;return this.pathCounter++,{x:t,y:e}}clone(){let t=new v(this.nodesInPath[0],this.finishNode,n);return t.nodesInPath=[...this.nodesInPath],t.pathLength=this.pathLength,t.distanceToApple=this.distanceToApple,t}constructor(t,e,s){this.pathLength=0,this.nodesInPath=[t],this.finishNode=e,this.distanceToApple=0,this.setDistanceToApple(s),this.pathCounter=0}}},t.current)},[]),(0,i.jsx)("div",{className:"w-full aspect-[2.39/1] bg-[#202222] rounded-md border-[2px] border-[#3d3f40]",id:"snake-game-container",children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",id:"snake-game",ref:t})})}}},t=>{var e=e=>t(t.s=e);t.O(0,[588,441,517,358],()=>e(8337)),_N_E=t.O()}]);