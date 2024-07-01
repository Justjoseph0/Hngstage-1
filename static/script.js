document.addEventListener("DOMContentLoaded", function () {
  const slackName = "Wurld";
  const slackEmail = "iamonowu@gmail.com";
  const slackProfilePictureUrl = "static/img/slack-img.jpg";

  document.getElementById("slack-name").textContent = slackName;
  document.getElementById("slack-email").textContent = slackEmail;
  document.getElementById("slack-profile-pic").src = slackProfilePictureUrl;

  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("current-time").textContent = utcTime;
    document.getElementById("current-day").textContent = dayOfWeek;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});
