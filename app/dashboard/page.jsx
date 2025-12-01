import StateCard from "@/components/dashboard/StateCard";
import ChartCard from "@/components/dashboard/ChartCard";
import LineChart from "@/components/dashboard/LineChart";
import BarChart from "@/components/dashboard/BarChart";

const monthlyData = [
  { month: "Jan", users: 40, posts: 12, comments: 30, views: 500 },
  { month: "Feb", users: 60, posts: 18, comments: 44, views: 700 },
  { month: "Mar", users: 80, posts: 22, comments: 50, views: 900 },
  { month: "Apr", users: 120, posts: 25, comments: 70, views: 1200 },
  { month: "May", users: 150, posts: 30, comments: 90, views: 1500 },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StateCard title="Total Users" value="150" />
        <StateCard title="Total Posts" value="30" />
        <StateCard title="Total Comments" value="90" />
        <StateCard title="Total Views" value="1500" />
      </div>

      <ChartCard title="Users Growth">
        <LineChart data={monthlyData} dataKey="users" />
      </ChartCard>

      <ChartCard title="Views Growth">
        <LineChart data={monthlyData} dataKey="views" />
      </ChartCard>

      <ChartCard title="Posts Per Month">
        <BarChart data={monthlyData} dataKey="posts" />
      </ChartCard>

      <ChartCard title="Comments Per Month">
        <BarChart data={monthlyData} dataKey="comments" />
      </ChartCard>

    </div>
  );
}
