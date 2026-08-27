  _initializeTargetsAndObservables() {
    this._targetLinks = new Map()
    this._observableSections = new Map()

    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target)

    for (const anchor of targetLinks) {
      // ensure that the anchor has an id and is not disabled
      if (!anchor.hash || isDisabled(anchor)) {
        continue
      }

      const decodedHash = decodeURI(anchor.hash)
      const escapedSelector = parseSelector(decodedHash)
      const observableSection = SelectorEngine.findOne(escapedSelector, this._element)

      // ensure that the observableSection exists & is visible
      if (isVisible(observableSection)) {
        this._targetLinks.set(decodedHash, anchor)
        this._observableSections.set(anchor.hash, observableSection)
      }
    }
  }
