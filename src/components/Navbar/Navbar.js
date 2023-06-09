import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Language from "../Language/Language";
import Notification from "../Notification/Notification";

function Navbar({
  account,
  toggle,
  setToggle,
  setLogOutToggle,
  url,
  GetUrl,
  setChangePasswordToggle,
}) {
  const [lanBg, setLanBg] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [search, setSearch] = useState("");

  const ToggleHandler = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const menu = [
    {
      name: "Dashboard",
      link:"dashboard",
      icon: (
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.470505 8.38382C0 9.35058 0 10.4504 0 12.6501V19.5197C0 22.5746 0 24.102 1.00421 25.051C1.93951 25.9349 3.40575 25.9955 6.21428 25.9997V17.8998C6.21428 16.0979 7.73439 14.7797 9.42857 14.7797H14.5714C16.2656 14.7797 17.7857 16.0979 17.7857 17.8998V25.9997C20.5943 25.9955 22.0605 25.9349 22.9958 25.051C24 24.102 24 22.5746 24 19.5197V12.6501C24 10.4504 24 9.35058 23.5295 8.38382C23.059 7.41707 22.1754 6.70131 20.4081 5.2698L18.6939 3.88117C15.4996 1.29372 13.9025 0 12 0C10.0975 0 8.50041 1.29372 5.30615 3.88117L5.30615 3.88117L3.59186 5.2698C1.82463 6.70131 0.94101 7.41707 0.470505 8.38382ZM14.7857 26V17.8998V17.8996C14.7857 17.8944 14.7857 17.8751 14.7533 17.8444C14.7189 17.8119 14.658 17.7797 14.5714 17.7797H9.42857C9.34197 17.7797 9.28105 17.8119 9.24666 17.8444C9.21424 17.8751 9.21427 17.8944 9.21428 17.8996V17.8998V26H14.7857Z"
          />
        </svg>
      ),
    },
    {
      name: "Logs",
      link:"logs",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 9H26C27.6569 9 29 10.3431 29 12H3V9Z" />
          <path d="M3 15H29V21.6C29 23.8402 29 24.9603 28.564 25.816C28.1805 26.5686 27.5686 27.1805 26.816 27.564C25.9603 28 24.8402 28 22.6 28H9.4C7.15979 28 6.03969 28 5.18404 27.564C4.43139 27.1805 3.81947 26.5686 3.43597 25.816C3 24.9603 3 23.8402 3 21.6V15Z" />
          <path d="M3 9C3 6.80835 3 5.71252 3.60531 4.97495C3.71612 4.83993 3.83993 4.71612 3.97495 4.60531C4.71252 4 5.80835 4 8 4H10.3147C11.537 4 12.1482 4 12.6837 4.24955C13.2192 4.4991 13.6123 4.96706 14.3985 5.90298L17 9H3Z" />
        </svg>
      ),
    },
    {
      name: "Domains",
      link:"domains",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3879 0.0843855C10.4076 0.217879 9.82642 0.359738 9.82642 0.465629C9.82642 0.516315 9.72787 0.862751 9.6074 1.23538C9.18128 2.55334 8.41457 5.80353 8.50774 5.89672C8.52789 5.91687 8.86744 5.90179 9.26224 5.86313C10.8368 5.70906 12.9494 5.65312 14.5127 5.72408C15.3438 5.76182 16.3476 5.82344 16.7433 5.86094C17.139 5.89849 17.4783 5.91364 17.4973 5.89458C17.5869 5.80494 16.8359 2.62174 16.3945 1.22091C16.2746 0.840339 16.1765 0.493965 16.1765 0.451156C16.1765 0.358517 15.5188 0.207925 14.5584 0.0806603C13.7351 -0.0284061 12.2032 -0.026574 11.3879 0.0843855ZM18.6188 1.3028C18.6188 1.32082 18.7142 1.65785 18.8307 2.05173C19.0961 2.94863 19.4183 4.29083 19.6249 5.36049C19.7123 5.81245 19.7921 6.19058 19.8023 6.20078C19.8125 6.21103 20.1617 6.28529 20.5784 6.3659C21.7851 6.5993 23.6436 7.05395 24.6215 7.35501C24.7177 7.38463 24.7106 7.34658 24.567 7.06317C23.5538 5.0626 21.7693 3.13934 19.7781 1.90163C19.319 1.61626 18.6188 1.25462 18.6188 1.3028ZM6.69638 1.63342C4.89492 2.64342 3.35295 4.06708 2.19516 5.78918C1.8274 6.33616 1.24185 7.37846 1.3023 7.37846C1.32159 7.37846 1.72861 7.26787 2.2067 7.13273C3.21752 6.84705 4.32738 6.58281 5.27757 6.40163C5.64697 6.33122 6.0248 6.25891 6.11712 6.24102C6.23167 6.21885 6.28503 6.17067 6.28503 6.08957C6.28503 5.7664 6.84659 3.13281 7.14266 2.06731C7.24041 1.71562 7.29958 1.40704 7.27418 1.38164C7.24872 1.35618 6.98873 1.46952 6.69638 1.63342ZM10.5286 7.86389C9.01123 7.98114 8.22345 8.07438 8.15269 8.14516C8.07294 8.22485 7.97849 9.06643 7.86504 10.7066C7.74543 12.4363 7.8844 16.8376 8.08711 17.7406C8.12607 17.9139 8.14072 17.9173 9.42954 18.0448C10.2825 18.1292 11.0822 18.1536 13.0015 18.1536C14.9207 18.1536 15.7204 18.1292 16.5734 18.0448C17.8303 17.9205 17.8692 17.9125 17.91 17.7721C17.9265 17.715 17.9891 17.1737 18.0489 16.5691C18.2034 15.0061 18.2034 10.9872 18.0489 9.42422C17.9891 8.81965 17.9261 8.27701 17.909 8.21826C17.8696 8.08263 17.8166 8.07188 16.6039 7.95262C15.4782 7.84196 11.5544 7.78462 10.5286 7.86389ZM4.88069 8.66515C3.68712 8.92188 2.4654 9.23442 1.52248 9.52431C1.06912 9.66366 0.626017 9.79007 0.537849 9.80528C0.392408 9.83026 0.368167 9.87624 0.276946 10.3002C-0.0927625 12.0184 -0.0922743 13.9771 0.278167 15.6989C0.340447 15.9882 0.410237 16.1722 0.457801 16.1722C0.500603 16.1722 0.83734 16.2668 1.20613 16.3824C2.50143 16.7886 4.37885 17.2513 5.69918 17.4898L5.93767 17.5328L5.89652 17.0396C5.75706 15.3669 5.73349 14.7836 5.73294 12.9967C5.73264 11.7531 5.76707 10.5901 5.82514 9.88223C5.94256 8.45209 5.9428 8.47651 5.81183 8.48274C5.75303 8.48555 5.33405 8.56763 4.88069 8.66515ZM20.1074 8.95095C20.13 9.21122 20.1783 9.78146 20.2149 10.2181C20.2515 10.6547 20.2813 11.9051 20.2813 12.9967C20.2813 14.0882 20.2515 15.3386 20.2149 15.7752C20.1783 16.2119 20.1296 16.786 20.1066 17.051L20.0649 17.5329L20.3035 17.4898C21.5413 17.2663 23.2965 16.8289 25.1613 16.2793L25.6284 16.1416L25.7251 15.7017C26.1101 13.9491 26.0905 12.0049 25.6675 10.0196C25.6422 9.90061 25.5879 9.82116 25.5319 9.82116C25.4805 9.82116 25.1336 9.72259 24.761 9.60211C23.6475 9.24199 20.5021 8.47767 20.1337 8.47767C20.0869 8.47767 20.0788 8.62185 20.1074 8.95095ZM1.38357 18.7131C1.33039 18.7663 1.73026 19.5097 2.15193 20.1416C2.65841 20.9004 3.24609 21.6022 3.94424 22.2819C4.87641 23.1894 5.56863 23.7128 6.63398 24.3156C7.1727 24.6205 7.36387 24.6717 7.29494 24.4926C7.176 24.1839 6.7517 22.3957 6.53055 21.2713C6.39182 20.566 6.26555 19.9271 6.24998 19.8515C6.23179 19.7634 6.17714 19.7141 6.09764 19.7141C5.75535 19.7141 2.60816 19.0156 1.55148 18.7052C1.48346 18.6852 1.40787 18.6888 1.38357 18.7131ZM23.9624 18.8347C23.3169 19.0285 21.5863 19.4234 20.6338 19.5942C20.214 19.6695 19.8476 19.7516 19.8195 19.7766C19.7915 19.8016 19.703 20.1757 19.6229 20.6078C19.4621 21.4755 19.0781 23.0699 18.7992 24.0284C18.7 24.3693 18.6188 24.6673 18.6188 24.6905C18.6188 24.7527 19.6165 24.2024 20.1453 23.8485C21.7139 22.7988 23.1922 21.2632 24.1254 19.7141C24.4879 19.1123 24.6026 18.8855 24.6026 18.7706C24.6026 18.6514 24.5582 18.6558 23.9624 18.8347ZM8.50908 20.3003C8.74227 21.592 9.25229 23.6419 9.64856 24.8806C9.74637 25.1863 9.82642 25.4778 9.82642 25.5282C9.82642 25.5932 9.96466 25.6497 10.2996 25.7218C12.02 26.0921 13.9797 26.0928 15.6946 25.7237L16.1591 25.6237L16.2204 25.3711C16.2541 25.2322 16.3836 24.7888 16.5082 24.3857C16.9248 23.0383 17.5819 20.1833 17.4954 20.0968C17.4768 20.0782 17.138 20.0944 16.7427 20.1329C14.5779 20.3435 11.7754 20.3745 10.0308 20.2072C9.68983 20.1745 9.19831 20.1285 8.93845 20.1049L8.4661 20.0621L8.50908 20.3003Z"
          />
        </svg>
      ),
    },
    {
      name: "Links",
      link:"links",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L12 22C9.79086 24.2091 6.20914 24.2091 4 22V22C1.79086 19.7909 1.79086 16.2091 4 14L7 11"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 9L9 17"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 15L22 12C24.2091 9.79086 24.2091 6.20914 22 4V4C19.7909 1.79086 16.2091 1.79086 14 4L11 7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Profile",
      link:"profile",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M27.8604 26.6387C28.4602 26.5193 28.8156 25.8911 28.5301 25.3501C27.6395 23.6622 26.1439 22.1787 24.1931 21.0665C21.8426 19.7264 18.9627 19 16 19C13.0373 19 10.1574 19.7264 7.80693 21.0665C5.85609 22.1787 4.36045 23.6621 3.46986 25.3501C3.18444 25.8911 3.53976 26.5193 4.13964 26.6387L8.18961 27.445C13.3459 28.4716 18.6541 28.4716 23.8104 27.445L27.8604 26.6387Z" />
          <circle cx="16" cy="10" r="7" />
        </svg>
      ),
    },
  ];
  return (
    <div className={classes.Navbar}>
      <div className={`${classes.nav_left} ${toggle && classes.active}`}>
        <div className={classes.nav_left_logo}>
          <Link to={"/"}>
            <img src="/uploads/logos/logo.png" alt="" />
            {toggle && <h3>OWL</h3>}
          </Link>

          <div
            className={`${classes.toggle} ${!toggle && classes.toggleActive}`}
            onClick={() => {
              ToggleHandler();
            }}
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292583 6.79519L8.74123 0.881139C9.27145 0.509984 10 0.889306 10 1.53652V12.4635C10 13.1107 9.27145 13.49 8.74123 13.1189L0.292583 7.20481C0.150404 7.10528 0.150403 6.89472 0.292583 6.79519Z"
                fill="#4C4E5E"
              />
            </svg>
          </div>
        </div>
        <div className={classes.nav_menu}>
          {toggle && <span>MAIN MENU</span>}
          <ul>
            {menu.map((item, index) => (
              <NavbarMenu
                url={url}
                GetUrl={GetUrl}
                key={index}
                toggle={toggle}
                link={item.link}
                name={item.name}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        {account.isStaff ? (
          <div className={classes.adminMenu}>
            <span> {toggle && "ADMIN MENU"}</span>
            <NavbarMenu
              url={url}
              GetUrl={GetUrl}
              toggle={toggle}
              name={"Users & Results"}
              link={"usersResult"}
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="12" r="4" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.2683 21.2111C23.3449 21.3494 23.3055 21.5219 23.1789 21.6166C21.1769 23.1135 18.692 23.9999 15.9999 23.9999C13.3079 23.9999 10.8228 23.1134 8.82085 21.6165C8.69421 21.5218 8.65484 21.3493 8.73141 21.211C9.99829 18.9219 12.7764 17.3333 15.9999 17.3333C19.2233 17.3333 22.0015 18.922 23.2683 21.2111Z"
                  />
                  <path
                    d="M22.6667 5.33325H23.336C24.9512 5.33325 25.7587 5.33325 26.3778 5.64259C26.946 5.92651 27.4067 6.38722 27.6907 6.95545C28 7.57453 28 8.3821 28 9.99725V10.6666M22.6667 26.6666H23.336C24.9512 26.6666 25.7587 26.6666 26.3778 26.3573C26.946 26.0733 27.4067 25.6126 27.6907 25.0444C28 24.4253 28 23.6177 28 22.0026V21.3333M9.33333 5.33325H8.664C7.04885 5.33325 6.24127 5.33325 5.6222 5.64259C5.05397 5.92651 4.59326 6.38722 4.30934 6.95545C4 7.57453 4 8.3821 4 9.99725V10.6666M9.33333 26.6666H8.664C7.04885 26.6666 6.24127 26.6666 5.6222 26.3573C5.05397 26.0733 4.59326 25.6126 4.30934 25.0444C4 24.4253 4 23.6177 4 22.0026V21.3333"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
            <NavbarMenu
              url={url}
              GetUrl={GetUrl}
              toggle={toggle}
              name={"Moderation"}
              link={"admin"}
              icon={
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8773 0.0169146C10.3736 0.133643 10.3087 0.249609 10.0575 1.4819L9.8506 2.49695L9.29152 2.70757C8.98405 2.82344 8.5225 3.01544 8.26594 3.13421L7.79945 3.35022L6.94326 2.78021C6.06757 2.19722 5.87499 2.11574 5.55659 2.19361C5.39844 2.23227 2.3716 5.19473 2.24327 5.43643C2.14614 5.61943 2.15099 5.90263 2.25476 6.10272C2.30118 6.19224 2.56759 6.6057 2.84672 7.0215L3.35428 7.77751L3.1374 8.24219C3.01811 8.49777 2.82533 8.95747 2.709 9.26371L2.49753 9.82055L1.47839 10.0266C0.375291 10.2497 0.197833 10.3252 0.0705745 10.6256C0.0141966 10.7587 0 11.2324 0 12.9793C0 15.1521 0.000766009 15.1675 0.113675 15.3484C0.176232 15.4486 0.302622 15.5696 0.394543 15.6174C0.486514 15.6652 0.997132 15.7901 1.52935 15.895L2.49697 16.0856L2.70874 16.6432C2.82523 16.9499 3.01811 17.4099 3.13735 17.6655L3.35423 18.1301L2.77921 18.9869C2.29883 19.7027 2.20042 19.8823 2.18158 20.0779C2.16692 20.2295 2.18668 20.3643 2.2376 20.4603C2.36966 20.7094 5.39399 23.6743 5.55659 23.7141C5.87152 23.7911 6.06711 23.7096 6.91078 23.1497L7.73664 22.6016V20.2169V17.8321L7.47242 17.5165C6.69737 16.5907 6.1339 15.3666 5.92504 14.1552C5.82326 13.565 5.82326 12.3427 5.92504 11.7525C6.34685 9.30623 8.02537 7.23914 10.3385 6.31736C11.1613 5.98951 11.7405 5.87654 12.7503 5.84704C13.8045 5.81627 14.386 5.89134 15.2331 6.16762C16.2985 6.51506 17.1516 7.03182 17.9864 7.83539C19.0835 8.89155 19.8165 10.2701 20.0689 11.7525C20.1697 12.3439 20.1692 13.5683 20.068 14.1552C19.8599 15.3625 19.3261 16.5311 18.557 17.4636L18.2564 17.8281V20.2149V22.6016L19.0823 23.1497C19.9259 23.7096 20.1215 23.7911 20.4365 23.7141C20.5991 23.6743 23.6234 20.7094 23.7555 20.4603C23.8064 20.3643 23.8261 20.2295 23.8115 20.0779C23.7926 19.8823 23.6942 19.7027 23.2138 18.9869L22.6388 18.1301L22.8557 17.6655C22.9749 17.4099 23.1677 16.9502 23.2841 16.644L23.4955 16.0872L24.5147 15.8811C25.6178 15.658 25.7952 15.5825 25.9225 15.2821C26.0258 15.038 26.0258 10.8697 25.9225 10.6256C25.7952 10.3252 25.6178 10.2497 24.5147 10.0266L23.4955 9.82055L23.2841 9.26371C23.1677 8.95747 22.9749 8.49777 22.8557 8.24224L22.6388 7.77762L23.2138 6.92079C23.6942 6.20501 23.7926 6.02541 23.8115 5.82985C23.8261 5.67823 23.8064 5.54344 23.7555 5.44742C23.6234 5.19829 20.5991 2.23339 20.4365 2.19361C20.1181 2.11574 19.9255 2.19722 19.0498 2.78021L18.1936 3.35022L17.7271 3.13421C17.4706 3.01544 17.009 2.82344 16.7015 2.70757L16.1425 2.49695L15.9347 1.48205C15.8098 0.872162 15.6885 0.410333 15.6308 0.324732C15.418 0.00918353 15.4264 0.0102517 13.0987 0.00135077C11.9331 -0.0031251 10.9334 0.00389388 10.8773 0.0169146ZM10.4954 8.86368C9.54017 9.40749 8.68168 10.5339 8.34729 11.6823C8.17607 12.2703 8.14951 13.3894 8.29265 13.9867C8.62101 15.3572 9.46648 16.4877 10.6484 17.1368L10.9503 17.3026L10.9648 21.3715C10.979 25.3369 10.982 25.4448 11.0815 25.6093C11.1377 25.7022 11.2641 25.8281 11.3624 25.8891C11.5352 25.9963 11.5895 26 12.9965 26C14.4035 26 14.4579 25.9963 14.6307 25.8891C14.729 25.8281 14.8554 25.7022 14.9115 25.6093C15.0111 25.4448 15.014 25.3369 15.0282 21.3715L15.0427 17.3026L15.3446 17.1368C16.5598 16.4694 17.4401 15.2613 17.7225 13.8731C17.8402 13.2945 17.8034 12.2287 17.6467 11.6823C17.3852 10.7701 16.7493 9.80951 16.0303 9.24041C15.5577 8.86642 15.3044 8.7323 15.0707 8.7323C14.8388 8.7323 14.5965 8.93498 14.5343 9.18106C14.5083 9.2839 14.3879 10.0605 14.2668 10.9067L14.0467 12.4452H12.9965H11.9464L11.7262 10.9067C11.6052 10.0605 11.4848 9.2839 11.4588 9.18106C11.4321 9.07567 11.3433 8.93692 11.2554 8.86317C11.0514 8.69227 10.7962 8.69247 10.4954 8.86368Z"
                  />
                </svg>
              }
            />
          </div>
        ) : (
          ""
        )}

        <div
          className={`${classes.nav_bottom} ${
            toggle || classes.toggleBottomLinks
          }`}
        >
          <NavbarMenu
            url={url}
            GetUrl={GetUrl}
            toggle={toggle}
            setChangePasswordToggle={setChangePasswordToggle}
            name={"Settings"}
            link={"settings"}
            icon={
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.0001 0.817871C12.3427 0.817871 11.7707 1.23945 10.6268 2.08261L7.42089 4.44564C7.24068 4.57846 7.15058 4.64488 7.05385 4.70073C6.95711 4.75658 6.85454 4.8014 6.64941 4.89105L3.00001 6.48594C1.69786 7.05501 1.04678 7.33955 0.718064 7.90891C0.389344 8.47827 0.468465 9.18439 0.626707 10.5966L1.07019 14.5545C1.09512 14.777 1.10759 14.8882 1.10759 14.9999C1.10759 15.1117 1.09512 15.2229 1.07019 15.4454L0.626707 19.4033C0.468465 20.8155 0.389344 21.5216 0.718064 22.091C1.04678 22.6603 1.69786 22.9449 3.00001 23.514L6.64941 25.1088C6.85454 25.1985 6.95711 25.2433 7.05385 25.2992C7.15058 25.355 7.24068 25.4214 7.42089 25.5543L10.6268 27.9173C11.7707 28.7604 12.3427 29.182 13.0001 29.182C13.6575 29.182 14.2295 28.7604 15.3734 27.9173L18.5793 25.5543L18.5794 25.5542C18.7596 25.4214 18.8496 25.355 18.9464 25.2992C19.0431 25.2433 19.1457 25.1985 19.3508 25.1088L23.0002 23.514C24.3023 22.9449 24.9534 22.6603 25.2821 22.091C25.6109 21.5216 25.5317 20.8155 25.3735 19.4033L24.93 15.4454C24.9051 15.2229 24.8926 15.1117 24.8926 14.9999C24.8926 14.8882 24.9051 14.777 24.93 14.5545L25.3735 10.5966C25.5317 9.18439 25.6109 8.47827 25.2821 7.90891C24.9534 7.33955 24.3023 7.05501 23.0002 6.48594L19.3508 4.89105C19.1457 4.8014 19.0431 4.75658 18.9464 4.70073C18.8496 4.64488 18.7595 4.57848 18.5794 4.44567L18.5793 4.44564L15.3734 2.08261C14.2295 1.23945 13.6575 0.817871 13.0001 0.817871ZM13.0001 20.3333C15.9456 20.3333 18.3334 17.9455 18.3334 15C18.3334 12.0544 15.9456 9.66662 13.0001 9.66662C10.0546 9.66662 7.66677 12.0544 7.66677 15C7.66677 17.9455 10.0546 20.3333 13.0001 20.3333Z"
                />
              </svg>
            }
          />
          <NavbarMenu
            url={url}
            GetUrl={GetUrl}
            setLogOutToggle={setLogOutToggle}
            toggle={toggle}
            name={"Log out"}
            link={"logout"}
            icon={
              <svg
                width="20"
                height="28"
                viewBox="0 0 20 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.1719 1.5582L10.0913 0.785161C14.3854 0.110371 16.5324 -0.227024 17.9328 0.970469C19.3332 2.16796 19.3332 4.34137 19.3332 8.68818V12.4995H11.7874L15.1711 8.2699L12.8285 6.39582L7.4952 13.0625L6.74557 13.9995L7.4952 14.9366L12.8285 21.6032L15.1711 19.7292L11.7874 15.4995H19.3332V19.3109C19.3332 23.6577 19.3332 25.8311 17.9328 27.0286C16.5324 28.2261 14.3854 27.8887 10.0913 27.2139L5.1719 26.4409C3.02159 26.1029 1.94644 25.934 1.30647 25.1856C0.666504 24.4372 0.666504 23.3489 0.666504 21.1722V6.82688C0.666504 4.65018 0.666504 3.56183 1.30647 2.81345C1.94644 2.06506 3.02159 1.89611 5.1719 1.5582Z"
                  fill="#E23147"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div
        className={`${classes.nav_top} ${toggle && classes.toggleNavbarTop}`}
      >
        <div className={`row ${classes.row}`}>
          <div className={classes.left_top}>
            <div className={classes.pageName}>
              <span>{url}</span>
            </div>
            <div className={classes.navSearch}>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className={classes.searchIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="#4C4E5D"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 20L17 17"
                    stroke="#4C4E5D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={classes.right_top}>
            <div className={classes.languages}>
              <Language lanBg={lanBg} setLanBg={setLanBg} />
            </div>
            <div className={classes.balance}>
              <h3>
                Balance:{" "}
                <span>$ {account.balance ? account.balance : 0.0}</span>
              </h3>
            </div>
            <div
              className={classes.notification}
              onClick={() => {
                if (notificationToggle) {
                  setNotificationToggle(false);
                } else {
                  setNotificationToggle(true);
                }
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.3322 4.78598C18.3262 4.28204 17.1931 4 15.9999 4C12.2046 4 9.01616 6.85376 8.59703 10.6259L8.2613 13.6475C8.19307 14.2616 8.15895 14.5686 8.10207 14.8691C7.9645 15.5959 7.72682 16.3 7.39582 16.9614C7.25895 17.2349 7.1 17.4998 6.78212 18.0297L5.8173 19.6377C5.01155 20.9806 4.60867 21.6521 4.8959 22.1594C5.18313 22.6667 5.96618 22.6667 7.53229 22.6667H24.4675C26.0336 22.6667 26.8167 22.6667 27.1039 22.1594C27.3911 21.6521 26.9883 20.9806 26.1825 19.6377L25.2177 18.0297L25.2176 18.0295C24.8998 17.4998 24.7409 17.2349 24.604 16.9614C24.273 16.3 24.0353 15.5959 23.8978 14.8691C23.8413 14.5708 23.8073 14.266 23.74 13.6608C20.731 13.525 18.3332 11.0425 18.3332 8C18.3332 6.80655 18.7022 5.69926 19.3322 4.78598ZM21.6987 6.65177C22.6143 7.73842 23.2272 9.09513 23.3997 10.5989C22.216 10.3266 21.3332 9.26639 21.3332 8C21.3332 7.50812 21.4664 7.04735 21.6987 6.65177Z"
                  fill="#999CB1"
                />
                <path
                  d="M12 22.6665C12 23.1918 12.1035 23.7119 12.3045 24.1972C12.5055 24.6825 12.8001 25.1235 13.1716 25.4949C13.543 25.8664 13.984 26.161 14.4693 26.362C14.9546 26.563 15.4747 26.6665 16 26.6665C16.5253 26.6665 17.0454 26.563 17.5307 26.362C18.016 26.161 18.457 25.8664 18.8284 25.4949C19.1999 25.1235 19.4945 24.6825 19.6955 24.1972C19.8965 23.7119 20 23.1918 20 22.6665L16 22.6665H12Z"
                  fill="#999CB1"
                />
                <circle cx="24" cy="8" r="3" fill="#FF6B3C" />
              </svg>
              {notificationToggle && <Notification />}
            </div>
            <div className={classes.account}></div>
          </div>
        </div>
      </div>
      {lanBg && (
        <div
          className={classes.languageBackground}
          onClick={() => {
            setNotificationToggle(false);
            setLanBg(false);
          }}
        ></div>
      )}
      {notificationToggle && (
        <div
          className={classes.languageBackground}
          onClick={() => {
            setLanBg(false);
            setNotificationToggle(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
