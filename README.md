# Star Background

A React component for creating a 3D star background using @react-three/fiber and @react-three/drei.

## Installation

First, install the package and its peer dependencies:

```sh
npm install star-background react @react-three/fiber @react-three/drei maath
Usage

Create a React component to use the StarsCanvas component from the star-background package:
// src/App.tsx
import React from 'react';
import { StarsCanvas } from 'star-background';

const App: React.FC = () => {
  return (
    <div>
      <StarsCanvas 
        numStars={10000} 
        radius={2.0} 
        rotationSpeedX={0.05} 
        rotationSpeedY={0.1} 
        color="#ff0000" 
        size={0.01} 
      />
    </div>
  );
}

export default App;
Finally, run your React application:

    Using npm:
    npm startUsing yarn:

sh

    yarn start

Navigate to http://localhost:3000 in your web browser to see the star background.
Props

The StarsCanvas component accepts the following props to customize the star background:

    numStars (number): The number of stars to generate. Default is 5000.
    radius (number): The radius of the sphere within which the stars are generated. Default is 1.2.
    rotationSpeedX (number): The speed of rotation around the X-axis. Default is 0.1.
    rotationSpeedY (number): The speed of rotation around the Y-axis. Default is 0.15.
    color (string): The color of the stars. Default is "#ffffff".
    size (number): The size of the stars. Default is 0.005.

Example

Here's a complete example of how to use the StarsCanvas component in a React application:

tsx

// src/App.tsx
import React from 'react';
import { StarsCanvas } from 'star-background';

const App: React.FC = () => {
  return (
    <div>
      <StarsCanvas 
        numStars={10000} 
        radius={2.0} 
        rotationSpeedX={0.05} 
        rotationSpeedY={0.1} 
        color="#ff0000" 
        size={0.01} 
      />
    </div>
  );
}

export default App;

Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Repository

Find the source code here: https://github.com/Srikanthpula341/star-background