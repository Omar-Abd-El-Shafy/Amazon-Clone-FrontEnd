import React from "react";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    FunnelChart,
    Funnel,
    LabelList,
    PieChart,
    Pie,
} from "recharts";
import BarData from "./data/BarData";
import FunnelData from "./data/FunnelData";
import { PieData01, PieData02 } from "./data/PieData";

export default function DashMain() {
    return (
        <div>
            Users
            <BarChart width={730} height={250} data={BarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            <FunnelChart width={730} height={250}>
                <Tooltip />
                <Funnel dataKey="value" data={FunnelData} isAnimationActive>
                    <LabelList
                        position="right"
                        fill="#000"
                        stroke="none"
                        dataKey="name"
                    />
                </Funnel>
            </FunnelChart>
            <PieChart width={730} height={250}>
                <Pie
                    data={PieData01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                />
                <Pie
                    data={PieData02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                />
            </PieChart>
        </div>
    );
}
