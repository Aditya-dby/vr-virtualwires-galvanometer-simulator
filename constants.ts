import { ComponentKind, Terminal } from './types';

export const GRID_SIZE = 20;

export const COMPONENT_TEMPLATES: Record<ComponentKind, { width: number; height: number; terminals: Omit<Terminal, 'id' | 'componentId'>[] }> = {
  [ComponentKind.BATTERY]: {
    width: 80,
    height: 60,
    terminals: [
      { relativePosition: { x: -40, y: 0 }, polarity: 'negative' },
      { relativePosition: { x: 40, y: 0 }, polarity: 'positive' },
    ],
  },
  [ComponentKind.RESISTOR]: {
    width: 100,
    height: 40,
    terminals: [
      { relativePosition: { x: -50, y: 0 } },
      { relativePosition: { x: 50, y: 0 } },
    ],
  },
  [ComponentKind.POTENTIOMETER]: {
    width: 120,
    height: 60,
    terminals: [
      { relativePosition: { x: -60, y: 15 } },
      { relativePosition: { x: 60, y: 15 } },
    ],
  },
  [ComponentKind.GALVANOMETER]: {
    width: 100,
    height: 100,
    terminals: [
      { relativePosition: { x: -50, y: 30 } },
      { relativePosition: { x: 50, y: 30 } },
    ],
  },
  [ComponentKind.LIGHT_BULB]: {
    width: 60,
    height: 80,
    terminals: [
      { relativePosition: { x: -20, y: 35 } },
      { relativePosition: { x: 20, y: 35 } },
    ],
  },
  [ComponentKind.SWITCH]: {
    width: 80,
    height: 40,
    terminals: [
      { relativePosition: { x: -40, y: 0 } },
      { relativePosition: { x: 40, y: 0 } },
    ],
  },
  [ComponentKind.WIRE_NODE]: {
    width: 20,
    height: 20,
    terminals: [
       { relativePosition: { x: 0, y: 0 } }
    ]
  }
};

export const COLORS = {
  wire: '#06b6d4',        // Cyan-500
  wireActive: '#22d3ee',  // Cyan-400
  wireSelected: '#f472b6', // Pink-400
  terminal: '#94a3b8',
  terminalHighlight: '#facc15',
  componentBg: '#1e293b',
  componentBorder: '#475569',
};