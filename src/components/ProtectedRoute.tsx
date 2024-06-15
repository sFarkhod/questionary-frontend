import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface ProtectedComponentProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedComponentProps> = ({ children }) => {
  const { access, refresh } = useSelector((state: any) => state.user);
  const isAdmin = useSelector((state: any) => state.user.is_Admin);


  return access && refresh && isAdmin == true ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRoute;