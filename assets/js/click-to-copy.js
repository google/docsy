let codeListings = document.querySelectorAll('.highlight > pre');

for (let index = 0; index < codeListings.length; index++) {
  const codeSample = codeListings[index].querySelector('code');
  const copyButton = document.createElement('button');
  const buttonAttributes = {
    type: 'button',
    title: 'Copy to clipboard',
    'data-bs-toggle': 'tooltip',
    'data-bs-placement': 'top',
    'data-bs-container': 'body',
  };

  Object.keys(buttonAttributes).forEach((key) => {
    copyButton.setAttribute(key, buttonAttributes[key]);
  });

  copyButton.classList.add(
    'fas',
    'fa-copy',
    'btn',
    'btn-sm',
    'td-click-to-copy'
  );
  const tooltip = new bootstrap.Tooltip(copyButton);

  copyButton.onclick = () => {
    copyCode(codeSample);
    copyButton.setAttribute('data-bs-original-title', 'Copied!');
    tooltip.show();
  };

  copyButton.onmouseout = () => {
    copyButton.setAttribute('data-bs-original-title', 'Copy to clipboard');
    tooltip.hide();
  };

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('click-to-copy');
  buttonDiv.append(copyButton);
  codeListings[index].insertBefore(buttonDiv, codeSample);
}

const copyCode = (codeSample) => {
  const isConsoleBlock = codeSample.matches(
    "code[data-lang='console'], code.language-console"
  );
  let text;

  if (isConsoleBlock) {
    const clone = codeSample.cloneNode(true);
    pruneUnselectableElements(codeSample, clone);
    text = clone.textContent;
    // For each command, strip the space after the prompt and before the
    // command:
    text = text.replace(/^ /gm, '');
  } else {
    text = codeSample.textContent;
  }
  text = text ? text.trim() : '';
  navigator.clipboard.writeText(text + '\n');
};

const pruneUnselectableElements = (sourceNode, cloneNode) => {
  const sourceChildren = sourceNode.children;
  const cloneChildren = cloneNode.children;

  for (let i = sourceChildren.length - 1; i >= 0; i--) {
    const sourceChild = sourceChildren[i];
    const cloneChild = cloneChildren[i];
    const style = window.getComputedStyle(sourceChild);
    const unselectable =
      style.userSelect === 'none' || style.webkitUserSelect === 'none';

    if (unselectable) {
      cloneChild.remove();
      continue;
    }

    pruneUnselectableElements(sourceChild, cloneChild);
  }
};
