
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const PlacementQuestions: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const categories = [
    { id: 'aptitude', name: 'Aptitude Questions' },
    { id: 'reasoning', name: 'Reasoning Questions' },
    { id: 'english', name: 'English Questions' },
    { id: 'coding', name: 'Coding Questions' },
    { id: 'hr', name: 'HR Round Interview Questions' },
  ];

  // Create PDF paths for each category with individual file paths
  const pdfPaths = {
    aptitude: [
      { id: 1, name: 'Set 1', path: '/PDFS/apt1.pdf' },
      { id: 2, name: 'Set 2', path: '/PDFS/apt2.pdf' },
      { id: 3, name: 'Set 3', path: '/pdfs/aptitude/aptitude3.pdf' },
      { id: 4, name: 'Set 4', path: '/pdfs/aptitude/aptitude4.pdf' },
      { id: 5, name: 'Set 5', path: '/pdfs/aptitude/aptitude5.pdf' },
    ],
    reasoning: [
      { id: 1, name: 'Set 1', path: '/PDFS/rsn1.pdf' },
      { id: 2, name: 'Set 2', path: '/PDFS/rsn2.pdf' },
      { id: 3, name: 'Set 3', path: '/pdfs/reasoning/reasoning3.pdf' },
      { id: 4, name: 'Set 4', path: '/pdfs/reasoning/reasoning4.pdf' },
      { id: 5, name: 'Set 5', path: '/pdfs/reasoning/reasoning5.pdf' },
    ],
    english: [
      { id: 1, name: 'Set 1', path: '/PDFS/eng1.pdf' },
      { id: 2, name: 'Set 2', path: '/PDFS/eng2.pdf' },
      { id: 3, name: 'Set 3', path: '/pdfs/english/english3.pdf' },
      { id: 4, name: 'Set 4', path: '/pdfs/english/english4.pdf' },
      { id: 5, name: 'Set 5', path: '/pdfs/english/english5.pdf' },
    ],
    coding: [
      { id: 1, name: 'Set 1', path: '/PDFS/Coding 1.pdf' },
      { id: 2, name: 'Set 2', path: '/PDFS/Coding 2.pdf' },
      { id: 3, name: 'Set 3', path: '/PDFS/coding 3.pdf' },
      { id: 4, name: 'Set 4', path: '/pdfs/coding/coding4.pdf' },
      { id: 5, name: 'Set 5', path: '/pdfs/coding/coding5.pdf' },
    ],
    hr: [
      { id: 1, name: 'Set 1', path: '/PDFS/hr1.pdf' },
      { id: 2, name: 'Set 2', path: '/PDFS/hr2.pdf' },
      { id: 3, name: 'Set 3', path: '/PDFS/hr3.pdf' },
      { id: 4, name: 'Set 4', path: '/PDFS/hr4.pdf' },
      { id: 5, name: 'Set 5', path: '/PDFS/hr5.pdf' },
    ],
  };

  const getQuestionSets = (category: string) => {
    return pdfPaths[category as keyof typeof pdfPaths];
  };

  const handleViewPdf = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Placement Questions</h1>
        <p className="text-gray-600 mt-2">Practice with our comprehensive question sets</p>
      </div>

      <Tabs defaultValue="aptitude" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getQuestionSets(category.id).map((set) => (
                <Card key={set.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText size={18} />
                      <span>{category.name} - {set.name}</span>
                    </CardTitle>
                    <CardDescription>Practice question set</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      A collection of important questions for {category.name.toLowerCase()} preparation.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" variant="outline" onClick={() => handleViewPdf(set.path)}>
                          <ExternalLink size={16} className="mr-2" />
                          View PDF
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>{category.name} - {set.name}</DialogTitle>
                        </DialogHeader>
                        <div className="h-full">
                          <iframe
                            src={selectedPdf || ''}
                            className="w-full h-full border rounded-md"
                            title={`${category.name} - ${set.name}`}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button className="w-full" variant="default">
                      <Download size={16} className="mr-2" />
                      <a href={set.path} download className="w-full">Download PDF</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PlacementQuestions;
