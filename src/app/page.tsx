"use client";
import BarChartPage from "../components/barChart";
import AreChartPage from "../components/areaChart";
import UserDetails from "@/components/userDetails";
import PieChartPage from "@/components/pieChartPage";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 ">
      <div className="bg-primary-foreground p-4 rounded-lg border-2 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <BarChartPage />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg border-2 w-full">
        <UserDetails />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg border-2">
        <PieChartPage />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg border-2">
        04
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg border-2 lg:col-span-2 xl:col-span-1 2xl:col-span-2 w-full">
        <AreChartPage />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg border-2">
        06
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg border-2 w-full">
        <BarChartPage />
      </div>
    </div>
  );
}
