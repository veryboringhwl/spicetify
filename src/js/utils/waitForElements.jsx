const waitForElements = async (selector, maxAttempts = 50) => {
  let attempts = 1;

  while (!document.querySelector(selector) && attempts < maxAttempts) {
    attempts = attempts + 1;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return document.querySelector(selector) || null;
};

export default waitForElements;
