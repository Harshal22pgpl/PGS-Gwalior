import AdminLayout from "@/components/Layouts/AdminLayout";
import Loader from "@/components/Loader/Loader";
import { Suspense } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout for admin
}) {
  return (
    <AdminLayout>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </AdminLayout>
  );
}
