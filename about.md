---
layout: page
title: "About the Condition Wizard"
permalink: /about/
---
# 🗲 About the Condition Wizard 🗲
The Condition Wizard is a tool designed to manipulate a case’s conditions in a less-tedious way than through our typical process. It is specifically designed to convert conditions into a plain-text format that can be pasted right into an ordinance request template. Completed conditions can be exported as a .JSON file and reloaded to their specific case's instance of the Wizlet.

### File Input
If the Condition Wizard was loaded [**via the Wizlet**](#ˏˋ-wizlet-ˎˊ) the conditions should have populated on the page within a few moments. If the did not, you can navigate back to the Wizlet in your previous tab and click "Resend Data to Condition Wizard".

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
The Wizlet allows users to skip generating a condition report and exporting it in a file-type that can be accepted by the Condition Wizard (“(CPDM) Conditions Report for CPC / BZA” and exported as an .xls). It is configured as a Bookmarklet, which is a piece of script saved as a bookmark that can run on top of another website.
For the Wizlet to work properly, the following criteria must be met:
-	The user must be on a case’s “Conditions” page
-	The case must have Unsatisfied conditions
-	The page must be fully loaded
  
To enable the Wizlet in your browser click the button below to copy its source-code to your clipboard. Then create a new bookmark and paste the code in the URL bar of the new-bookmark dialogue box.


<button id="copyButton">Copy Wizlet Code to Clipboard</button>

<script src="/Condition-Wizard/script.js"></script>





  
  
  
  
  
  
