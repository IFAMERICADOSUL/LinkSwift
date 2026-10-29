const form = document.querySelector("#link-form");
const input = document.querySelector("#share-link");
const result = document.querySelector("#result");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

function showResult(message, type) {
  result.className = `result ${type}`;
  result.replaceChildren();
  result.hidden = false;
  result.append(message);
}

function isHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();

  if (!value || !isHttpUrl(value)) {
    showResult("Enter a valid link beginning with https:// or http://.", "error");
    return;
  }

  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    showResult("This link could not be read. Please check it and try again.", "error");
    return;
  }

  // This frontend checks URL syntax only. It does not resolve private shares
  // or generate direct download URLs; that requires a supported service API.
  const message = document.createDocumentFragment();
  message.append("The URL format looks valid. LinkSwift cannot verify the file or create a direct download URL from this page. Continue to the original share page: ");

  const link = document.createElement("a");
  link.href = parsed.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Open shared link";
  message.append(link);

  showResult(message, "success");
});
