import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Camera, Palette, Ruler, Smile, User, Frame } from 'lucide-react';

const StyleSyncDashboard = () => {
  const [activeModule, setActiveModule] = useState('body');
  
  const features = [
    {
      title: "Body Analysis",
      icon: <Ruler className="w-6 h-6 text-indigo-600" />,
      description: "Advanced proportion calculations and body shape classification",
      id: "body"
    },
    {
      title: "Facial Analysis",
      icon: <Smile className="w-6 h-6 text-indigo-600" />,
      description: "Detailed facial feature mapping and shape determination",
      id: "facial"
    },
    {
      title: "Color Analysis",
      icon: <Palette className="w-6 h-6 text-indigo-600" />,
      description: "Color harmony detection for skin, hair, and eyes",
      id: "color"
    }
  ];

  const ModuleContent = ({ id }) => {
    switch(id) {
      case 'body':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Body Proportion Analysis</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Height-to-Width Ratio</span>
                </div>
                <div className="mt-2 text-2xl font-bold">1.618</div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <Ruler className="w-5 h-5" />
                  <span>Shoulder Width</span>
                </div>
                <div className="mt-2 text-2xl font-bold">40cm</div>
              </Card>
            </div>
          </div>
        );
      case 'facial':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Facial Feature Mapping</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <Smile className="w-5 h-5" />
                  <span>Face Shape</span>
                </div>
                <div className="mt-2 text-2xl font-bold">Oval</div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <Frame className="w-5 h-5" />
                  <span>Symmetry Score</span>
                </div>
                <div className="mt-2 text-2xl font-bold">92%</div>
              </Card>
            </div>
          </div>
        );
      case 'color':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Color Palette</h3>
            <div className="grid grid-cols-4 gap-2">
              {['#FFE4E1', '#FFA07A', '#E6E6FA', '#98FB98'].map((color, idx) => (
                <div key={idx} className="h-12 rounded" style={{backgroundColor: color}} />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-indigo-600" />
            <CardTitle className="text-2xl">StyleSyncAI</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className={`cursor-pointer transition-all ${
                  activeModule === feature.id ? 'border-indigo-600 shadow-lg' : ''
                }`}
                onClick={() => setActiveModule(feature.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    {feature.icon}
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6">
            <ModuleContent id={activeModule} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleSyncDashboard;