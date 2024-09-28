import { Inter } from "next/font/google";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  // Custom shortcut options, removing "Last 30 days" and adding "Yearly"
  const customShortcuts = [
    {
      label: "Today",
      range: {
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      label: "Yesterday",
      range: {
        startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        endDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    },
    {
      label: "Last 7 Days",
      range: {
        startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
        endDate: new Date(),
      },
    },
    {
      label: "This Month",
      range: {
        startDate: new Date(new Date().setDate(1)),
        endDate: new Date(),
      },
    },
    {
      label: "Last Month",
      range: {
        startDate: new Date(new Date().setMonth(new Date().getMonth() - 1, 1)),
        endDate: new Date(new Date().setDate(0)),
      },
    },
    {
      label: "Yearly",
      range: {
        startDate: new Date(
          new Date().setFullYear(new Date().getFullYear() - 1)
        ),
        endDate: new Date(),
      },
    },
  ];

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="pb-20">
        <h1 className="uppercase text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">
          Date Range Picker
        </h1>
      </div>
      <div className="relative flex place-items-center w-1/6">
        <Datepicker
          placeholder={"Select Date"}
          showShortcuts={true}
          showFooter={true}
          primaryColor={"cyan"}
          value={value}
          shortcuts={customShortcuts}
          onChange={handleValueChange}
        />
      </div>
    </main>
  );
}
