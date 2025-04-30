const Console = {
  Log: (...messages) =>
    console.log(
      `%c● ᴗ ● [Theme]%c${messages.join(" ")}`,
      "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-right:none; border-radius:3px 0 0 3px;",
      "color:#000000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-left:none; border-radius:0 3px 3px 0;",
    ),
  Error: (...messages) =>
    console.error(
      `%c● ᴗ ● [Theme]%c${messages.join(" ")}`,
      "color:#ff6060; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #ee6969; border-right:none; border-radius:3px 0 0 3px;",
      "color:#000000; background:#ffffff; padding:3px; border:2px solid #ee6969; border-left:none; border-radius:0 3px 3px 0;",
    ),
  Warn: (...messages) =>
    console.warn(
      `%c● ᴗ ● [Theme]%c${messages.join(" ")}`,
      "color:#ee8860; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #ff8860; border-right:none; border-radius:3px 0 0 3px;",
      "color:#000000; background:#ffffff; padding:3px; border:2px solid #ff8860; border-left:none; border-radius:0 3px 3px 0;",
    ),
  Debug: (...messages) =>
    console.debug(
      `%c● ᴗ ● [Theme]%c${messages.join(" ")}`,
      "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-right:none; border-radius:3px 0 0 3px;",
      "color:#000000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-left:none; border-radius:0 3px 3px 0;",
    ),
};

Console.Log("Log message");
Console.Error("Error message");
Console.Warn("Warning message");
Console.Debug("Debug message");

export default Console;
