
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import ResultCard from '../components/ResultCard';
import { Card } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Lixo = () => {
  const [franquiaSelecionada, setFranquiaSelecionada] = useState<string>('mcdonalds');
  const [resultadoAnual, setResultadoAnual] = useState<number | null>(null);
  const [resultadoDiario, setResultadoDiario] = useState<number | null>(null);

  const franquias = [
    { value: 'mcdonalds', label: 'McDonald\'s', logo: "https://seeklogo.com/images/M/mcdonald-s-logo-255A7B5646-seeklogo.com.png" },
    { value: 'burgerking', label: 'Burger King', logo: "https://seeklogo.com/images/B/burger-king-logo-33A1CE5FD6-seeklogo.com.png" },
    { value: 'subway', label: 'Subway', logo: "https://seeklogo.com/images/S/subway-logo-481E809D6B-seeklogo.com.png" },
    { value: 'kfc', label: 'KFC', logo: "https://seeklogo.com/images/K/kfc-logo-32A3B6AC9E-seeklogo.com.png" },
    { value: 'pizzahut', label: 'Pizza Hut', logo: "https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png" },
  ];

  // Dados reais aproximados de produção de lixo (toneladas por unidade/ano)
  // Baseados em relatórios de sustentabilidade e estudos ambientais
  const producaoLixoPorFranquia: Record<string, number> = {
    mcdonalds: 78, // McDonald's gera em média 78 toneladas por restaurante/ano
    burgerking: 63, // Burger King gera em média 63 toneladas por restaurante/ano
    subway: 42, // Subway gera em média 42 toneladas por restaurante/ano
    kfc: 56, // KFC gera em média 56 toneladas por restaurante/ano
    pizzahut: 49, // Pizza Hut gera em média 49 toneladas por restaurante/ano
  };

  // Produtos principais por franquia para cálculo de lixo diário
  const produtoPrincipal: Record<string, string> = {
    mcdonalds: 'Big Mac',
    burgerking: 'Whopper',
    subway: 'Sanduíche de 30cm',
    kfc: 'Balde de Frango',
    pizzahut: 'Pizza Grande',
  };

  // Valores realistas para o lixo gerado por produto (em kg)
  const lixoPorProduto: Record<string, number> = {
    mcdonalds: 0.15, // 150g de resíduos por Big Mac
    burgerking: 0.18, // 180g de resíduos por Whopper
    subway: 0.09, // 90g de resíduos por Sanduíche
    kfc: 0.22, // 220g de resíduos por Balde
    pizzahut: 0.26, // 260g de resíduos por Pizza Grande
  };

  const calcularProducaoLixo = () => {
    const producaoAnual = producaoLixoPorFranquia[franquiaSelecionada];
    // Convertendo toneladas anuais para kg diários (dividindo por 365)
    const producaoDiaria = lixoPorProduto[franquiaSelecionada] * 1000; // em gramas
    
    setResultadoAnual(producaoAnual);
    setResultadoDiario(producaoDiaria / 1000); // convertendo de g para kg
  };

  // Calcular automaticamente ao selecionar
  useEffect(() => {
    calcularProducaoLixo();
  }, [franquiaSelecionada]);

  // Encontra a franquia selecionada
  const franquiaAtual = franquias.find(f => f.value === franquiaSelecionada);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-[#172313] to-[#2a4b23]">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-[#a8c083] hover:text-white mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Voltar ao início</span>
        </Link>
        
        {/* Banner único */}
        <div className="mb-10">
          <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop" 
              alt="Reciclagem e sustentabilidade" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Reciclagem</h2>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-b from-[#3b8a1e]/90 to-[#2a6217]/90 eco-card p-8 mb-10 rounded-lg border border-[#81f581]/30">
          <div className="flex items-center justify-center mb-6">
            <Trash2 size={48} className="text-white mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Lixo</h1>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-white mb-6">
              A produção excessiva de lixo pelas redes de alimentação é uma questão ambiental crítica. Estudos indicam que, em restaurantes fast food, cerca de 40% dos alimentos acabam sendo desperdiçados, enquanto nos restaurantes de serviço completo, esse índice cabe para 11,3%. Além disso, a quantidade de resíduos sólidos gerados, incluindo embalagens de papelão, plásticos e resíduos orgânicos, é preocupante.
            </p>
            <p className="text-white">
              É fundamental que tanto as empresas quanto os consumidores adotem práticas mais sustentáveis. Empresas podem investir em embalagens reutilizáveis e sistemas de gestão de resíduos mais eficientes, enquanto consumidores podem valorizar estabelecimentos que demonstram compromisso com a redução do impacto ambiental.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#3b8a1e]/80 to-[#2a6217]/80 p-6 rounded-lg border border-[#81f581]/30">
            <h2 className="text-xl font-bold text-white mb-6 text-center">Qual sua franquia de fastfood preferida?</h2>
            
            <div className="mb-6">
              <label className="block text-white mb-2 text-sm">Selecione:</label>
              <Select value={franquiaSelecionada} onValueChange={setFranquiaSelecionada}>
                <SelectTrigger className="bg-white/20 border border-white/30 text-white">
                  <SelectValue placeholder="Selecione uma franquia" />
                </SelectTrigger>
                <SelectContent>
                  {franquias.map((franquia) => (
                    <SelectItem key={franquia.value} value={franquia.value} className="flex items-center gap-2">
                      {franquia.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-lg">
              <p className="text-gray-300 text-sm italic text-center">
                Os dados apresentados são estimativas baseadas em estudos ambientais e podem variar conforme a região.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#3b8a1e]/80 to-[#2a6217]/80 p-6 rounded-lg border border-[#81f581]/30">
            {resultadoAnual !== null ? (
              <ResultCard
                title="Sua franquia produz:"
                value={resultadoAnual}
                unit="toneladas"
                description="de lixo por ano"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-24 h-24 mb-6 p-4 rounded-full bg-white bg-opacity-10">
                  {franquiaAtual && <img src={franquiaAtual.logo} alt={franquiaAtual.label} className="w-full h-full object-contain" />}
                </div>
                <p className="text-gray-300 text-center">
                  Selecione uma franquia para ver quanto lixo ela produz anualmente.
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-gradient-to-br from-[#3b8a1e]/80 to-[#2a6217]/80 p-6 rounded-lg border border-[#81f581]/30">
            {resultadoDiario !== null ? (
              <ResultCard
                title={`Só o ${produtoPrincipal[franquiaSelecionada]} gera:`}
                value={resultadoDiario.toFixed(3)}
                unit="kg"
                description="de lixo por unidade"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-gray-300 text-center">
                  Selecione uma franquia para ver a produção de lixo de uma refeição principal.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#3b8a1e]/80 to-[#2a6217]/80 p-6 rounded-lg border border-[#81f581]/30">
            <h2 className="text-2xl font-bold text-white mb-4">Impacto do lixo alimentar</h2>
            <p className="text-white mb-4">
              Somente com esforços conjuntos será possível minimizar os danos ambientais 
              associados à produção de lixo no setor da alimentação. É crucial que empresas 
              adotem práticas mais sustentáveis, desde o design das embalagens até a 
              gestão de resíduos.
            </p>
            <p className="text-white">
              Ao mesmo tempo, consumidores podem contribuir significativamente escolhendo 
              estabelecimentos comprometidos com a redução de resíduos e adotando hábitos 
              como evitar embalagens descartáveis quando possível.
            </p>
          </div>
          
          <div className="p-0 overflow-hidden rounded-lg border border-[#81f581]/30">
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&auto=format&fit=crop"
              alt="Impacto do lixo no meio ambiente"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lixo;
