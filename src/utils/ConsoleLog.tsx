const ConsoleLog = (message) =>
  console.log(
    `%c● ᴗ ● [Theme]%c${message}`,
    "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border-radius:3px 0 0 3px;",
    "color:#000000; background:#ffffff; padding:3px; border-radius:0 3px 3px 0;"
  );

export default ConsoleLog;
