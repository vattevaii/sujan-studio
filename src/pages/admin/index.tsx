import withAdmin from "@/components/withAdmin";
import Link from "next/link";
import * as React from "react";

interface IAdminProps {}

const AdminPage: React.FunctionComponent<IAdminProps> = (props) => {
  return (
    <div>
      <Link href="/admin/image-grid">Image Grid</Link>
      <Link href="/admin/slider">Image Slider</Link>
      <Link href="/admin/add-data">Add Data</Link>
    </div>
  );
};

export default withAdmin(AdminPage);
