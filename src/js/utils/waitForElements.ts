export const waitForElements = async (
  selector: string,
  maxAttempts: number = 50,
): Promise<Element | null> => {
  let attempts: number = 1;

  while (!document.querySelector(selector) && attempts < maxAttempts) {
    attempts++;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return document.querySelector(selector) || null;
};
