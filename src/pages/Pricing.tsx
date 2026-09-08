const Pricing = () => {
  return (
    <div className="flex flex-row justify-center gap-10 items-center min-h-screen text-primary-content">
      {/* PLANO BASICO */}
      <div className="card w-96 bg-base-300 card-border border-white">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Básico</h2>
            <span className="text-xl">R$0</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="text-lg">✓ Chat com IA limitado</li>
            <li className="text-lg">✓ 5 exercícios/mês</li>
            <li className="text-lg">✓ Sem anúncios</li>
            <li className="text-lg">✗ Acompanhamento completo</li>
          </ul>
          <div className="my-6 mx-10">
            <button className="btn btn-outline btn-block">Subscribe</button>
          </div>
        </div>
      </div>

      {/* PLANO MAIS POPULAR PRO*/}
      <div className="aura aura-silver ">
        <div className="card w-96 bg-base-300">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">Mais Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Pro</h2>
              <span className="text-xl">R$25,99/mês</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="text-lg">✓ Chat com IA limitado</li>
              <li className="text-lg">✓ Exercícios ilimitados</li>
              <li className="text-lg">✓ Exercícios por dificuldade</li>
              <li className="text-lg">✓ Acompanhamento detalhado</li>
              <li className="text-lg">✗ Suporte prioritário</li>
            </ul>
            <div className="my-6 mx-10">
              <button className="btn btn-outline btn-block">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* PLANO MASTER */}

      <div className="card w-96 bg-base-300 card-border border-white">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Premium</h2>
            <span className="text-xl">R$49,99/mês</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="text-lg">✓ Chat com IA limitado</li>
            <li className="text-lg">✓ 5 exercícios/mês</li>
            <li className="text-lg">✓ Sem anúncios</li>
            <li className="text-lg">✗ Acompanhamento completo</li>
          </ul>
          <div className="my-6 mx-10">
            <button className="btn btn-outline btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
