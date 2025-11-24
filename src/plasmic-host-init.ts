// Plasmic Host Initialization Script
// This script initializes the Plasmic Canvas Host with registered components

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as PlasmicHost from '@plasmicapp/host';
import { registerComponents } from './lib/plasmic-registration.js';

async function initPlasmicHost() {
  try {
    // Make PlasmicHost and React available globally for Plasmic Studio
    (window as any).PlasmicHost = PlasmicHost;
    (window as any).React = React;
    (window as any).ReactDOM = ReactDOM;

    // Register components (async function)
    await registerComponents(PlasmicHost.registerComponent);
    console.log('✅ Plasmic components registered successfully!');

    // Render PlasmicCanvasHost React component
    const container = document.getElementById('plasmic-host-container');
    if (!container) {
      throw new Error('plasmic-host-container element not found');
    }

    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(PlasmicHost.PlasmicCanvasHost));
    console.log('✅ Plasmic host initialized!');
  } catch (error) {
    console.error('❌ Error initializing Plasmic host:', error);
    document.body.innerHTML = `
      <div style="padding: 20px; font-family: monospace;">
        <h2 style="color: red;">Error initializing Plasmic host</h2>
        <pre>${error}</pre>
      </div>
    `;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPlasmicHost);
} else {
  initPlasmicHost();
}
