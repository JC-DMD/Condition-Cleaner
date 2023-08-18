---
layout: page
title: "About the Condition Wizard"
permalink: /about/
---
<link rel="shortcut icon" type="image/x-icon" href="https://jc-dmd.github.io/Condition-Wizard/favicon.ico">


# 🗲 About the Condition Wizard 🗲
The Condition Wizard is a tool designed to manipulate a case’s conditions in a less-tedious way than through our typical process. It is specifically designed to convert conditions into a plain-text format that can be pasted right into an ordinance request template. Completed conditions can be exported as a .JSON file and reloaded to their specific case's instance of the Wizlet.

### File Input
If the Condition Wizard was loaded [**via the Wizlet**](#ˏˋ-wizlet-ˎˊ) the conditions should have populated on the page within a few moments. If the did not, you can navigate back to the Wizlet in your previous tab and click "Resend Data to Wizard".

### Formatting
Upon load-in the Condition Wizard removes the following elements from the condition list:
-	URL’s & Parenthesis surrounding them
-	Phone Numbers
-	Bullet Points
-	Double-Spaces & Tabs

Additionally, it <mark>highlights</mark> the following elements:
-	Any [Text Enclosed in Brackets]
-	Any Underscores
-	Condition’s with an odd number of brackets or parenthesis

### “Edit Conditions” Button
The user can adjust any of the condition text by clicking the “Edit Conditions” button. When you have clicked on a text-box, your browser’s native spell-check should activate as well. Once the user has finished their edits, they can click “Keep Changes” to apply them or click “Discard Changes” to undo any changes made.

## ˗ˏˋ Wizlet ˎˊ˗
The Wizlet is configured as a Bookmarklet, which is a piece of script saved as a bookmark that can run on top of another website. It allows a user to see the conditions in a single table, copy the conditions to clipboard as a list, and export the conditions as a .txt file. Additionally, a user can send the conditions to the Wizard for editing, exort them from the Wizard as a .JSON file, and upload them back to the Wizlet. Once they have been uploaded to the Wizlet the user can press the "Deploy" button to update the conditions on the page to match the .JSON file.

For the Wizlet to work properly, the following criteria must be met:
-	The user must be on a case’s “Conditions” page
-	The case must have Unsatisfied conditions
-	The Conditions page must be fully loaded, meaning scrolled to the very bottom of the page.
  
To enable the Wizlet in your browser click the button below to copy its source-code to your clipboard. Then create a new bookmark and paste the code in the URL bar of the new-bookmark dialogue box.


<button id="copyButton" onclick="copyToClipboard()">Copy Wizlet Code to Clipboard</button>

<script>
var hiddenText = "javascript:javascript:void function(){async function g(e){return new Promise(a=>{var b=setInterval(function(){var c=document.querySelector(e);c&&(clearInterval(b),a(c))},100)})}async function i(e){return new Promise(a=>{var b=setInterval(function(){var c=document.querySelector(e);c||(clearInterval(b),setTimeout(a,100))},100)})}function j(e){var d=document.createElement("div");d.style.cssText="display: block; position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; background-color: rgba(0,0,0,0.4);";var l=document.createElement("div");l.style.cssText="background-color: #fefefe;%20margin:%20auto;%20padding:%2020px;%20border:%201px%20solid%20#888;%20width:%2080%;%20text-align:%20left;%20position:%20absolute;%20top:%2050%;%20left:%2050%;%20transform:%20translate(-50%,%20-50%);%20max-height:%2080vh;%20overflow-y:%20auto;",l.innerHTML=e,d.appendChild(l),document.body.appendChild(d),d.addEventListener("click",function(a){a.target===d&&(d.style.display="none",document.body.style.overflow="")}),document.body.style.overflow="hidden";var%20headerElement=document.getElementById("manage-case-header-text"),o=headerElement?headerElement.innerText.split("%20")[0]:"unknown";j=document.createElement("button"),j.textContent="\uD83D\uDDF2%20Open%20Condition%20Wizard%20\uD83D\uDDF2",j.style.marginBottom="10px",j.style.marginRight="10px",j.style.backgroundColor="black",j.style.color="white",j.style.fontWeight="bold",j.onclick=function(){var%20k=document.getElementById("resendButton");k&&k.parentNode.removeChild(k);var%20unsatisfiedEl=Array.from(document.querySelectorAll("div[ng-if='!item.data']")).find(el=>el.textContent.includes("Unsatisfied"));if(!unsatisfiedEl)return%20void%20alert("No%20Conditions%20Found");var%20e=parseInt(unsatisfiedEl.textContent.match(/\d+/)[0]),b=Array.from(document.querySelectorAll(".condition-header-descr,.condition-detail-descr")).filter(b=>""!==b.textContent.trim());if(b.length<e)return%20void%20alert("Not%20all%20conditions%20have%20been%20loaded.%20Please%20scroll%20to%20the%20bottom%20of%20the%20page%20and%20try%20again.");var%20p=[["Unique%20Identifier","Condition%20Name","Description","Comments"]],c=document.querySelectorAll("div[ng-repeat=\"item%20in%20vm.conditionsDisplayed\"]");c.forEach(function(d){var%20a=d.querySelector("div[tt-aria-field=\"Comments\"]"),b=a?a.id:"",c=d.querySelector("div[tt-aria-field=\"Condition%20Name\"]"),e=c?c.innerText:"",f=d.querySelector("div[tt-aria-field=\"Description\"]"),g=f?f.innerText:"",h=d.querySelector("div[tt-aria-field=\"Comments\"]"),i=h?h.innerText:"",j=d.querySelector("md-switch[aria-checked]");j&&"true"===j.getAttribute("aria-checked")||p.push([b,e,g,i])});var%20d=p.map(function(b){return%20b.map(function(b){return"\""+b.replace(/"/g,"\"\"")+"\""}).join(",")}).join("\n"),f=window.open("https://jc-dmd.github.io/Condition-Wizard/");setTimeout(function(){f.postMessage({csvString:d,filename:o},"https://jc-dmd.github.io/Condition-Wizard/")},1e3);var%20g=document.createElement("button");g.id="resendButton",g.innerText="Resend%20data%20to%20Wizard",g.addEventListener("click",function(){f.postMessage({csvString:d,filename:o},"https://jc-dmd.github.io/Condition-Wizard/")}),j.insertAdjacentElement("afterend",g);var%20h=new%20Blob([d],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(h),l=document.createElement("a");l.href=i,l.setAttribute("download",o+"_conditions.csv"),l.click()},l.insertBefore(j,l.firstChild);var%20b=document.createElement("br");l.insertBefore(b,j.nextSibling);var%20c=document.createElement("button");c.textContent="Copy%20to%20clipboard",c.style.marginRight="10px",c.onclick=function(){var%20a=k.map((b,c)=>`${c+1}.%20${b}`).join("\n");navigator.clipboard.writeText(a)},l.insertBefore(c,b.nextSibling);var%20f=document.createElement("button");f.textContent="Save%20to%20.txt%20file",f.style.marginRight="10px",f.onclick=function(){var%20c=k.join("\r\n"),d="data:text/plain;charset=utf-8,"+encodeURIComponent(c),a=document.createElement("a");a.setAttribute("href",d),a.setAttribute("download",o+"_conditions.txt"),a.click()},l.insertBefore(f,c.nextSibling);var%20uploadButton=document.createElement("button");uploadButton.textContent="Upload%20JSON",uploadButton.onclick=function(){var%20b=document.createElement("input");b.type="file",b.accept="application/json",b.style.display="none",b.onchange=async%20function(){var%20c=b.files[0],e=new%20FileReader;e.onload=async%20function(){var%20b=JSON.parse(e.result);console.log("Parsed%20JSON%20content:",b);var%20h=document.createElement("button");h.textContent="Deploy",h.onclick=async%20function(){for(const%20d%20of%20b){var%20c=d["\"Unique%20Identifier\""],m=d["\"Description\""];console.log("Processing%20unique%20identifier:",c,"Description:",m);var%20n=document.querySelector("div.condition-header-descr[id=\""+c+"\"]");if(n){console.log("Found%20matching%20condition%20element%20for%20unique%20identifier:",c);var%20k=n.closest("tt-task-card").querySelector("button[name=\"edit-action\"]");k.click();var%20o=await%20g("textarea[id=\"condition-description\"]");o.value=m;var%20p=new%20Event("change");o.dispatchEvent(p);var%20q=document.querySelector("button[id=\"update-button\"]");q&&!q.disabled?(q.click(),console.log("Update%20button%20clicked,%20waiting%20for%20dialog%20close..."),await%20i("conditions-edit-dialog"),console.log("Dialog%20closed,%20moving%20to%20next%20item...")):console.log("Update%20button%20not%20found%20or%20disabled,%20skipping%20to%20next%20item...")}else%20console.log("No%20matching%20condition%20element%20found%20for%20unique%20identifier:",c)}},l.appendChild(h)},e.readAsText(c)},l.appendChild(b),b.click()},l.appendChild(uploadButton)}var%20unsatisfiedConditions=Array.from(document.querySelectorAll("div[ng-if='!item.data']")).find(a=>a.textContent.includes("Unsatisfied"));if(!unsatisfiedConditions)return%20void%20j("<p>No%20Conditions%20Found</p>");var%20conditionCount=parseInt(unsatisfiedConditions.textContent.match(/\d+/)[0]),h=Array.from(document.querySelectorAll(".condition-header-descr,.condition-detail-descr")).filter(b=>""!==b.textContent.trim());if(h.length<conditionCount)return%20void%20j("<p>Not%20all%20conditions%20have%20been%20loaded.%20Please%20scroll%20to%20the%20bottom%20of%20the%20page%20and%20try%20again.</p>");var%20c=document.querySelectorAll("tt-task-card[name='condition-card']"),k=[];Array.from(c).forEach(function(d){var%20e=d.querySelector("md-switch[aria-checked]");if(!e||"true"!==e.getAttribute("aria-checked")){var%20a=d.querySelector(".condition-header-descr"),b=d.querySelector(".condition-detail-descr");a&&k.push(a.innerText),b&&k.push(b.innerText)}});var%20d="<table%20style='border-collapse:%20collapse;'>";k.forEach(function(b,c){d+=`<tr><td%20style='border:1px%20solid%20#ddd;%20padding:8px;%20vertical-align:%20top;%20text-align:%20right;'>${c+1}.</td><td%20style='border:1px%20solid%20#ddd;%20padding:8px;'>${b}</td></tr>`}),d+="</table>",j(d)}();";

function copyToClipboard() {
    navigator.clipboard.writeText(hiddenText)
        .then(() => {
            document.getElementById('copyStatus').innerText = 'Copied!';
            setTimeout(() => document.getElementById('copyStatus').innerText = '', 2000);
        })
        .catch(err => console.error('Error copying text: ', err));
}
</script>


  
  
  
  
  
  
