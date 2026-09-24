export function createButton(text,type="primary"){const button=document.createElement("button");button.className=`btn btn-${type}`;button.textContent=text;return button;}
