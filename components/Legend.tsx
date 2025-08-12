import React from 'react';

const Legend: React.FC = () => {
  const legendItems = [
    { label: 'CEO', color: 'linear-gradient(135deg, #dc2626, #b91c1c)' },
    { label: 'C-Level', color: 'linear-gradient(135deg, #ea580c, #c2410c)' },
    { label: 'Diretor', color: 'linear-gradient(135deg, #7c3aed, #6d28d9)' },
    { label: 'Gerente', color: 'linear-gradient(135deg, #0891b2, #0e7490)' },
    { label: 'Supervisor', color: 'linear-gradient(135deg, #4b5563, #374151)' },
    { label: 'Analista', color: 'linear-gradient(135deg, #1d4ed8, #1e40af)' },
    { label: 'Assistente', color: 'linear-gradient(135deg, #6b7280, #4b5563)' },
    { label: 'Estagiário', color: 'linear-gradient(135deg, #9ca3af, #6b7280)' }
  ];

  const departmentColors = [
    { label: 'Presidência', color: '#dc2626' },
    { label: 'Financeiro', color: '#059669' },
    { label: 'Operações', color: '#7c3aed' },
    { label: 'TI', color: '#2563eb' },
    { label: 'Marketing', color: '#ea580c' },
    { label: 'RH', color: '#db2777' },
    { label: 'Estratégia', color: '#4f46e5' },
    { label: 'Produto', color: '#16a34a' }
  ];

  return (
    <div className="legend">
      <h3>Legenda Hierárquica</h3>
      
      <div className="legend-section">
        <h4>Níveis Hierárquicos</h4>
        <div className="legend-items">
          {legendItems.map((item, index) => (
            <div
              key={index}
              className="legend-item"
              style={{ background: item.color }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="legend-section">
        <h4>Cores dos Departamentos</h4>
        <div className="legend-items">
          {departmentColors.map((dept, index) => (
            <div
              key={index}
              className="legend-item dept-item"
              style={{ 
                background: dept.color,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div 
                className="dept-indicator"
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  opacity: 0.8
                }}
              />
              {dept.label}
            </div>
          ))}
        </div>
      </div>

      <div className="legend-info">
        <p><strong>Dica:</strong> Clique em um cargo para destacar seu departamento</p>
      </div>
    </div>
  );
};

export default Legend; 