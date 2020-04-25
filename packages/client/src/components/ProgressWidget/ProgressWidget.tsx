import React from "react";

interface PathProgress {
  path: Path;
  progress: number;
}

interface Path {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const ProgressWidget: React.FunctionComponent<PathProgress> = ({
  path,
  progress,
}) => {
  return (
    <div>
      <h1>My Progress Widget</h1>
      <p>{JSON.stringify(path)}</p>
      <p>{progress}</p>
    </div>
  );
};
