
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyRules: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the company selection page
    navigate('/select-company');
  }, [navigate]);

  return null; // This component will not render anything as it immediately redirects
};

export default CompanyRules;
