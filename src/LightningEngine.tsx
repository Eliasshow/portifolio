import React, { useEffect, useRef } from 'react';

const LightningEngine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Tipagem para guardar as rotas do raio
    type Point = { x: number; y: number };
    type Strike = {
      paths: Point[][];
      life: number;
    };

    let activeStrike: Strike | null = null;

    // Função que cria um único raio com aparência real (1 tronco principal e raras bifurcações curtas)
    const generateLightning = () => {
      const startX = Math.random() * width;
      const paths: Point[][] = [];

      // 1. Tronco Principal (Forte e vai até o chão)
      let currentX = startX;
      let currentY = 0;
      const mainPath: Point[] = [{ x: currentX, y: currentY }];

      while (currentY < height) {
        currentY += Math.random() * 30 + 15; // Pulo vertical (para baixo)
        currentX += (Math.random() - 0.5) * 70; // Tremor horizontal suave
        mainPath.push({ x: currentX, y: currentY });

        // 2. Chance bem pequena (6%) de criar uma ramificação secundária curta
        if (Math.random() < 0.06) {
          let bx = currentX;
          let by = currentY;
          const branch: Point[] = [{ x: bx, y: by }];
          const branchLength = Math.random() * 150 + 50; // Ramificação curta
          const direction = Math.random() > 0.5 ? 1 : -1;
          
          while (by < currentY + branchLength && by < height) {
            by += Math.random() * 20 + 10;
            bx += (Math.random() * 40) * direction; // Vai para o lado
            branch.push({ x: bx, y: by });
          }
          paths.push(branch);
        }
      }
      
      // Coloca o tronco principal como a primeira linha a ser desenhada
      paths.unshift(mainPath);

      // Inicia a vida útil do raio
      activeStrike = {
        paths,
        life: 1.0,
      };
    };

    // Função ultra-rápida para desenhar as linhas (sem shadowBlur para evitar lag)
    const drawPath = (path: Point[], color: string, thickness: number) => {
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.lineJoin = 'miter'; // Deixa as quinas mais afiadas (estilo raio)
      ctx.stroke();
    };

    // Loop de renderização a 60fps
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Se não houver raio, tem 0.8% de chance de gerar um novo neste frame
      if (!activeStrike) {
        if (Math.random() < 0.008) {
          generateLightning();
        }
      } else {
        // Reduz a "energia" do raio
        activeStrike.life -= 0.03;

        if (activeStrike.life > 0) {
          // EFEITO STROBE: Faz a opacidade piscar caóticamente para simular relâmpago real
          const flickerOpacity = Math.random() > 0.2 ? activeStrike.life : 0;

          if (flickerOpacity > 0) {
            activeStrike.paths.forEach((path, index) => {
              const isMainTrunk = index === 0;
              const baseThick = isMainTrunk ? 2.5 : 1; // Tronco grosso, ramificação fina

              // 1. Glow Externo (Azul esfumaçado leve e largo) - Substitui o shadowBlur com 0 lag
              drawPath(path, `rgba(0, 150, 255, ${flickerOpacity * 0.3})`, baseThick * 6);
              
              // 2. Núcleo Interno (Branco puro e fino)
              drawPath(path, `rgba(255, 255, 255, ${flickerOpacity})`, baseThick);
            });

            // Clarão do céu de fundo iluminando o site inteiro
            ctx.fillStyle = `rgba(180, 220, 255, ${flickerOpacity * 0.15})`;
            ctx.fillRect(0, 0, width, height);
          }
        } else {
          // Quando a vida chega a 0, mata o raio e espera o próximo
          activeStrike = null;
        }
      }

      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 4, /* Entre a chuva de fundo e as gotas molhadas da lente */
      }}
    />
  );
};

export default LightningEngine;