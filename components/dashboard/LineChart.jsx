"use client";

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function LineChart({ data, dataKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReLineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={dataKey} stroke="black" strokeWidth={3} dot={false} />
      </ReLineChart>
    </ResponsiveContainer>
  );
}
