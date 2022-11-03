(()=>{"use strict";var t={893:(t,e,s)=>{s.r(e)},555:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.HierarchyManager=void 0;const o=s(498);e.HierarchyManager=class{constructor(){this.stateManager=new o.StateManager,this.titleSelector=".js-category-title",this.titleOpenedClass="category__title--open",this.listSelector=".js-category-list"}init(){this.addListeners(),this.initSaved(),this.openCurrentPath()}openPathAndSave(t){this.openPath(t),this.stateManager.addOpenedPath(t)}openPath(t){var e,s;const o=document.querySelector(`${this.listSelector}[data-id="${t}"]`);o&&(o.classList.add("_open"),null===(s=null===(e=o.parentNode)||void 0===e?void 0:e.querySelector(this.titleSelector))||void 0===s||s.classList.add(this.titleOpenedClass))}closePath(t){var e,s;const o=document.querySelector(`${this.listSelector}[data-id="${t}"]`);o&&(o.classList.remove("_open"),null===(s=null===(e=o.parentNode)||void 0===e?void 0:e.querySelector(this.titleSelector))||void 0===s||s.classList.remove(this.titleOpenedClass),this.stateManager.removeOpenedPath(t))}closePathWithChildren(t){this.closePath(t);const e=document.querySelector(`${this.listSelector}[data-id="${t}"]`);if(!e)return;const s=e.querySelectorAll(this.listSelector);for(const t of s)this.closePath(t.dataset.id||"")}togglePath(t){const e=document.querySelector(`${this.listSelector}[data-id="${t}"]`);e&&(e.classList.contains("_open")?this.closePathWithChildren(t):this.openPathAndSave(t))}addListeners(){const t=document.querySelectorAll('.js-category-title:not([data-id="root"])');for(const e of t)e.addEventListener("click",(()=>{const t=e.dataset.id||"";this.togglePath(t)}));this.addExpandListener(),this.addCollapseListener(),this.addTargetListener()}addExpandListener(){const t=document.querySelector(".js-tree-expand");null==t||t.addEventListener("click",(()=>{const t=document.querySelectorAll(this.listSelector);for(const e of t){const t=e.dataset.id||"";this.openPathAndSave(t)}}))}addCollapseListener(){const t=document.querySelector(".js-tree-collapse");null==t||t.addEventListener("click",(()=>{const t=document.querySelectorAll(this.listSelector);for(const e of t){const t=e.dataset.id||"";this.closePath(t)}}))}addTargetListener(){const t=document.querySelector(".js-tree-target");null==t||t.addEventListener("click",(()=>{const t=this.openCurrentPath();null==t||t.scrollIntoView()}))}initSaved(){const t=this.stateManager.getOpenedPaths();for(const e of t)this.openPath(e)}openCurrentPath(){const t=window.location.pathname.split("/"),e=`/${t[t.length-2]||""}/${t[t.length-1]||""}`,s=document.querySelector(`.js-category-link[data-id="${e}"]`);if(!s)return null;s.classList.add("_active");let o=s.closest(this.listSelector);for(;o;){const t=o.dataset.id||"";this.openPath(t),o=o.parentNode.closest(this.listSelector)}return s}}},498:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StateManager=void 0;e.StateManager=class{constructor(){this.openedPathLsKey="opened-path-state",this.openedPaths=[];const t=localStorage.getItem("opened-path-state");this.openedPaths=t?JSON.parse(t):[]}addOpenedPath(t){this.openedPaths.push(t),this.updateState()}removeOpenedPath(t){this.openedPaths=this.openedPaths.filter((e=>e!==t)),this.updateState()}getOpenedPaths(){return this.openedPaths}updateState(){localStorage.setItem(this.openedPathLsKey,JSON.stringify(this.openedPaths))}}}},e={};function s(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};(()=>{s(893);(new(s(555).HierarchyManager)).init()})()})();