const replaceMintlify = () => {
  const el = document.querySelector('a[href*="mintlify"]');

  if (!el) return;

  const copyright = `© 2025 - ${new Date().getFullYear()} Xerobi Labs`;

  if (el.textContent.trim() !== copyright || el.tagName !== "SPAN") {
    const span = document.createElement("span");
    span.innerHTML = `© 2025 - ${new Date().getFullYear()} Xerobi Labs`;
    el.replaceWith(span);
  }
};

replaceMintlify();

new MutationObserver(replaceMintlify).observe(document.body, {
  childList: true,
  subtree: true,
});