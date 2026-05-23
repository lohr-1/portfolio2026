import React, { useState, useEffect } from 'react';

export default function MockDesignSimulator({ projectId }) {
  const [ticker, setTicker] = useState(0);

  // General interval to drive state updates in simulations
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((prev) => (prev + 1) % 100);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  switch (projectId) {
    case 'pettech':
      return <PetTechSimulator ticker={ticker} />;
    case 'inventory':
      return <InventorySimulator ticker={ticker} />;
    case 'planner':
      return <PlannerSimulator ticker={ticker} />;
    case 'university':
      return <UniversitySimulator ticker={ticker} />;
    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-surface-container-highest text-outline font-label text-xs uppercase tracking-widest">
          [No Simulation Available]
        </div>
      );
  }
}

// 1. PetTech SaaS Portal Simulator
function PetTechSimulator({ ticker }) {
  const pulseRate = 70 + (ticker % 15);
  const statusList = [
    { id: '#092', name: 'Max (Labrador)', stat: 'CRÍTICO', color: 'text-error border-error' },
    { id: '#114', name: 'Luna (Persa)', stat: 'ESTÁVEL', color: 'text-primary border-divider' },
    { id: '#118', name: 'Thor (Golden)', stat: 'MONITORANDO', color: 'text-outline border-outline' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-surface-container-highest text-primary font-mono text-xs select-none">
      {/* Header telemetry details */}
      <div className="flex justify-between items-center border-b border-divider pb-3">
        <span className="font-bold tracking-widest text-[10px] uppercase">// SYS.METRIC.STREAMER //</span>
        <span className="px-2 py-0.5 border border-divider text-[10px] bg-background">LIVE OK</span>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-4">
        {/* Heart Rate / ECG Column */}
        <div className="col-span-1 md:col-span-2 border border-divider p-4 bg-background relative flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] text-outline font-bold">SENSORES T-08 (TELEMETRIA VITAL)</div>
              <div className="text-2xl font-bold tracking-tighter mt-1">{pulseRate} <span className="text-xs text-outline font-normal">BPM</span></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-error animate-ping"></div>
          </div>
          
          {/* ECG Line Path simulation */}
          <div className="w-full h-16 overflow-hidden relative mt-2 border-t border-dotted border-divider/60 pt-2">
            <svg viewBox="0 0 300 60" className="w-full h-full stroke-primary fill-none stroke-[2]">
              <path
                d="M 0 30 L 50 30 L 60 10 L 70 50 L 80 30 L 130 30 L 140 5 Q 145 0 150 55 L 155 30 L 210 30 L 220 15 L 225 45 L 230 30 L 300 30"
                style={{
                  strokeDasharray: '300',
                  strokeDashoffset: (300 - (ticker * 6) % 300).toString(),
                  transition: 'stroke-dashoffset 0.8s linear'
                }}
              />
            </svg>
          </div>
        </div>

        {/* Patients Column */}
        <div className="col-span-1 border border-divider p-4 bg-surface flex flex-col justify-between h-40">
          <div className="text-[10px] text-outline font-bold uppercase tracking-wider mb-2">Painel de Triagem</div>
          <div className="flex flex-col gap-2 flex-grow justify-center">
            {statusList.map((pt, i) => (
              <div key={pt.id} className="flex justify-between items-center text-[10px] border-b border-divider/40 pb-1">
                <span className="font-bold">{pt.id}</span>
                <span className="text-outline truncate max-w-[80px]">{pt.name}</span>
                <span className={`px-1.5 py-0.2 border text-[9px] ${pt.color}`}>
                  {i === 0 && (ticker % 3 === 0) ? 'ALERTA' : pt.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="border-t border-divider pt-3 flex justify-between items-center text-[9px] text-outline">
        <span>VET_INDEX_SYS_ACTIVE: OK</span>
        <span>LATENCY: 12ms</span>
      </div>
    </div>
  );
}

// 2. Inventory Control SaaS Simulator
function InventorySimulator({ ticker }) {
  const [scanStep, setScanStep] = useState(0);

  useEffect(() => {
    // Inventory scanner sequences: 0 = idle, 1 = scanning, 2 = success
    const steps = [0, 1, 2];
    const stepIdx = ticker % steps.length;
    setScanStep(steps[stepIdx]);
  }, [ticker]);

  const items = [
    { sku: 'SKU-8392-A', desc: 'Gabinete Servidor XL', loc: 'Corr. C-4' },
    { sku: 'SKU-1049-C', desc: 'Switch Fibra 48p', loc: 'Corr. A-12' },
    { sku: 'SKU-5839-F', desc: 'Roteador Mesh Wifi6', loc: 'Corr. F-2' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-surface-container-highest text-primary font-mono text-xs select-none">
      <div className="flex justify-between items-center border-b border-divider pb-3">
        <span className="font-bold tracking-widest text-[10px] uppercase">// LOGISTICS.SCANNER.SYSTEM //</span>
        <span className="px-2 py-0.5 border border-divider text-[10px] bg-background">SYS_STATE: STANDBY</span>
      </div>

      <div className="my-auto py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Scanner Simulation Window */}
        <div className="border border-divider p-4 bg-background relative flex flex-col justify-between h-40 overflow-hidden">
          <div className="text-[10px] text-outline font-bold">DISPOSITIVO COLETOR MOBILE</div>
          
          <div className="flex-1 flex flex-col items-center justify-center my-2 relative">
            {scanStep === 0 && (
              <div className="text-center py-2 border border-dashed border-divider w-full">
                <span className="text-[10px] text-outline">APROXIME O CÓDIGO DE BARRAS</span>
              </div>
            )}
            
            {scanStep === 1 && (
              <div className="relative w-full h-12 border border-divider bg-surface-container-low flex flex-col items-center justify-center overflow-hidden">
                {/* Simulated Barcode */}
                <div className="flex gap-[2px] opacity-70">
                  <div className="w-2 h-8 bg-primary"></div>
                  <div className="w-1 h-8 bg-primary"></div>
                  <div className="w-3 h-8 bg-primary"></div>
                  <div className="w-1 h-8 bg-primary"></div>
                  <div className="w-2 h-8 bg-primary"></div>
                  <div className="w-4 h-8 bg-primary"></div>
                </div>
                {/* Laser scan line animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-error animate-bounce"></div>
              </div>
            )}

            {scanStep === 2 && (
              <div className="w-full h-12 bg-primary text-on-primary flex items-center justify-center font-bold tracking-widest text-[10px]">
                CONFERIDO COM SUCESSO ✔
              </div>
            )}
          </div>

          <div className="flex justify-between text-[9px] text-outline">
            <span>DEVICE_ID: WMS-TAB-04</span>
            <span>BATTERY: 84%</span>
          </div>
        </div>

        {/* Real-time Inventory Verification Queue */}
        <div className="border border-divider p-4 bg-surface flex flex-col justify-between h-40">
          <div>
            <div className="text-[10px] text-outline font-bold mb-2 uppercase">Fila de Conferência</div>
            <div className="flex flex-col gap-1.5">
              {items.map((item, idx) => (
                <div key={item.sku} className="flex justify-between items-center text-[9px] border-b border-divider/40 pb-1">
                  <div>
                    <span className="font-bold block">{item.sku}</span>
                    <span className="text-outline truncate max-w-[120px] block">{item.desc}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-outline">{item.loc}</span>
                    {idx === 0 && scanStep === 2 ? (
                      <span className="text-[8px] bg-primary text-on-primary px-1">APROVADO</span>
                    ) : (
                      <span className="text-[8px] border border-divider px-1">FILA</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-divider pt-3 flex justify-between items-center text-[9px] text-outline">
        <span>LAST_PICK: SKU-8392-A</span>
        <span>ERR_RATIO: 0.12%</span>
      </div>
    </div>
  );
}

// 3. Academic Task & LMS Planner Simulator
function PlannerSimulator({ ticker }) {
  const [checked, setChecked] = useState([true, false, false]);

  useEffect(() => {
    // Automatically toggle/simulate checklist tasks being clicked
    const phase = ticker % 4;
    if (phase === 0) setChecked([false, false, false]);
    else if (phase === 1) setChecked([true, false, false]);
    else if (phase === 2) setChecked([true, true, false]);
    else if (phase === 3) setChecked([true, true, true]);
  }, [ticker]);

  const percentage = Math.round((checked.filter(Boolean).length / checked.length) * 100);

  const tasks = [
    { title: 'Enviar Relatório de Física', source: 'FIS-101' },
    { title: 'Leitura Capítulo 4', source: 'LIT-200' },
    { title: 'Entregar Exercício Banco de Dados', source: 'INF-320' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-surface-container-highest text-primary font-mono text-xs select-none">
      <div className="flex justify-between items-center border-b border-divider pb-3">
        <span className="font-bold tracking-widest text-[10px] uppercase">// LMS.STUDENT.PROGRESS //</span>
        <span className="px-2 py-0.5 border border-divider text-[10px] bg-background">MOODLE SYNC: ACTIVE</span>
      </div>

      <div className="my-auto py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Checklist */}
        <div className="col-span-1 md:col-span-2 border border-divider p-4 bg-background flex flex-col justify-between h-40">
          <div className="text-[10px] text-outline font-bold mb-2">TAREFAS DA SEMANA</div>
          <div className="flex flex-col gap-2">
            {tasks.map((task, i) => (
              <div
                key={task.title}
                className={`flex items-center gap-2 border border-divider p-1.5 transition-colors ${
                  checked[i] ? 'bg-surface-container-low text-outline line-through' : 'bg-surface'
                }`}
              >
                <div className={`w-3.5 h-3.5 border border-primary flex items-center justify-center shrink-0 ${checked[i] ? 'bg-primary text-on-primary' : ''}`}>
                  {checked[i] && <span className="text-[8px] leading-none">✓</span>}
                </div>
                <div className="truncate text-[10px] leading-tight">
                  <span className="font-bold block text-[9px] uppercase tracking-wider">{task.source}</span>
                  {task.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Radial Gauge */}
        <div className="col-span-1 border border-divider p-4 bg-surface flex flex-col items-center justify-between h-40 text-center">
          <div className="text-[10px] text-outline font-bold uppercase tracking-wider">Metas Concluídas</div>
          
          <div className="relative w-16 h-16 flex items-center justify-center my-2">
            {/* SVG Progress Circle */}
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <path
                className="stroke-divider"
                fill="none"
                strokeWidth="3"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="stroke-primary"
                fill="none"
                strokeWidth="3"
                strokeDasharray={`${percentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{ transition: 'stroke-dasharray 0.5s ease' }}
              />
            </svg>
            <div className="absolute font-bold text-xs">{percentage}%</div>
          </div>

          <div className="text-[8px] text-outline">ATUALIZADO AGORA</div>
        </div>
      </div>

      <div className="border-t border-divider pt-3 flex justify-between items-center text-[9px] text-outline">
        <span>USER: 2026.110294</span>
        <span>TASKS_PENDING: {checked.filter(c => !c).length}</span>
      </div>
    </div>
  );
}

// 4. University Operations Hub Simulator
function UniversitySimulator({ ticker }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(ticker % 4);
  }, [ticker]);

  const nodes = [
    { label: 'Aluno', desc: 'Preenche Requisição' },
    { label: 'Secretaria', desc: 'Triagem e Validação' },
    { label: 'Coordenação', desc: 'Despacho e Deferimento' },
    { label: 'Registro', desc: 'Emissão e Assinatura' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-surface-container-highest text-primary font-mono text-xs select-none">
      <div className="flex justify-between items-center border-b border-divider pb-3">
        <span className="font-bold tracking-widest text-[10px] uppercase">// APPROVAL.WORKFLOW.GRAPH //</span>
        <span className="px-2 py-0.5 border border-divider text-[10px] bg-background">AUTO-ROUTING: ON</span>
      </div>

      {/* Nodes visual layout */}
      <div className="my-auto py-4 flex flex-col md:flex-row justify-between items-center gap-2 h-40 relative">
        {/* Dynamic connection lines in background */}
        <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-divider border-t border-dashed border-divider hidden md:block z-0"></div>

        {nodes.map((node, i) => {
          const isActive = activeStep === i;
          const isDone = activeStep > i;

          return (
            <div key={node.label} className="flex flex-row md:flex-col items-center md:text-center w-full md:w-1/4 relative z-10 gap-2 md:gap-1">
              {/* Pulse Circle */}
              <div
                className={`w-7 h-7 flex items-center justify-center text-[10px] font-bold border transition-colors ${
                  isActive
                    ? 'bg-primary text-on-primary border-primary animate-pulse'
                    : isDone
                    ? 'bg-surface border-primary text-primary'
                    : 'bg-background border-divider text-outline'
                }`}
              >
                {isDone ? '✔' : i + 1}
              </div>

              {/* Text */}
              <div className="text-left md:text-center">
                <div className={`font-bold text-[10px] ${isActive ? 'text-primary' : 'text-outline'}`}>{node.label}</div>
                <div className="text-[8px] text-outline/80 leading-none hidden md:block max-w-[80px] mx-auto mt-0.5">{node.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-divider pt-3 flex justify-between items-center text-[9px] text-outline">
        <span>FLOW_ID: REG-FLOW-2026</span>
        <span>STATUS: {activeStep === 3 ? 'PROCESSO CONCLUÍDO' : 'EM PROCESSAMENTO'}</span>
      </div>
    </div>
  );
}
