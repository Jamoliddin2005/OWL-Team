import React from "react";
import classes from "./Notification.module.css";

function Notification() {
  const news = [
    {
      name: "New bell name tag",
      new: true,
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "Today at 12:30",
    },
    {
      name: "New bell name tag",
      new: false,
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "Today at 12:30",
    },
    {
      name: "New bell name tag",
      new: true,
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "Today at 12:30",
    },
    {
      name: "New bell name tag",
      new: true,
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "Today at 12:30",
    },
  ];

  return (
    <div className={classes.Notification}>
      <div className={classes.NotificationNavbar}>
        <h3>Notification</h3>
      </div>
      <div className={classes.Notifications}>
        {news.map((item, index) => (
          <div className={classes.New}>
            <div className={classes.newTitle}>
              <h4>{item.name}</h4>
              {item.new && <div className={classes.newIcon}></div>}
            </div>
            <div className={classes.newsDesc}>
              <p>{item.desc}</p>
            </div>
            <div className={classes.date}>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
