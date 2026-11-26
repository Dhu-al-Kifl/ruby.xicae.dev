import{a as e,i as t,n,t as r}from"./SoundManager.7emcsZ2u.js";var i={c:`#include <stdio.h>

int main(void) {
    printf("C Execution Runtime\\n");
    return 0;
}`,cpp:`#include <iostream>

int main() {
    std::cout << "C++ Native Engine\\n";
    return 0;
}`,sqlite:`CREATE TABLE metrics (id INT, label TEXT);
INSERT INTO metrics VALUES (1, "cache");
SELECT * FROM metrics;`,sql:`CREATE TABLE metrics (id INT, label TEXT);
INSERT INTO metrics VALUES (1, "cache");
SELECT * FROM metrics;`,rust:`fn main() {
    println!("Rust native runtime ready.");
}`,go:`package main

import "fmt"

func main() {
    fmt.Println("Go routines online.")
}`,php:`<?php
echo "PHP Runtime operational.\\n";`,bash:`#!/bin/bash
echo "Shell environment ready."`,javascript:`console.log("JavaScript runtime online.");`,typescript:`const message: string = "TypeScript compiled.";
console.log(message);`,lua:`print("Lua environment online.")`,ruby:`puts "Ruby runtime operational."`,python:`print("Python 3.12 sandbox ready.")`};function a(e){if(!e)return``;let t=e;for(;t.includes(`%23`)||t.includes(`%20`)||t.includes(`%0A`)||t.includes(`%3C`)||t.includes(`%3E`);)try{let e=decodeURIComponent(t);if(e===t)break;t=e}catch{break}return t.trim()?t:``}function o(e,t,n,r){let i={id:`cell-1`,filename:t?`main.py`:`main${n}`,code:r,output:``,isError:!1,execCount:null};try{let o=localStorage.getItem(e);if(!o)return[i];let s=JSON.parse(o);return!Array.isArray(s)||s.length===0?[i]:s.map((e,i)=>({id:e.id||`cell-${Date.now()}-${i}`,filename:e.filename||(t?`cell_${i+1}.py`:`cell_${i+1}${n}`),code:a(e.code)||r,output:e.output||``,isError:!!e.isError,execCount:e.execCount||null}))}catch{return[i]}}function s(e,t,n,r,i){let a=!!(e.output&&e.output.trim()),o=e.execCount?`In [${e.execCount}]:`:`In [ ]:`,s=e.execCount?`Out [${e.execCount}]:`:`Out:`;return`
    <div class="cell-header px-4 py-2 bg-white/[0.02] flex items-center justify-between text-xs select-none">
      <div class="flex items-center gap-2">
        <span class="cell-prompt font-mono text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-medium tracking-tight">${o}</span>
        <div class="flex items-center gap-0.5 text-zinc-500 font-mono text-[11px]" title="Cell position. Type a number to swap with that cell.">
          <span>#</span>
          <input type="text" class="cell-pos-input w-5 h-5 text-center font-mono text-[11px] font-bold text-zinc-300 bg-white/[0.05] hover:bg-white/[0.1] focus:bg-white/[0.15] border border-white/10 rounded focus:border-white/30 focus:outline-none transition-colors select-all cursor-text" value="${t+1}" />
        </div>
        ${r?`
          <input type="text" class="cell-filename-input font-mono text-zinc-300 hover:text-white focus:text-white bg-transparent hover:bg-white/[0.04] focus:bg-white/[0.08] px-1.5 py-0.5 rounded border border-transparent focus:border-white/20 text-[11px] transition-colors focus:outline-none max-w-[120px]" value="${e.filename||`cell_${t+1}.py`}" title="Edit cell filename & extension (e.g. hell.js, main.c, data.py)" />
        `:`
          <span class="font-mono text-zinc-500 text-[11px]">${e.filename||`cell_${t+1}${i}`}</span>
        `}
      </div>
      <div class="flex items-center gap-1.5">
        <button class="cell-run-btn h-7 px-3 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold active:scale-95 transition-all shadow-sm" title="Run Cell (Shift + Enter)">
          <span class="text-[10px]">▶</span>
          <span>Run</span>
        </button>
        <button class="cell-add-below-btn w-7 h-7 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 active:scale-95 transition-colors cursor-pointer border border-white/5" title="Insert Cell Below">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
        </button>
        ${n>1?`
          <button class="cell-del-btn w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 active:scale-95 transition-colors cursor-pointer border border-white/5" title="Delete Cell">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        `:``}
      </div>
    </div>
    <div class="cell-body p-4 sm:p-5">
      <textarea class="cell-textarea w-full bg-transparent font-mono text-xs sm:text-[13px] text-zinc-100 placeholder-zinc-600 focus:outline-none resize-none leading-relaxed tracking-tight" rows="5" spellcheck="false" placeholder="// Code block...">${e.code}</textarea>
    </div>
    <div class="cell-output-wrapper ${a?``:`hidden`} bg-[#030304] px-4 sm:px-5 py-3 font-mono text-xs">
      <div class="flex items-start gap-3">
        <span class="font-mono text-zinc-400 shrink-0 text-[11px] select-none font-medium">${s}</span>
        <pre class="cell-output-text flex-1 whitespace-pre-wrap break-words leading-relaxed text-zinc-300 font-mono text-xs ${e.isError?`text-rose-400`:``}">${e.output}</pre>
      </div>
    </div>
  `}function c(e){let t=parseInt(localStorage.getItem(`webcode_editor_font_size`)||`13`,10)||13,n=n=>{t=Math.min(22,Math.max(11,n)),e?.style.setProperty(`--cell-font-size`,`${t}px`);let r=document.getElementById(`nb-font-val`);r&&(r.textContent=`${t}px`);try{localStorage.setItem(`webcode_editor_font_size`,String(t))}catch{}};n(t);let r=document.getElementById(`nb-font-dec`);r&&(r.onclick=()=>n(t-1));let i=document.getElementById(`nb-font-inc`);i&&(i.onclick=()=>n(t+1))}var l=class l{static instance;cells=[];executionCounter=1;container=null;lang=`python`;ext=`.py`;isUniversal=!0;static init(){return this.instance||=new l,this.instance.setup(),this.instance}setup(){if(this.container=document.getElementById(`notebook-cells-container`),!this.container)return;let e=document.getElementById(`desktop-workbench`);this.lang=e?.dataset.lang||`python`,this.ext=e?.dataset.ext||(this.lang===`python`?`.py`:`.${this.lang}`);let n=e?.dataset.project||`default`;this.isUniversal=!n||n==="default"||n===`webcode`;let r=a(e?.dataset.code)||i[this.lang]||i.python,s=`webcode_studio_cells_${this.isUniversal?`webcode`:this.lang}`;this.cells=o(s,this.isUniversal,this.ext,r),this.render(),this.isUniversal&&(t.subscribe((e,t)=>{t&&this.onVfsTabSwitch(t,e)}),window.addEventListener(`webcode:tab-switch`,e=>{let t=e.detail?.fileId||e.detail?.filename;t&&this.onVfsTabSwitch(t,[])}),window.addEventListener(`webcode:add-cell`,()=>this.addCell()));let l=document.getElementById(`top-btn-run`);l&&(l.onclick=e=>{e.preventDefault(),this.runAllCells()}),window.addEventListener(`keydown`,e=>{(e.metaKey||e.ctrlKey)&&e.key===`Enter`&&(e.preventDefault(),this.runAllCells())});let u=document.getElementById(`nb-add-cell-btn`);u&&(u.onclick=()=>this.addCell());let d=document.getElementById(`nb-run-all-btn`);d&&(d.onclick=()=>this.runAllCells());let f=document.getElementById(`nb-clear-all-btn`);f&&(f.onclick=()=>this.clearAllOutputs()),c(this.container)}onVfsTabSwitch(t,n){let r=t.replace(/^\//,``),o=this.cells.find(e=>e.filename===r||e.filename===t||e.id===t);if(!o){let s=n.find(e=>e.id===t||e.name===r);o={id:`cell-${Date.now()}`,filename:r,code:a(s?.content)||i[e(r)]||`// Code
`,output:``,isError:!1,execCount:null},this.cells.push(o),this.persist(),this.render()}if(o){let e=document.getElementById(o.id);e&&(e.scrollIntoView({behavior:`smooth`,block:`center`}),e.classList.add(`ring-2`,`ring-emerald-400/50`),setTimeout(()=>e.classList.remove(`ring-2`,`ring-emerald-400/50`),1e3),e.querySelector(`.cell-textarea`)?.focus())}}persist(){let e=`webcode_studio_cells_${this.isUniversal?`webcode`:this.lang}`;try{localStorage.setItem(e,JSON.stringify(this.cells))}catch{}}swapCell(e,t){if(!(e===t||e<0||e>=this.cells.length)){if(t>=0&&t<this.cells.length){let n=this.cells[e];this.cells[e]=this.cells[t],this.cells[t]=n}else if(t>=this.cells.length){let[t]=this.cells.splice(e,1);this.cells.push(t)}this.persist(),this.render();try{r.playPop()}catch{}}}render(){this.container&&(this.container.innerHTML=``,this.cells.forEach((n,r)=>{let i=document.createElement(`div`);i.className=`cell-stack-wrapper`,i.id=n.id;let a=document.createElement(`div`);a.className=`cell-stack-card`,a.innerHTML=s(n,r,this.cells.length,this.isUniversal,this.ext);let o=a.querySelector(`.cell-textarea`),c=()=>{o.style.height=`auto`,o.style.height=Math.max(90,o.scrollHeight)+`px`};o.addEventListener(`input`,()=>{n.code=o.value,this.persist(),c(),this.isUniversal&&n.filename&&t.updateFileContent(n.filename,n.code)}),o.addEventListener(`focus`,()=>{this.isUniversal&&n.filename&&t.setActiveFile(n.filename)}),o.addEventListener(`keydown`,e=>{if(e.key===`Tab`){e.preventDefault();let t=o.selectionStart;o.value=o.value.substring(0,t)+`    `+o.value.substring(o.selectionEnd),o.selectionStart=o.selectionEnd=t+4,n.code=o.value,this.persist()}e.key===`Enter`&&e.shiftKey&&(e.preventDefault(),this.runCell(n.id))}),setTimeout(c,20);let l=a.querySelector(`.cell-pos-input`);l.addEventListener(`keydown`,e=>{e.key===`Enter`&&l.blur()}),l.addEventListener(`blur`,()=>{let e=parseInt(l.value.trim(),10);!isNaN(e)&&e>=1&&e-1!==r?this.swapCell(r,e-1):l.value=String(r+1)});let u=a.querySelector(`.cell-filename-input`);u&&(u.addEventListener(`keydown`,e=>{e.key===`Enter`&&u.blur()}),u.addEventListener(`blur`,()=>{let r=u.value.trim();r&&r!==n.filename&&(n.filename=r,this.persist(),this.isUniversal&&(t.createFile(r,e(r),n.code).catch(()=>{}),t.setActiveFile(r),window.dispatchEvent(new CustomEvent(`webcode:tab-create`,{detail:{fileId:r,filename:r}}))))})),a.querySelector(`.cell-run-btn`).onclick=()=>this.runCell(n.id),a.querySelector(`.cell-add-below-btn`).onclick=()=>this.addCell(r+1);let d=a.querySelector(`.cell-del-btn`);d&&(d.onclick=()=>this.deleteCell(n.id)),i.appendChild(a),this.container.appendChild(i)}))}async runCell(t){let i=this.cells.find(e=>e.id===t);if(!i)return;let a=document.getElementById(t);if(!a)return;let o=a.querySelector(`.cell-output-wrapper`),s=a.querySelector(`.cell-output-text`),c=a.querySelector(`.cell-prompt`);o.classList.remove(`hidden`),s.textContent=`Executing...`,s.classList.remove(`text-rose-400`),c.textContent=`In [*]:`;let l=``,u=`cell_${Date.now()}`,d=performance.now(),f=this.isUniversal?i.filename?e(i.filename):`python`:this.lang,p=this.isUniversal?i.filename||`notebook.py`:`notebook${this.ext}`;try{let e=await n.execute({id:u,language:f,code:i.code,filename:p,timeoutMs:3e4},e=>{l+=e.chunk,s.textContent=l.trim()}),t=Math.round(performance.now()-d);i.execCount=this.executionCounter++,c.textContent=`In [${i.execCount}]:`;let o=a.querySelector(`.cell-output-wrapper .font-mono`);o&&(o.textContent=`Out [${i.execCount}]:`);let m=l.trim();!e.success&&e.stderr&&!m.includes(e.stderr.trim())&&(m=(m?m+`
`:``)+e.stderr.trim()),m||=e.success?`Done (${t}ms)`:`Execution failed`,i.output=m,i.isError=!e.success,s.textContent=m,i.isError&&s.classList.add(`text-rose-400`);try{r.playSuccess()}catch{}}catch(e){i.output=e.message||`Execution error`,i.isError=!0,s.textContent=i.output,s.classList.add(`text-rose-400`)}this.persist()}async runAllCells(){for(let e of this.cells)await this.runCell(e.id)}addCell(n){let r=this.cells.length+1,a=this.isUniversal?`cell_${r}.py`:`cell_${r}${this.ext}`,o=this.isUniversal?`// Code cell
`:i[this.lang]||`// Code
`,s={id:`cell-${Date.now()}`,filename:a,code:o,output:``,isError:!1,execCount:null};typeof n==`number`?this.cells.splice(n,0,s):this.cells.push(s),this.persist(),this.render(),this.isUniversal&&(t.createFile(a,e(a),o).catch(()=>{}),t.setActiveFile(a))}deleteCell(e){if(this.cells.length<=1)return;let n=this.cells.find(t=>t.id===e);this.cells=this.cells.filter(t=>t.id!==e),this.persist(),this.render(),this.isUniversal&&n?.filename&&t.closeTab(n.filename)}clearAllOutputs(){this.cells.forEach(e=>{e.output=``,e.execCount=null}),this.persist(),this.render()}};typeof window<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>l.init()):l.init());