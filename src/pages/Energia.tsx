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

    // --- cálculo original (mantido) ---
    const consumoTV = Number(formData.horasTV) * consumoKWh.tv * 30;
    const consumoVideoGames = Number(formData.horasVideoGames) * consumoKWh.videoGames * 30;
    const consumoBanho = Number(formData.minutosBanho) * (consumoKWh.chuveiro / 60) * 30;
    const consumoEletros = Number(formData.qtdEletrodomesticos) * 1.5; // diária, mas mantido conforme original

    const totalConsumo = consumoTV + consumoVideoGames + consumoBanho + consumoEletros;

    const ferramentasIA = {
      chatgpt: 0.0023 * totalConsumo,
      copilot: 0.0028 * totalConsumo,
      grok: 0.0035 * totalConsumo,
      gemini: 0.0031 * totalConsumo
    };

    const resultadoCalculado = { total: totalConsumo, ferramentasIA };
    setResultado(resultadoCalculado);
    // ------------------------------------

    // prepara payload para API
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
        <Link to="/" className="inline-flex items-center text-white mb-6">
          <ArrowLeft size={20} className="mr-2" /> Voltar ao início
        </Link>

        {/* Banner e descrição mantidos iguais ao seu código */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="eco-card p-6 bg-gradient-to-b from-[#d35400]/80 to-[#f39c12]/80">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Calculadora de consumo elétrico
            </h2>
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
                <Button type="submit" className="flex-1">
                  Calcular
                </Button>
                <Button variant="destructive" onClick={limparDados}>
                  Limpar
                </Button>
              </div>
            </form>
          </div>

          {/* Área de resultado */}
          <div className="eco-card p-6 bg-gradient-to-b from-[#d35400]/80 to-[#f39c12]/80">
            {resultado ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Resultado
                </h2>
                <ResultCard
                  title="Gasto mensal médio:"
                  value={resultado.total.toFixed(1)}
                  unit="kWh"
                  className="mb-8"
                  description="Consumo estimado por mês."
                />
                <h3 className="text-xl font-medium text-yellow-200 mb-4">
                  Comparativo IA (kWh/mês)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ResultCard title="ChatGPT" value={resultado.ferramentasIA!.chatgpt.toFixed(1)} unit="kWh" />
                  <ResultCard title="Copilot" value={resultado.ferramentasIA!.copilot.toFixed(1)} unit="kWh" />
                  <ResultCard title="Grok" value={resultado.ferramentasIA!.grok.toFixed(1)} unit="kWh" />
                  <ResultCard title="Gemini" value={resultado.ferramentasIA!.gemini.toFixed(1)} unit="kWh" />
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
