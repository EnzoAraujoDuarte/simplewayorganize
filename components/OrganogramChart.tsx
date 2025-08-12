'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Level, Position } from '@/types/organogram';

interface OrganogramChartProps {
  levels: Level[];
}

const OrganogramChart: React.FC<OrganogramChartProps> = ({ levels }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);

  const departmentColors: Record<string, string> = {
    presidencia: '#dc2626',
    financeiro: '#059669',
    operacoes: '#7c3aed',
    ti: '#2563eb',
    marketing: '#ea580c',
    rh: '#db2777',
    vendas: '#0891b2',
    estrategia: '#4f46e5',
    produto: '#16a34a'
  };

  const levelStyles: Record<Position['level'], { bg: string; border: string; text: string }> = {
    'ceo': { bg: 'linear-gradient(135deg, #dc2626, #b91c1c)', border: '#dc2626', text: 'white' },
    'c-level': { bg: 'linear-gradient(135deg, #ea580c, #c2410c)', border: '#ea580c', text: 'white' },
    'vice-presidente': { bg: 'linear-gradient(135deg, #7c2d12, #92400e)', border: '#7c2d12', text: 'white' },
    'director': { bg: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: '#7c3aed', text: 'white' },
    'manager-senior': { bg: 'linear-gradient(135deg, #059669, #047857)', border: '#059669', text: 'white' },
    'manager': { bg: 'linear-gradient(135deg, #0891b2, #0e7490)', border: '#0891b2', text: 'white' },
    'supervisor': { bg: 'linear-gradient(135deg, #4b5563, #374151)', border: '#4b5563', text: 'white' },
    'analyst-senior': { bg: 'linear-gradient(135deg, #1d4ed8, #1e40af)', border: '#1d4ed8', text: 'white' },
    'analyst-pleno': { bg: 'linear-gradient(135deg, #2563eb, #1d4ed8)', border: '#2563eb', text: 'white' },
    'analyst': { bg: 'linear-gradient(135deg, #3b82f6, #2563eb)', border: '#3b82f6', text: 'white' },
    'assistant': { bg: 'linear-gradient(135deg, #6b7280, #4b5563)', border: '#6b7280', text: 'white' },
    'intern': { bg: 'linear-gradient(135deg, #10b981, #059669)', border: '#10b981', text: 'white' }
  };

  const createConnections = useCallback(() => {
      if (!svgRef.current) return;
      const svg = svgRef.current;
      svg.innerHTML = '';

    const levelEls = document.querySelectorAll('.level');

    for (let i = 0; i < levelEls.length - 1; i++) {
      const currentLevel = levelEls[i] as HTMLElement;
      const nextLevel = levelEls[i + 1] as HTMLElement;
        
        const currentBoxes = currentLevel.querySelectorAll('.position');
        const nextBoxes = nextLevel.querySelectorAll('.position');
      if (!currentBoxes.length || !nextBoxes.length) continue;
        
        const svgRect = svg.getBoundingClientRect();
        
      if (i === 0) {
        createCEOConnections(svg, svgRect, currentBoxes, nextLevel);
      } else if (i === 1) {
        createCLevelToVPConnections(svg, svgRect, currentBoxes, nextBoxes);
      } else {
        createDirectConnections(svg, svgRect, currentBoxes, nextBoxes);
      }
    }
  }, [selectedDepartment]);

  const createCEOConnections = (svg: SVGSVGElement, svgRect: DOMRect, ceoBoxes: NodeListOf<Element>, nextLevel: HTMLElement) => {
    const ceoBox = ceoBoxes[0].getBoundingClientRect();
    const nextRect = nextLevel.getBoundingClientRect();
    const ceoCenterX = ceoBox.left + ceoBox.width / 2 - svgRect.left;
    const ceoBottom = ceoBox.bottom - svgRect.top;
    const connectionY = nextRect.top - svgRect.top - 10;

    const v = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    v.setAttribute('x1', String(ceoCenterX));
    v.setAttribute('y1', String(ceoBottom));
    v.setAttribute('x2', String(ceoCenterX));
    v.setAttribute('y2', String(connectionY));
    v.setAttribute('class', 'conn-line');
    v.setAttribute('stroke', '#93c5fd');
    v.setAttribute('stroke-width', '2');
    v.setAttribute('stroke-linecap', 'round');
    svg.appendChild(v);

    const firstBox = nextLevel.querySelector('.position')?.getBoundingClientRect();
    const lastBox = nextLevel.querySelectorAll('.position')[nextLevel.querySelectorAll('.position').length - 1]?.getBoundingClientRect();
    if (firstBox && lastBox) {
      const startX = firstBox.left + firstBox.width / 2 - svgRect.left;
      const endX = lastBox.left + lastBox.width / 2 - svgRect.left;
      const h = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      h.setAttribute('x1', String(startX));
      h.setAttribute('y1', String(connectionY));
      h.setAttribute('x2', String(endX));
      h.setAttribute('y2', String(connectionY));
      h.setAttribute('class', 'conn-line');
      h.setAttribute('stroke', '#93c5fd');
      h.setAttribute('stroke-width', '2');
      h.setAttribute('stroke-linecap', 'round');
      svg.appendChild(h);

      nextLevel.querySelectorAll('.position').forEach((box) => {
            const boxRect = box.getBoundingClientRect();
        const boxCenterX = boxRect.left + boxRect.width / 2 - svgRect.left;
        const v2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        v2.setAttribute('x1', String(boxCenterX));
        v2.setAttribute('y1', String(connectionY));
        v2.setAttribute('x2', String(boxCenterX));
        v2.setAttribute('y2', String(boxRect.top - svgRect.top));
        v2.setAttribute('class', 'conn-line');
        v2.setAttribute('stroke', '#93c5fd');
        v2.setAttribute('stroke-width', '1.5');
        v2.setAttribute('stroke-linecap', 'round');
        svg.appendChild(v2);
      });
    }
  };

  const createCLevelToVPConnections = (svg: SVGSVGElement, svgRect: DOMRect, cLevelBoxes: NodeListOf<Element>, vpBoxes: NodeListOf<Element>) => {
    const pairs = [
      { from: 'cfo', to: 'vp-financeiro' },
      { from: 'coo', to: 'vp-operacoes' },
      { from: 'cto', to: 'vp-tecnologia' },
      { from: 'cmo', to: 'vp-marketing' },
      { from: 'chro', to: 'vp-rh' },
      { from: 'cso', to: 'vp-estrategia' },
      { from: 'cpo', to: 'vp-produto' }
    ];
    pairs.forEach((p) => {
      const from = Array.from(cLevelBoxes).find((b) => (b as HTMLElement).id === p.from);
      const to = Array.from(vpBoxes).find((b) => (b as HTMLElement).id === p.to);
      if (from && to) {
        const dept = (to as HTMLElement).dataset.dept || '';
        createCurveWithArrow(svg, svgRect, from as HTMLElement, to as HTMLElement, dept);
      }
    });
  };

  const createConnectionBetweenBoxes = (svg: SVGSVGElement, svgRect: DOMRect, fromBox: Element, toBox: Element) => {
    const dept = (toBox as HTMLElement).dataset.dept || (fromBox as HTMLElement).dataset.dept || '';
    createCurveWithArrow(svg, svgRect, fromBox as HTMLElement, toBox as HTMLElement, dept);
  };

  const createDirectConnections = (svg: SVGSVGElement, svgRect: DOMRect, currentBoxes: NodeListOf<Element>, nextBoxes: NodeListOf<Element>) => {
    const currentArray = Array.from(currentBoxes) as HTMLElement[];
    const nextArray = Array.from(nextBoxes) as HTMLElement[];
    if (!currentArray.length || !nextArray.length) return;

    const groupByDept = (els: HTMLElement[]) => {
      const map: Record<string, HTMLElement[]> = {};
      els.forEach((el) => {
        const d = el.dataset.dept || '';
        if (!map[d]) map[d] = [];
        map[d].push(el);
      });
      return map;
    };

    const curMap = groupByDept(currentArray);
    const nextMap = groupByDept(nextArray);

    const depts = new Set<string>([...Object.keys(curMap), ...Object.keys(nextMap)]);

    depts.forEach((dept) => {
      const cur = curMap[dept] || [];
      const nxt = nextMap[dept] || [];

      if (cur.length && nxt.length) {
        if (cur.length >= nxt.length) {
          const per = Math.ceil(cur.length / nxt.length);
          cur.forEach((cb, i) => {
            const idx = Math.min(Math.floor(i / per), nxt.length - 1);
            createConnectionBetweenBoxes(svg, svgRect, cb, nxt[idx]);
          });
        } else {
          nxt.forEach((nb, i) => {
            const idx = Math.min(Math.floor((i * cur.length) / nxt.length), cur.length - 1);
            createConnectionBetweenBoxes(svg, svgRect, cur[idx], nb);
          });
        }
      } else if (cur.length && !nxt.length) {
        // Sem correspondência no próximo nível: conecta ao vizinho mais próximo por X
        const sorted = [...nextArray].sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
        cur.forEach((cb) => {
          const cx = cb.getBoundingClientRect().left + cb.getBoundingClientRect().width / 2;
          const closest = sorted.reduce((acc, el) => {
            const ex = el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2;
            return Math.abs(ex - cx) < Math.abs((acc.getBoundingClientRect().left + acc.getBoundingClientRect().width / 2) - cx) ? el : acc;
          }, sorted[0]);
          createConnectionBetweenBoxes(svg, svgRect, cb, closest);
        });
      } else if (!cur.length && nxt.length) {
        // Sem correspondência no nível atual: conecta aos mais próximos por X
        const sorted = [...currentArray].sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
        nxt.forEach((nb) => {
          const nx = nb.getBoundingClientRect().left + nb.getBoundingClientRect().width / 2;
          const closest = sorted.reduce((acc, el) => {
            const ex = el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2;
            return Math.abs(ex - nx) < Math.abs((acc.getBoundingClientRect().left + acc.getBoundingClientRect().width / 2) - nx) ? el : acc;
          }, sorted[0]);
          createConnectionBetweenBoxes(svg, svgRect, closest, nb);
        });
      }
    });
  };

  const createCurveWithArrow = (svg: SVGSVGElement, svgRect: DOMRect, fromEl: HTMLElement, toEl: HTMLElement, dept: string) => {
    const fr = fromEl.getBoundingClientRect();
    const tr = toEl.getBoundingClientRect();
    const x1 = fr.left + fr.width / 2 - svgRect.left;
    const y1 = fr.bottom - svgRect.top;
    const x2 = tr.left + tr.width / 2 - svgRect.left;
    const y2 = tr.top - svgRect.top;
    const yMid = (y1 + y2) / 2 - 8;

    const strong = !selectedDepartment || selectedDepartment === dept;
    const stroke = strong ? '#2563eb' : '#93c5fd';
    const width = strong ? 2.5 : 1;
    const opacity = strong ? 1 : 0.45;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${x1} ${y1} C ${x1} ${yMid}, ${x2} ${yMid}, ${x2} ${y2}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', stroke);
    path.setAttribute('stroke-width', String(width));
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('class', 'conn-line');
    path.setAttribute('data-dept', dept);
    path.setAttribute('opacity', String(opacity));
    svg.appendChild(path);

    const angle = Math.atan2(y2 - y1, x2 - x1);
    const size = 5;
    const ax1 = x2 - size * Math.cos(angle - Math.PI / 6);
    const ay1 = y2 - size * Math.sin(angle - Math.PI / 6);
    const ax2 = x2 - size * Math.cos(angle + Math.PI / 6);
    const ay2 = y2 - size * Math.sin(angle + Math.PI / 6);
    const ap = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    ap.setAttribute('d', `M ${x2} ${y2} L ${ax1} ${ay1} M ${x2} ${y2} L ${ax2} ${ay2}`);
    ap.setAttribute('fill', 'none');
    ap.setAttribute('stroke', stroke);
    ap.setAttribute('stroke-width', String(width));
    ap.setAttribute('stroke-linecap', 'round');
    ap.setAttribute('stroke-linejoin', 'round');
    ap.setAttribute('class', 'conn-arrow');
    ap.setAttribute('data-dept', dept);
    ap.setAttribute('opacity', String(opacity));
    svg.appendChild(ap);
  };

  useEffect(() => {
    const id = setTimeout(createConnections, 60);
    const onResize = () => {
      clearTimeout(id);
      setTimeout(createConnections, 40);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', onResize);
    };
  }, [createConnections]);

  const getDepartmentColor = (d: string) => departmentColors[d] || '#6b7280';
  const isPositionHighlighted = (p: Position) => (!selectedDepartment ? true : p.department === selectedDepartment);

  const handlePositionClick = (p: Position) => {
    if (selectedDepartment === p.department) {
      setSelectedDepartment(null);
      setSelectedPosition(null);
    } else {
      setSelectedDepartment(p.department || null);
      setSelectedPosition(p);
    }
    // Recria as conexões para reestilizar ênfase
    setTimeout(createConnections, 0);
  };

  const renderPosition = (p: Position) => {
    const isHighlighted = isPositionHighlighted(p);
    const isSelected = selectedPosition?.id === p.id;
    const style = levelStyles[p.level];
    const deptColor = p.department ? getDepartmentColor(p.department) : '#6b7280';

    return (
      <div
        key={p.id}
        id={p.id}
        data-dept={p.department || ''}
        className={`position ${p.level} ${isSelected ? 'selected' : ''} rounded-md px-2 py-2 text-xs sm:text-[0.8rem]`}
        style={{
          background: isHighlighted ? style.bg : 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
          borderColor: isSelected ? '#2563eb' : isHighlighted ? style.border : '#d1d5db',
          borderWidth: isSelected ? 3 : 1.5,
          color: isHighlighted ? style.text : '#6b7280',
          opacity: isHighlighted ? 1 : 0.4,
          transform: isHighlighted ? 'scale(1)' : 'scale(0.95)',
          transition: 'all .2s ease',
          boxShadow: isSelected
            ? '0 0 0 3px rgba(37, 99, 235, .3), 0 8px 20px rgba(16,24,40,.15)'
            : isHighlighted
              ? '0 4px 12px rgba(16,24,40,.08)'
              : '0 2px 6px rgba(16,24,40,.04)'
        }}
        onClick={() => handlePositionClick(p)}
        title={`${p.title}${p.subtitle ? ` - ${p.subtitle}` : ''} - Clique para destacar o setor`}
      role="button"
      tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handlePositionClick(p);
          }
        }}
      >
        <div className="position-content">
          <div className="position-title leading-tight">{p.title}</div>
          {p.subtitle && <div className="position-subtitle leading-none opacity-90">{p.subtitle}</div>}
        </div>
        {p.department && (
          <div className="department-indicator" style={{ backgroundColor: deptColor }} />
        )}
      </div>
    );
  };

  const renderLevel = (level: Level) => (
    <div key={level.id} className="level-container w-full flex flex-col items-center mb-3">
      <div className="level-title uppercase tracking-wide text-white text-sm font-semibold px-4 py-2 rounded-xl mb-3 bg-gradient-to-r from-indigo-700 to-indigo-800 shadow-md">
        {level.title}
      </div>
      <div className="level flex flex-wrap justify-center gap-2 w-full">{level.positions.map(renderPosition)}</div>
    </div>
  );

  return (
    <div className="organogram p-6 bg-white/80 rounded-xl border border-slate-200 relative overflow-x-auto">
      <div className="tree relative min-h-[520px] flex flex-col items-center">
        <svg ref={svgRef} className="svg-connections absolute inset-0 w-full h-full pointer-events-none" />
        {levels.map(renderLevel)}
      </div>

      {selectedDepartment && (
        <div className="department-tooltip">
          <h3>Setor: {selectedDepartment.charAt(0).toUpperCase() + selectedDepartment.slice(1)}</h3>
          <p>Posições do departamento selecionado</p>
          <button
            className="tooltip-close-btn"
            onClick={() => {
              setSelectedDepartment(null);
              setSelectedPosition(null);
              setTimeout(createConnections, 0);
            }}
            aria-label="Fechar seleção de departamento"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default OrganogramChart; 