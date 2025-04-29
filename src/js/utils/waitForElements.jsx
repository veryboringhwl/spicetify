import Console from "./Console";
const waitForElements = async (selector, maxAttempts = 50) => {
  let attempts = 1;
  Console.Log(attempts, selector);

  while (!document.querySelector(selector) && attempts < maxAttempts) {
    attempts = attempts + 1;
    Console.Log(attempts, selector);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  Console.Log("found it retard");
  return document.querySelector(selector) || null;
};

export default waitForElements;
