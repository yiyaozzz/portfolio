"use strict";exports.id=24,exports.ids=[24],exports.modules={4024:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Document});var r=s(997),d=s(6859),c=s(4298),a=s.n(c);function Document(){return(0,r.jsxs)(d.Html,{lang:"en",children:[r.jsx(d.Head,{}),(0,r.jsxs)("body",{children:[r.jsx(a(),{id:"theme-switcher",strategy:"beforeInteractive",children:`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}),r.jsx(d.Main,{}),r.jsx(d.NextScript,{})]})]})}}};