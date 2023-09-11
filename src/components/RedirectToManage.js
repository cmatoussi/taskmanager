// RedirectToManage.js
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function RedirectToManage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/manage');
  }, [navigate]);

  return null; // This component doesn't render anything
}

export default RedirectToManage;
