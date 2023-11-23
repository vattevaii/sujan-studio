import Link from 'next/link';
import * as React from 'react';

interface IAdminProps {
}

const AdminPage: React.FunctionComponent<IAdminProps> = (props) => {
  return <div>
    <Link href="/admin/image-grid">Image Grid</Link>
  </div>;
};

export default AdminPage;
