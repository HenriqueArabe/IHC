// src/pages/Energia.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';
import CalculatorInput from '../components/CalculatorInput';
import ResultCard from '../components/ResultCard';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

interface EnergyPayload {
  email: string;
  nome: string;
  horasTV: number;
  horasVideoGames: number;
  minutosBanho: number;
  qtdEletrodomesticos: number;
}

const Energia = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    horasTV: '',
    horasVideoGames: '',
    minutosBanho: '',
    qtdEletrodomesticos: ''
  });

  const [resultado, setResultado] = useState<{
    total: number;
    ferramentasIA: {
      chatgpt: number;
      copilot: number;
      grok: number;
      gemini: number;
    } | null;
  } | null>(null);

  const consumoKWh = {
    tv: 0.15,
    videoGames: 0.2,
    chuveiro: 5.5,
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const calcularConsumo = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, informe seu email para prosseguir com o cálculo.",
        variant: "destructive",
      });
      return;
    }

    const consumoTV = Number(formData.horasTV) * consumoKWh.tv * 30;
    const consumoVideoGames = Number(formData.horasVideoGames) * consumoKWh.videoGames * 30;
    const consumoBanho = Number(formData.minutosBanho) * (consumoKWh.chuveiro / 60) * 30;
    const consumoEletros = Number(formData.qtdEletrodomesticos) * 1.5;

    const totalConsumo = consumoTV + consumoVideoGames + consumoBanho + consumoEletros;

    const ferramentasIA = {
      chatgpt: 32400000,
      copilot: 27000000,
      grok: 18100000,
      gemini: 22500000
    };

    const resultadoCalculado = { total: totalConsumo, ferramentasIA };
    setResultado(resultadoCalculado);

    const payload: EnergyPayload = {
      email: formData.email,
      nome: formData.nome,
      horasTV: Number(formData.horasTV),
      horasVideoGames: Number(formData.horasVideoGames),
      minutosBanho: Number(formData.minutosBanho),
      qtdEletrodomesticos: Number(formData.qtdEletrodomesticos)
    };

    try {
      const res = await fetch('/api/energy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      toast({
        title: "Dados enviados!",
        description: "Seu formulário foi salvo no servidor.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível salvar no servidor.",
        variant: "destructive",
      });
    }
  };

  const limparDados = () => {
    setFormData({
      email: '',
      nome: '',
      horasTV: '',
      horasVideoGames: '',
      minutosBanho: '',
      qtdEletrodomesticos: ''
    });
    setResultado(null);
    toast({
      title: "Limpo",
      description: "Formulário e resultado resetados.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-[#e67e22] to-[#f39c12]">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white hover:text-yellow-100 mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Voltar ao início</span>
        </Link>

        <div className="mb-10 rounded-lg overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&auto=format&fit=crop"
            alt="Energia"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-transparent flex items-center">
            <div className="px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Energia</h1>
              <Zap size={48} className="text-yellow-300 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="eco-card p-8 mb-10 bg-gradient-to-b from-[#d35400]/90 to-[#f39c12]/90">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Energia</h1>
          <p className="text-white mb-6 max-w-3xl mx-auto text-center">
            O consumo de energia elétrica está diretamente relacionado ao nosso estilo de vida moderno.
            Os aparelhos eletrônicos, sistemas de climatização e até as ferramentas de inteligência artificial
            que utilizamos diariamente têm um impacto significativo no meio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="eco-card p-6 bg-gradient-to-b from-[#d35400]/80 to-[#f39c12]/80">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Calculadora de consumo elétrico</h2>
            <form onSubmit={calcularConsumo}>
              <CalculatorInput
                label="Email:"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
              />
              <CalculatorInput
                label="Nome:"
                id="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome"
              />
              <CalculatorInput
                label="Horas de TV:"
                id="horasTV"
                type="number"
                value={formData.horasTV}
                onChange={handleInputChange}
                placeholder="Horas por dia"
              />
              <CalculatorInput
                label="Horas de VideoGames:"
                id="horasVideoGames"
                type="number"
                value={formData.horasVideoGames}
                onChange={handleInputChange}
                placeholder="Horas por dia"
              />
              <CalculatorInput
                label="Minutos de banho:"
                id="minutosBanho"
                type="number"
                value={formData.minutosBanho}
                onChange={handleInputChange}
                placeholder="Minutos por dia"
              />
              <CalculatorInput
                label="Quantidade de eletrodomésticos:"
                id="qtdEletrodomesticos"
                type="number"
                value={formData.qtdEletrodomesticos}
                onChange={handleInputChange}
                placeholder="Quantidade"
              />

              <div className="flex gap-4 mt-6">
                <Button type="submit" className="flex-1 bg-amber-600 hover:bg-amber-700">
                  Calcular
                </Button>
                <Button type="button" onClick={limparDados} className="bg-red-600 hover:bg-red-700">
                  Limpar
                </Button>
              </div>
            </form>
          </div>

          <div className="eco-card p-6 bg-gradient-to-b from-[#d35400]/80 to-[#f39c12]/80">
            {resultado ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Resultado</h2>
                <ResultCard
                  title="Sua residência tem um gasto mensal médio de:"
                  value={resultado.total.toFixed(1)}
                  unit="kWh"
                  className="mb-8"
                  description="Este valor equivale ao consumo médio de energia elétrica em sua residência durante um mês."
                />
                <h3 className="text-xl font-medium text-yellow-200 mb-4">
                  Comparativo de consultas a ferramentas de IA (consumo mensal):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ResultCard
                    title="Consumo do ChatGPT"
                    value="32.4 milhões"
                    unit="kWh"
                    description="Consumo mensal estimado"
                  />
                  <ResultCard
                    title="Consumo do Copilot"
                    value="27.0 milhões"
                    unit="kWh"
                    description="Consumo mensal estimado"
                  />
                  <ResultCard
                    title="Consumo do Grok"
                    value="18.1 milhões"
                    unit="kWh"
                    description="Consumo mensal estimado"
                  />
                  <ResultCard
                    title="Consumo do Gemini"
                    value="22.5 milhões"
                    unit="kWh"
                    description="Consumo mensal estimado"
                  />
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-yellow-100">
                <Zap size={64} className="mb-4 animate-bounce" />
                <p>Preencha o formulário para ver os resultados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energia;
