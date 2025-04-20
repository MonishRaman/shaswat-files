
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building } from 'lucide-react';

const companies = [
  { id: 'accenture', name: 'Accenture' },
  { id: 'deloitte', name: 'Deloitte' },
  { id: 'tcs', name: 'TCS' },
  { id: 'infosys', name: 'Infosys' },
  { id: 'cognizant', name: 'Cognizant' },
  { id: 'genpact', name: 'Genpact' },
  { id: 'techmahindra', name: 'Tech Mahindra' },
  { id: 'eygds', name: 'EY GDS' },
  { id: 'smartrecon', name: 'Smart Recon' },
  { id: 'swiggy', name: 'Swiggy' },
  { id: 'idfc', name: 'IDFC' },
  { id: 'icici', name: 'ICICI' },
  { id: 'wipro', name: 'Wipro' },
  { id: 'jaro', name: 'Jaro' },
  { id: 'piramal', name: 'Piramal' },
  { id: 'adp', name: 'ADP' },
  { id: 'loreal', name: 'L\'Oreal' },
  { id: 'planetspark', name: 'PlanetSpark' },
  { id: 'hppowerlab', name: 'HP Power Lab' }
];

const SelectCompany: React.FC = () => {
  const navigate = useNavigate();

  const handleCompanySelect = (companyId: string) => {
    navigate(`/company-rules/${companyId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Select Company</h1>
        <p className="text-gray-600 mt-2">Choose a company to view their specific rules and hiring criteria</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companies.map((company) => (
          <Card 
            key={company.id} 
            className="hover:border-primary cursor-pointer transition-all"
            onClick={() => handleCompanySelect(company.id)}
          >
            <CardContent className="p-6 flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">{company.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectCompany;
