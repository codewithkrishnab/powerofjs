var scripts = document.querySelector("body > script:nth-child(1)");function sel(sel){return document.querySelector(sel);}function cc(text, color, background){if(color != undefined && color != null){console.log("%c" + "" + text, "color:" + " " + color + ";" + " " + "background:" + " " + background + ";");}else{console.log(text)}return "You are seeing this text because you logged using console you won't recieve it if you use it from you scripts.js file or similar";}function ags(css) {var head, style;head = document.getElementsByTagName('head')[0];if (!head) { return; }style = document.createElement('style');style.type = 'text/css';style.innerHTML = css;head.appendChild(style);}function ceab(eltobecreated, classname, id, innerHTML, cssofel){var createdel = document.createElement(eltobecreated);scripts.before(createdel);if(classname != undefined && classname != null){if(classname.trim()){createdel.className = classname;}}if(id != undefined && id != null){if(id.trim()){createdel.setAttribute("id", id)}}if(innerHTML != undefined && innerHTML != null){if(innerHTML.trim()){createdel.innerHTML = innerHTML}}if(cssofel != undefined && cssofel != null){if(cssofel.trim()){ags("." + createdel.classList + "{" + cssofel + "}" )}}return createdel;}
