import React from "react";
import LogoIcon from "@assets/svg/logo1.svg";
import Line from "@assets/svg/sidebar/Line 1.svg";
import ListItem from "./ListItem";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

// svg
import ExpertsIcon from "@assets/svg/sidebar/expertsLogo.svg";
import SupportIcon from "@assets/svg/sidebar/supportIcon.svg";
import UserIcon from "@assets/svg/sidebar/userIcon.svg";

export function Sidebar({ userRule }) {
  const userData = { type: "genuine" };

  const userSidebar = [
    {
      title: "خانه",
      links: ["/user/dashboard"],
      icon: ExpertsIcon,
    },
    {
      title: "خدمات",
      drop: [
        "درخواست حد اعتباری",
        "درخواست ضمانتنامه",
        "درخواست تسهیلات",
        "درخواست های جاری",
      ],
      links: [
        "/user/warranty-docs-upload",
        "/user/credit-limit",
        "/user/tashilat/1",
        "/user/current-requests",
      ],
      icon: SupportIcon,
    },
    {
      title: "پشتیبانی",
      drop: ["مشاهده تیکت ها", "ثبت تیکت", "اعلانات"],
      links: ["/user/view-tickets", "/user/new-tiket", "/user/notifications"],
      icon: SupportIcon,
    },
    {
      title: "راهنمای سایت",
      links: ["/user/guide"],
      icon: UserIcon,
    },
    {
      title: "نمایه",
      drop: ["اطلاعات کاربری", "تغییر گذرواژه"],
      links: [
        `/user/${
          userData?.type === "genuine"
            ? "update_genuine_profile"
            : "update_legal_profile"
        }`,
        "/user/change-password",
      ],
      icon: UserIcon,
    },
  ];
  return (
    <section
      className={` flex flex-col items-center bg-white rounded-3xl w-full h-[95vh] sc overflow-y-auto transition max-lg:fixed max-lg:h-screen max-lg:top-0 max-lg:right-0 max-lg:w-2/3 max-lg:z-50`}
    >
      <img className=" m-4" src={LogoIcon} alt="Logo" />
      <img src={Line} alt="" />
      <Link
        to={`/${
          userData?.type === "genuine" || userData?.type === "legal"
            ? "user"
            : userData?.type
        }/dashboard`}
        className=" my-8 font-bold text-[#0D294E]"
      >
        داشبورد
      </Link>
      <nav className=" w-full px-4">
        <ul className=" text-[#0D294E] mb-2">
          {userSidebar.map((item, index) => {
            if (item.links.length === 1)
              return <ListItem key={index} {...item} />;
            if (item.links.length > 1)
              return <Dropdown key={index} {...item} />;
          })}
        </ul>
      </nav>
    </section>
  );
}
