:root{
  --ink:#17130f;
  --ink-soft:#221b14;
  --paper:#ece0c4;
  --seal:#a5311f;
  --seal-dark:#7e2418;
  --gold:#c19a49;
  --cream:#f1e6c8;
}
*{box-sizing:border-box; margin:0; padding:0;}
html,body{height:100%;}
body{
  background:
    radial-gradient(ellipse at 20% -10%, rgba(193,154,73,0.12), transparent 55%),
    radial-gradient(ellipse at 90% 110%, rgba(165,49,31,0.10), transparent 55%),
    var(--ink);
  color:var(--cream);
  font-family:"Noto Sans JP", sans-serif;
  min-height:100vh;
  min-height:100dvh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:max(24px, env(safe-area-inset-top)) 16px max(24px, env(safe-area-inset-bottom));
}
.stage{
  width:100%;
  max-width:460px;
}
.brand{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  margin-bottom:18px;
  padding:0 4px;
}
.brand .mark{
  font-family:"Shippori Mincho", serif;
  font-weight:800;
  font-size:clamp(12px, 3.6vw, 14px);
  letter-spacing:0.14em;
  color:var(--gold);
}
.brand .sub{
  font-size:10px;
  letter-spacing:0.1em;
  color:rgba(241,230,200,0.45);
}
.card{
  background:var(--paper);
  color:var(--ink);
  border-radius:2px;
  padding:clamp(24px,6vw,36px) clamp(18px,5vw,26px) 28px;
  position:relative;
  box-shadow:0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.06);
  overflow:hidden;
}
.card::before{
  content:"";
  position:absolute;
  inset:10px;
  border:1px solid rgba(23,19,15,0.14);
  pointer-events:none;
}

/* ---- start screen ---- */
.start h1{
  font-family:"Shippori Mincho", serif;
  font-weight:800;
  font-size:clamp(24px,7vw,30px);
  line-height:1.4;
  margin-bottom:10px;
}
.start h1 span{color:var(--seal);}
.start p.desc{
  font-size:13.5px;
  line-height:1.9;
  color:rgba(23,19,15,0.75);
  margin-bottom:26px;
}
.start .roster{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  margin-bottom:28px;
}
.start .roster span{
  font-size:11px;
  padding:4px 9px;
  border:1px solid rgba(23,19,15,0.25);
  border-radius:999px;
  color:rgba(23,19,15,0.6);
}

/* ---- buttons ---- */
.btn{
  display:block;
  width:100%;
  text-align:left;
  background:var(--ink-soft);
  color:var(--cream);
  border:none;
  border-left:4px solid var(--seal);
  padding:16px 18px;
  min-height:48px;
  font-family:"Noto Sans JP", sans-serif;
  font-size:14.5px;
  font-weight:500;
  line-height:1.6;
  cursor:pointer;
  margin-bottom:12px;
  transition:transform .15s ease, background .15s ease, border-color .15s ease;
  letter-spacing:0.01em;
  -webkit-tap-highlight-color:transparent;
}
.btn:hover{background:#2c2319; transform:translateX(3px); border-color:var(--gold);}
.btn:active{transform:translateX(1px) scale(0.997);}
.btn.primary{
  background:var(--seal);
  border-left-color:var(--gold);
  text-align:center;
  font-weight:700;
  padding:15px 18px;
}
.btn.primary:hover{background:var(--seal-dark);}
.btn.ghost{
  background:transparent;
  color:var(--ink);
  border-left:none;
  border:1px solid rgba(23,19,15,0.3);
  text-align:center;
  font-weight:700;
}
.btn.ghost:hover{background:rgba(23,19,15,0.06); transform:none;}
.btn.x-share{
  background:#000;
  border-left-color:#000;
  text-align:center;
  font-weight:700;
}
.btn.x-share:hover{background:#1a1a1a;}

/* ---- progress ---- */
.progress-row{
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:22px;
}
.progress-row .count{
  font-family:"Shippori Mincho", serif;
  font-weight:700;
  font-size:13px;
  color:rgba(23,19,15,0.55);
  white-space:nowrap;
}
.flags{
  display:flex;
  gap:3px;
  flex:1;
}
.flags i{
  height:5px;
  flex:1;
  background:rgba(23,19,15,0.15);
  display:block;
}
.flags i.on{background:var(--seal);}

.qtext{
  font-family:"Shippori Mincho", serif;
  font-weight:700;
  font-size:clamp(17px,5vw,19px);
  line-height:1.7;
  margin-bottom:22px;
}

/* ---- result ---- */
.seal-wrap{
  display:flex;
  justify-content:center;
  margin-bottom:6px;
}
.seal{
  width:96px; height:96px;
  background:var(--seal);
  color:var(--cream);
  border-radius:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:"Shippori Mincho", serif;
  font-weight:800;
  font-size:13px;
  line-height:1.3;
  text-align:center;
  transform:rotate(-6deg) scale(0);
  box-shadow:0 10px 22px -8px rgba(165,49,31,0.7), inset 0 0 0 2px rgba(241,230,200,0.35);
  animation:stamp .5s cubic-bezier(.2,1.6,.4,1) forwards;
  animation-delay:.15s;
  letter-spacing:0.05em;
}
@keyframes stamp{
  0%{transform:rotate(-18deg) scale(2.4); opacity:0;}
  60%{opacity:1;}
  100%{transform:rotate(-6deg) scale(1); opacity:1;}
}
.r-eyebrow{
  text-align:center;
  font-size:11px;
  letter-spacing:0.18em;
  color:rgba(23,19,15,0.5);
  margin:18px 0 6px;
}
.r-name{
  text-align:center;
  font-family:"Shippori Mincho", serif;
  font-weight:800;
  font-size:clamp(24px,7vw,28px);
  margin-bottom:4px;
}
.r-title{
  text-align:center;
  font-size:13px;
  color:var(--seal);
  font-weight:700;
  margin-bottom:20px;
}
.r-divider{
  width:40px; height:2px; background:var(--gold);
  margin:0 auto 20px;
}
.r-desc{
  font-size:13.5px;
  line-height:1.95;
  color:rgba(23,19,15,0.82);
  margin-bottom:22px;
}
.r-axes{
  background:rgba(23,19,15,0.05);
  padding:14px 16px;
  margin-bottom:22px;
  font-size:11.5px;
}
.r-axes .row{
  display:flex;
  justify-content:space-between;
  padding:4px 0;
  color:rgba(23,19,15,0.6);
}
.r-axes .row b{color:var(--ink);}
.action-row{
  display:flex;
  gap:8px;
  margin-bottom:12px;
}
.action-row .btn{margin-bottom:0; text-align:center;}
.footnote{
  text-align:center;
  font-size:10.5px;
  color:rgba(241,230,200,0.35);
  margin-top:16px;
}
.toast{
  position:fixed;
  bottom:24px;
  left:50%;
  transform:translateX(-50%);
  background:var(--ink-soft);
  color:var(--cream);
  padding:10px 18px;
  font-size:12.5px;
  border-radius:999px;
  border:1px solid var(--gold);
  opacity:0;
  pointer-events:none;
  transition:opacity .25s ease;
  z-index:10;
}
.toast.show{opacity:1;}
