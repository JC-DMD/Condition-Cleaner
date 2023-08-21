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
  
To enable the Wizlet in your browser click the button below to navigate to a webpage with its source-code. Copy it to your clipboard, then create a new bookmark and paste the code in the URL bar of the new-bookmark dialogue box.



<button id="copyButton" onclick="window.location.href='https://jc-dmd.github.io/Bookmarklets/)https://jc-dmd.github.io/Bookmarklets/';">Go to Bookmarklets Page</button>
