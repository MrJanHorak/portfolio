function setPicturesThemed(colorScheme) {

  // Clean up all existing picture sources that were cloned
  document
    .querySelectorAll("picture > source[data-cloned-theme]")
    .forEach((el) => {
      el.remove();
    });

  if (colorScheme) {

    // Find all picture sources with the desired colour scheme
    document
      .querySelectorAll(
        `picture > source[media="(prefers-color-scheme: ${colorScheme})"]`
      )
      .forEach((el) => {
        // 1. Clone the given <source>
        // 2. Remove the media attribute so the new <source> is unconditional
        // 3. Add a "data-cloned-theme" attribute to it for future reference / removal
        // 4. Prepend the new <source> to the parent <picture> so it takes precedence
        const cloned = el.cloneNode();
        cloned.removeAttribute("media");
        cloned.setAttribute("data-cloned-theme", colorScheme);
        el.parentNode.prepend(cloned);
      });
  }
}

export { setPicturesThemed };
