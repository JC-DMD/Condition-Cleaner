---
layout: page
title: "About the Condition Wizard"
permalink: /about/
---
# 🗲 About the Condition Wizard 🗲
The Condition Wizard is a tool designed to manipulate a case’s conditions in a less-tedious way than through our typical process. It is specifically designed to convert conditions into a plain-text format that can be pasted right into an ordinance request template. For now, conditions still must be manually updated in EnerGov following any Wizard-usage.

### File Input
If the Condition Wizard was loaded [**via the Wizlet**](#ˏˋ-wizlet-ˎˊ) a .txt file will have automatically downloaded from the subject-case’s condition page (named CaseNumber_Conditions.txt). The user should use the file-input button (aka "Browse…”, etc. depending on the browser) and select CaseNumber_Conditions.txt.

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

### Re-Ordering Conditions
Users can drag-and-drop conditions to re-order them. While a condition is being dragged, a blue line will appear to indicate where the condition will be placed if the user drops it.
>Note: Any highlighted condition that is dragged-and-dropped will lose its highlights from the Formatter. The Formatter is called when the file is loaded-in and anytime the “Edit Conditions” process completes.

### Copy to Clipboard & Export as .txt
These buttons take the text in the table, including the condition-numbers, and either copy them to clipboard or export them as a .txt file. Either way both are plain text and can be pasted into a word document. 

## ˗ˏˋ Wizlet ˎˊ˗
The Wizlet allows users to skip generating a condition report and exporting it in a file-type that can be accepted by the Condition Wizard (“(CPDM) Conditions Report for CPC / BZA” and exported as an .xls). It is configured as a Bookmarklet, which is a piece of script saved as a bookmark that can run on top of another website.
For the Wizlet to work properly, the following criteria must be met:
-	The user must be on a case’s “Conditions” page
-	The case must have Unsatisfied conditions
-	The page must be fully loaded
  
To enable the Wizlet in your browser click the button below to copy its source-code to your clipboard. Then create a new bookmark and paste the code in the URL bar.


<button id="copyButton">Copy Wizlet Code to Clipboard</button>

<script src="/Condition-Wizard/script.js"></script>





  
  
  
  
  
  
