import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import * as taskService from "../services/task.service";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  ListTodo,
  FolderKanban,
  Loader2,
} from "lucide-react";
import { format } from "date-fns";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    taskService.getStats().then((r) => setData(r.data));
  }, []);

  // 🔄 Better Loading UI
  if (!data)
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition">
        <Navbar />
        <div className="flex justify-center items-center h-[70vh]">
          <Loader2 className="animate-spin mr-2" />
          <span>Loading dashboard...</span>
        </div>
      </div>
    );

  const { stats, overdueTasks } = data;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Overview of your projects and tasks
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <StatCard label="Projects" value={stats.projects} color="indigo" icon={<FolderKanban />} />
          <StatCard label="Total Tasks" value={stats.total} color="blue" icon={<ListTodo />} />
          <StatCard label="To Do" value={stats.todo} color="gray" icon={<Clock />} />
          <StatCard label="In Progress" value={stats.inProgress} color="yellow" icon={<Loader2 />} />
          <StatCard label="Done" value={stats.done} color="green" icon={<CheckCircle />} />
          <StatCard label="Overdue" value={stats.overdue} color="red" icon={<AlertCircle />} />
        </div>

        {/* OVERDUE TASKS CARD */}
        <div className="rounded-2xl p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg">
          
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="text-red-500" />
            Overdue Tasks
          </h2>

          {overdueTasks.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              🎉 No overdue tasks!
            </p>
          ) : (
            <ul className="space-y-3">
              {overdueTasks.map((t) => (
                <li
                  key={t.id}
                  className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <div>
                    <p className="font-medium">{t.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t.project.name} •{" "}
                      {t.assignedTo?.name || "Unassigned"}
                    </p>
                  </div>

                  <span className="text-red-600 text-sm font-medium">
                    {format(new Date(t.dueDate), "MMM dd")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
