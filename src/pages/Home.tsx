
import { Droplet, Zap, Trash2, Info, Mail } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 pb-16 bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&auto=format&fit=crop')] bg-fixed bg-cover">
      <div className="container mx-auto px-4">        
        <div className="eco-card p-8 mb-16 bg-gradient-to-b from-[#081a29]/80 to-[#103d62]/80 backdrop-blur-sm border border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <img src="https://cdn-icons-png.flaticon.com/512/921/921490.png" alt="Earth" className="w-full h-full animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Sustentabilidade Transparente
            </h1>
            
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-white mb-8">
                Bem-vindo ao Sustentabilidade Transparente! Nosso objetivo é destacar o impacto ambiental causado pelo 
                consumo e produção desenfreados na sociedade, evidenciando especialmente a desigual responsabilidade 
                atribuída a cidadãos em relação às grandes corporações.
              </p>
              
              <p className="text-lg text-white mb-8">
                Inspirados pelo Objetivo de Desenvolvimento Sustentável número 12 da ONU, sobre consumo e produção 
                responsáveis, desenvolvemos uma aplicação interativa e educativa para que você possa compreender melhor 
                os impactos das suas ações cotidianas.
              </p>
            </div>

            <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <p className="text-xl font-medium text-white mt-12">
                Aqui você poderá realizar comparações detalhadas sobre três aspectos fundamentais:
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <CategoryCard 
              title="Água" 
              path="/agua" 
              icon={<Droplet size={48} />} 
              description="Compare o consumo de água em diferentes atividades cotidianas e a nível industrial."
            />
          </div>
          
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <CategoryCard 
              title="Energia" 
              path="/energia" 
              icon={<Zap size={48} />}
              description="Calcule seu consumo de energia e compare com outras tecnologias e padrões de uso."
            />
          </div>
          
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <CategoryCard 
              title="Lixo" 
              path="/lixo" 
              icon={<Trash2 size={48} />}
              description="Entenda o impacto da produção de lixo no meio ambiente, especialmente no setor de alimentos."
            />
          </div>
        </div>
        
        <div className="eco-card p-6 text-center backdrop-blur-sm bg-white/10 border border-white/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Por que isto é importante?</h2>
          <p className="text-gray-100">
            A conscientização sobre o impacto ambiental é o primeiro passo para mudanças reais.
            Ao entender como as ações individuais e corporativas afetam o planeta, podemos
            fazer escolhas mais responsáveis e demandar mudanças sistêmicas.
          </p>
        </div>

        {/* Novas seções Sobre e Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="sobre-contato">
          {/* Seção Sobre */}
          <div id="sobre" className="eco-card p-6 bg-gradient-to-b from-[#081a29]/80 to-[#103d62]/80 backdrop-blur-sm border border-white/20">
            <div className="flex items-center mb-4">
              <Info size={24} className="text-[#a8c083] mr-3" />
              <h2 className="text-2xl font-bold text-white">Sobre</h2>
            </div>
            <div className="text-white">
              <p className="mb-4">
                O projeto Sustentabilidade Transparente surgiu da necessidade de tornar mais claro o impacto ambiental causado tanto por indivíduos quanto por grandes corporações.
              </p>
              <p className="mb-4">
                Nossa missão é educar e conscientizar através de dados concretos, permitindo que as pessoas compreendam a dimensão real de suas escolhas diárias e como elas se comparam com as atividades industriais em grande escala.
              </p>
              <p>
                Acreditamos que a transparência é o primeiro passo para uma mudança significativa nos padrões de consumo e produção, contribuindo para um planeta mais sustentável para as futuras gerações.
              </p>
            </div>
          </div>
          
          {/* Seção Contato */}
          <div id="contato" className="eco-card p-6 bg-gradient-to-b from-[#081a29]/80 to-[#103d62]/80 backdrop-blur-sm border border-white/20">
            <div className="flex items-center mb-4">
              <Mail size={24} className="text-[#a8c083] mr-3" />
              <h2 className="text-2xl font-bold text-white">Contato</h2>
            </div>
            <div className="text-white">
              <p className="mb-4">
                Ficou com alguma dúvida ou gostaria de contribuir com nosso projeto? Entre em contato conosco:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="font-medium mr-2">E-mail:</span>
                  <a href="mailto:contato@sustentabilidadetransparente.org" className="text-[#a8c083] hover:underline">
                    contato@sustentabilidadetransparente.org
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Telefone:</span>
                  <span>(00) 0000-0000</span>
                </li>
                <li>
                  <p className="mt-4">
                    Sua opinião é muito importante para nós! Ajude-nos a melhorar este projeto enviando suas sugestões e comentários.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
