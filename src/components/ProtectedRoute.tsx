import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NotFound from './NotFound';

interface ProtectedComponentProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedComponentProps> = ({ children }) => {
  const { access, refresh } = useSelector((state: any) => state.user);
  const isAdmin = useSelector((state: any) => state.user.is_Admin);


  return access && refresh && isAdmin == true ? (
    <>{children}</>
  ) : (
    <NotFound />
  );
}

export default ProtectedRoute;