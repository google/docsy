---
title: Printing ticket thread without internal notes
category: Zendesk
description: How to print a ticket thread without the internal notes.
---

## Printing a clean ticket thread

Zendesk [does not](https://support.zendesk.com/hc/en-us/community/posts/4409222754458-Ability-to-print-ticket-without-internal-note-comment) have the ability to print ticket threads without the internal notes. Even if you filter by only public conversations and click the `Print ticket` action, the generated output will still contain internal comments.

Sometimes there is a need to print ticket threads to share the content with the customers or for documentation purposes.

An easy way of cleaning up the HTML DOM output is by using a javascript bookmarklet to do it.

1. Click on your bookmark bar in your browser and select `Add page...`
1. Give it a name of `Remove Zendesk Internal Notes`
1. Paste the following code snippet into the URL input box

```javascript
javascript:(function(){null!==document.getElementById("ccs")&&document.getElementById("ccs").remove(),null!==document.getElementById("fields")&&document.getElementById("fields").remove(),null!==document.getElementById("custom_fields")&&document.getElementById("custom_fields").remove();const list=document.querySelectorAll("#comments > .comment");for(let item of list){let e=item.children,l=[].filter.call(e,e=>[].includes.call(e.classList,"mast"))[0],t=l.children,s=[].filter.call(t,e=>[].includes.call(e.classList,"internal_note"))[0];void 0!==s&&item.remove()}})();
```

To use the bookmarklet, go to any ticket and click `Print ticket`. That will bring you to a new page with the print dialog opened. Cancel the print dialog and click the `Remove Zendesk Internal Notes` bookmark to remove the internal notes. Please verify that the content you want removed has been actually removed. You can then print to paper or save as a PDF

### Formatted bookmarklet with comments

```javascript
javascript:(function(){
    // Remove the cc 
    if (document.getElementById('ccs') !== null) {
        document.getElementById('ccs').remove();
    }
    // Remove the fields section
    if (document.getElementById('fields') !== null) {
        document.getElementById('fields').remove();
    }
    // Remove the custom fields section
    if (document.getElementById('custom_fields') !== null) {
        document.getElementById('custom_fields').remove();
    }
    // Select all comments
    const list = document.querySelectorAll('#comments > .comment');
    for (let item of list) {
        // Select the children elements of the comments
        const commentChildren = item.children;
        // Pull out the mast element specifically
        const mastElement = [].filter.call(
            commentChildren, element => [].includes.call(element.classList, 'mast')
        )[0];

        // Select the children elements of the mast element
        const mastChildren = mastElement.children;

        // Pull out the internal_note element
        const internalNoteElement = [].filter.call(
            mastChildren, element => [].includes.call(element.classList, 'internal_note')
        )[0];

        // If the internal note element exists, we remove the main comment
        if (typeof internalNoteElement !== 'undefined') {
            item.remove();
        }
    }
})();
```
