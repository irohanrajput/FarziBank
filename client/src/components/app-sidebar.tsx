"use client";
import {
  UserRound,
  Home,
  Inbox,
  Search,
  Settings,
  HandCoins,
  CreditCard,
  Landmark,
  ChartCandlestick,
  PartyPopper,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Accounts",
    url: "#",
    icon: UserRound,
  },
  {
    title: "Investments",
    url: "#",
    icon: ChartCandlestick,
  },
  {
    title: "Credit Cards",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Loans",
    url: "#",
    icon: HandCoins,
  },
  {
    title: "Services",
    url: "#",
    image: "./service.svg",
  },
  {
    title: "My Privileges",
    url: "#",
    icon: PartyPopper,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [opened, setOpened] = useState("Dashboard");
  console.log("Opened item:", opened);
  return (
    <Sidebar>
      <SidebarContent className=" my-4 p-2">
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="flex items-center ml-4 ">
              <img src="./cards.svg" alt="" />
              <h1 className="text-2xl m-2 p-2 font-bold font-sans text-primary2">
                BlueBank.
              </h1>
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent className=" my-4  p-2 ">
            <SidebarMenu className=" my-2 pl-2">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onClick={(e) => {
                    setOpened(item.title);
                  }}
                >
                  <SidebarMenuButton
                    className={`py-7 px-3 transition-all duration-200 ease-in-out ${
                      opened === item.title
                        ? "border-solid border-l-12 border-primary2 bg-muted scale-[1.02]"
                        : "opacity-80 hover:opacity-100"
                    }`}
                    asChild
                  >
                    <a href={item.url}>
                      {item.icon ? (
                        <item.icon className=" mr-2 opacity-60" />
                      ) : (
                        <img
                          className="w-4 h-4 mr-2"
                          src={item.image}
                          alt="icon"
                        />
                      )}
                      <span className="text-lg font-Inter opacity-70">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
