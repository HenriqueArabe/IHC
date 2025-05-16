
import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet } from 'lucide-react';
import CalculatorInput from '../components/CalculatorInput';
import CalculatorSelect from '../components/CalculatorSelect';
import ResultCard from '../components/ResultCard';
import { Button } from '../components/ui/button';
import { AspectRatio } from '../components/ui/aspect-ratio';

const Agua = () => {
  const [numCalcas, setNumCalcas] = useState<string>('');
  const [resultadoAgua, setResultadoAgua] = useState<number | null>(null);
  
  const [tipoCarne, setTipoCarne] = useState<string>('vermelha');
  const [qtdCarne, setQtdCarne] = useState<string>('');
  const [resultadoCarne, setResultadoCarne] = useState<number | null>(null);

  // Dados atualizados de consumo de água por kg de carne
  const litrosPorKg = {
    vermelha: 15000, // Carne bovina - atualizado para 15.000 litros
    branca: 4300,    // Frango - mantido em 4.300 litros
  };

  const calcularAguaCalcas = () => {
    // Média entre 5.000 e 10.000 litros para produzir um par de calças jeans
    const litrosPorCalca = 7500; // Usando a média (5.000 + 10.000) / 2
    const total = Number(numCalcas) * litrosPorCalca;
    setResultadoAgua(total);
  };

  const calcularAguaCarne = () => {
    const quantidade = Number(qtdCarne);
    const tipoSelecionado = tipoCarne as keyof typeof litrosPorKg;
    const total = quantidade * litrosPorKg[tipoSelecionado];
    setResultadoCarne(total);
  };

  const tiposDeCarne = [
    { value: 'vermelha', label: 'Carne Vermelha (Bovina)' },
    { value: 'branca', label: 'Carne Branca (Frango)' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-[#0a3d62] to-[#3498db]">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white hover:text-blue-200 mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Voltar ao início</span>
        </Link>
        
        {/* Banner */}
        <div className="mb-10 rounded-lg overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
            alt="Água" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
            <div className="px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Água</h1>
              <Droplet size={48} className="text-blue-200 animate-bounce" />
            </div>
          </div>
        </div>
        
        <div className="eco-card p-8 mb-10 bg-gradient-to-b from-[#0a3d62]/90 to-[#3498db]/90">
          <div className="max-w-3xl mx-auto">
            <p className="text-white mb-6">
              A água doce é um recurso vital e finito, cuja distribuição e consumo apresentam cenários críticos em diferentes partes do planeta. Para você ter uma ideia, o Brasil concentra cerca de 12% dos recursos hídricos do mundo.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-blue-200 mb-3">Consumo de Água nos Principais Rios do Mundo:</h3>
              <ul className="space-y-2 text-white">
                <li><span className="font-medium">Rio Amazonas (América do Sul):</span> Vazão média de aproximadamente 210.000 metros cúbicos por segundo (m³/s)</li>
                <li><span className="font-medium">Rio Congo (África):</span> Vazão média de cerca de 41.200 m³/s</li>
                <li><span className="font-medium">Rio Ganges (Ásia):</span> Vazão média de aproximadamente 16.648 m³/s</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-blue-200 mb-3">Consumo de Água no Agronegócio Brasileiro</h3>
              <p className="text-white">
                O Brasil, o agronegócio é responsável por uma parcela significativa do consumo total de água no país. De acordo com especialistas, a agricultura irrigada, principal uso agrícola da água no Brasil, representa 50,6% do total, enquanto o uso industrial corresponde a 9,4%.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="eco-card p-6 bg-gradient-to-b from-[#0a3d62]/80 to-[#3498db]/80">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Quanto foi gasto de água para produzir suas calças?</h2>
            
            <div className="mb-6">
              <CalculatorInput
                label="Nº de Calças Jeans:"
                id="numCalcas"
                type="number"
                value={numCalcas}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNumCalcas(e.target.value)}
                placeholder="Quantidade"
              />
              
              <Button 
                onClick={calcularAguaCalcas}
                className="bg-blue-500 hover:bg-blue-600 w-full"
                disabled={!numCalcas || Number(numCalcas) <= 0}
              >
                Calcular
              </Button>
            </div>
            
            {resultadoAgua !== null && (
              <ResultCard
                title="Água utilizada:"
                value={resultadoAgua.toLocaleString('pt-BR')}
                unit="litros"
                description="Esta quantidade de água seria suficiente para abastecer uma pessoa por vários meses."
              />
            )}
          </div>
          
          <div className="eco-card p-6 bg-gradient-to-b from-[#0a3d62]/80 to-[#3498db]/80">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Quanto consome de carne</h2>
            
            <div className="mb-6">
              <CalculatorSelect
                label="Selecione o tipo:"
                id="tipoCarne"
                value={tipoCarne}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setTipoCarne(e.target.value)}
                options={tiposDeCarne}
              />
              
              <CalculatorInput
                label="Quantidade (kg/mês):"
                id="qtdCarne"
                type="number"
                value={qtdCarne}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQtdCarne(e.target.value)}
                placeholder="Quantidade em kg"
              />
              
              <Button 
                onClick={calcularAguaCarne}
                className="bg-blue-500 hover:bg-blue-600 w-full"
                disabled={!qtdCarne || Number(qtdCarne) <= 0}
              >
                Calcular
              </Button>
            </div>
            
            {resultadoCarne !== null && (
              <ResultCard
                title="Água utilizada:"
                value={resultadoCarne.toLocaleString('pt-BR')}
                unit="litros"
                description="Esta é a quantidade aproximada de água necessária para produzir esta quantidade de carne."
              />
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="eco-card p-6 bg-gradient-to-b from-[#0a3d62]/80 to-[#3498db]/80">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Consumo de Água na Indústria Têxtil</h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="text-white mb-4">
                  A indústria têxtil é uma das maiores consumidoras de água no mundo. 
                  Estima-se que este setor utilize cerca de 93 bilhões de litros 
                  de água anualmente, representando aproximadamente 4% da captação mundial 
                  de água doce. Para produzir 1 kg de fibra de algodão, são necessários entre 
                  10.000 a 20.000 litros de água. Especialmente na fabricação de jeans, cada peça 
                  consome em média entre 5.000 e 10.000 litros de água.
                </p>
              </div>
              <div className="w-full md:w-2/5 h-48 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop"
                  alt="Indústria têxtil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="eco-card p-6 bg-gradient-to-b from-[#0a3d62]/80 to-[#3498db]/80">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Consumo de Água na Indústria da Carne</h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="text-white mb-4">
                  A produção de carne é uma das atividades que mais consome água no mundo.
                  Para produzir 1 kg de carne bovina, são necessários em média 15.000 litros de água,
                  considerando toda a cadeia produtiva, desde o cultivo de grãos para ração até o processamento.
                  A carne de frango consome aproximadamente 4.300 litros por kg.
                  Esta água é utilizada na irrigação de pastagens, alimentação, dessedentação, limpeza e processamento.
                </p>
              </div>
              <div className="w-full md:w-2/5 h-48 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&auto=format&fit=crop"
                  alt="Indústria da carne"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agua;
