var e=Array.from(document.querySelector("table").rows);e.forEach(function(l,t){if(0===t||t===e.length-1){var n=document.createElement("th");n.innerText=l.cells[1].innerText,l.insertBefore(n,l.cells[l.cells.length-1])}else{var r=l.insertCell(l.cells.length-1);r.innerText=l.cells[1].innerText,r.style.cssText=l.style.cssText}});
//# sourceMappingURL=index.b3c31297.js.map
