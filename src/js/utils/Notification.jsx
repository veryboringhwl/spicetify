import React from "react";
import Console from "./Console";

const Notification = ({
  message = "",
  keyPrefix = "custom-notif",
  autoHideDuration = 3000,
  backgroundColor = "#fff",
  color = "#000",
} = {}) => {
  Spicetify.Snackbar.enqueueCustomSnackbar(keyPrefix, {
    keyPrefix,
    autoHideDuration,
    children: (
      <div
        className="custom-notification"
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          color: color,
          backgroundColor: backgroundColor,
          padding: "14px 16px",
          borderRadius: "4px",
          fontSize: "0.875rem",
        }}
      >
        {message}
      </div>
    ),
  });
};

// Example usage:
// Notification({
//   autoHideDuration: 5000,
//   backgroundColor: "#ff9800",
//   message: (
//     <>
//       <svg
//         width="20"
//         height=""
//         viewBox="0 0 96 96"
//         fill="currentColor"
//         dangerouslySetInnerHTML={{ __html: Icons.warning }}
//       />
//       <span>
//         Theme only supports Spotify versions greater than 1.2.50.000
//       </span>
//     </>
//   ),
// });

export default Notification;
