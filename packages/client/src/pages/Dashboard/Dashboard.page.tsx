import React from "react";
import { Page } from "../../components/Page/Page";
import { ProgressWidget } from "../../components/ProgressWidget/ProgressWidget";

export const DashboardPage = () => {
  const javascript = {
    id: "1",
    name: "JavaScript",
    icon: "js",
    description: "JavaScript",
  };
  return (
    <Page title="Dashboard" type="dashboard">
      <h1>Dashboard</h1>
      <ProgressWidget path={javascript} progress={30} />
    </Page>
  );
};
