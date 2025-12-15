export enum ComponentKind {
  BATTERY = 'BATTERY',
  RESISTOR = 'RESISTOR',
  POTENTIOMETER = 'POTENTIOMETER',
  GALVANOMETER = 'GALVANOMETER',
  LIGHT_BULB = 'LIGHT_BULB',
  SWITCH = 'SWITCH',
  WIRE_NODE = 'WIRE_NODE', // Just a connection point
}

export interface Position {
  x: number;
  y: number;
}

export interface Terminal {
  id: string;
  componentId: string;
  relativePosition: Position; // Offset from component center
  polarity?: 'positive' | 'negative';
}

export interface CircuitComponent {
  id: string;
  kind: ComponentKind;
  position: Position;
  value: number; // Voltage for Battery, Resistance for Resistor/Galvanometer/Bulb
  label: string;
  terminals: Terminal[];
  // Simulation results
  current: number; // Amps passing through
  voltageDrop: number; // Volts across
}

export interface Wire {
  id: string;
  startTerminalId: string;
  endTerminalId: string;
  color: string;
}

export interface SimulationResult {
  nodeVoltages: Record<string, number>; // Node ID -> Voltage
  componentCurrents: Record<string, number>; // Component ID -> Current
}