// Dados dos Produtos
const produtos = [
    // ANÉIS
    {
        id: 1,
        nome: "Anel Infinito",
        categoria: "aneis",
        preco: 60.00,
        imagem: "anelinfinito.jpeg",
        descricao: "Símbolo de eternidade em prata 950, perfeito para declarações de amor duradouras."
    },
    {
        id: 2,
        nome: "Anel Solitário Coração",
        categoria: "aneis",
        preco: 70.00,
        imagem: "anelpedra.jpeg",
        descricao: "Pedra natural semipreciosa em destaque sobre prata 950, brilho que chama atenção."
    },
    {
        id: 3,
        nome: "Anel de Pedras",
        categoria: "aneis",
        preco: 80.00,
        imagem: "anelpedra2.jpeg",
        descricao: "Duas pedras naturais harmoniosamente combinadas em prata 950, design exclusivo."
    },
    {
        id: 4,
        nome: "Anel de Pedras",
        categoria: "aneis",
        preco: 100.00,
        imagem: "anelpedrinhas.jpeg",
        descricao: "Múltiplas pedrinhas cintilantes em prata 950, efeito joalheiro sofisticado."
    },
    {
        id: 5,
        nome: "Anel Solitário",
        categoria: "aneis",
        preco: 70.00,
        imagem: "anelsolitario.jpeg",
        descricao: "Clássico solitário em prata 950, elegância atemporal para noivas e formaturas."
    },

    // BERLOQUES
    {
        id: 6,
        nome: "Berloque Chopp",
        categoria: "berloques",
        preco: 60.00,
        imagem: "berloquecerveja.jpeg",
        descricao: "Miniatura de caneca em prata 950, presente perfeito para amantes de cerveja."
    },
    {
        id: 7,
        nome: "Berloque Estrela",
        categoria: "berloques",
        preco: 60.00,
        imagem: "berloqueestrela.jpeg",
        descricao: "Estrela em prata 950, simboliza luz e proteção em pequenos detalhes."
    },
    {
        id: 8,
        nome: "Berloque Heineken",
        categoria: "berloques",
        preco: 110.00,
        imagem: "berloqueheineken.jpeg",
        descricao: "Edição especial em prata 950 para colecionadores da marca cervejeira."
    },
    {
        id: 9,
        nome: "Berloque Nossa Senhora Aparecida",
        categoria: "berloques",
        preco: 60.00,
        imagem: "Berloquenossasenhora.jpeg",
        descricao: "Padroeira do Brasil em prata 950, fé e devoção em um pequeno amuleto."
    },
    {
        id: 10,
        nome: "Separador Coração Vazado",
        categoria: "berloques",
        preco: 60.00,
        imagem: "berloque.jpeg",
        descricao: "Modelo básico em prata 950 para iniciar sua coleção de berloques."
    },
    {
        id: 11,
        nome: "Berloque Ponto de Luz",
        categoria: "berloques",
        preco: 35.00,
        imagem: "berloque1.jpeg",
        descricao: "Design moderno em prata 950, peça para sua pulseira personalizada."
    },
    {
        id: 12,
        nome: "Berloque Medalha de São Bento",
        categoria: "berloques",
        preco: 65.00,
        imagem: "berloque2.jpeg",
        descricao: "Feito em prata 925 de alta qualidade, este berloque da Medalha de São Bento une durabilidade e significado espiritual. Um amuleto de proteção!"
    },


    // BRINCOS
    {
        id: 14,
        nome: "Brinco Argolinha",
        categoria: "brincos",
        preco: 75.00,
        imagem: "brincoargola4.jpeg",
        descricao: "Argola em prata 950, diâmetro médio para looks equilibrados."
    },
    {
        id: 15,
        nome: "Brinco Pedra",
        categoria: "brincos",
        preco: 20.00,
        imagem: "brinco2.jpeg",
        descricao: "Brinco em prata 950, design versátil para múltiplas ocasiões."
    },
    {
        id: 16,
        nome: "Brinco Argolinha",
        categoria: "brincos",
        preco: 80.00,
        imagem: "brincoargola2.jpeg",
        descricao: "Argola especial em prata 950, modelo da coleção com detalhes exclusivos."
    },
    {
        id: 17,
        nome: "Brinco Argola Estrela",
        categoria: "brincos",
        preco: 40.00,
        imagem: "brincoargolaestrela.jpeg",
        descricao: "Argola com detalhe estrelado em prata 950, brilho celestial em suas orelhas."
    },
    {
        id: 18,
        nome: "Brinco Argola",
        categoria: "brincos",
        preco: 80.00,
        imagem: "brincoargola.jpeg",
        descricao: "Clássico atemporal em prata 950, tamanho perfeito para uso diário."
    },
    {
        id: 19,
        nome: "Brinco Argola",
        categoria: "brincos",
        preco: 60.00,
        imagem: "brincoargola1.jpeg",
        descricao: "Modelo de argola em prata 950, diâmetro ideal para todos os estilos."
    },

    {
        id: 21,
        nome: "Brinco",
        categoria: "brincos",
        preco: 35.00,
        imagem: "brincoargola4.jpeg",
        descricao: "Modelo de argola em prata 950, para quem busca variedade em acessórios."
    },
    {
        id: 22,
        nome: "Brinco Argolinha",
        categoria: "brincos",
        preco: 75.00,
        imagem: "brincoargolinha.jpeg",
        descricao: "Versão mini em prata 950, delicadeza e sofisticação em tamanho reduzido."
    },
    {
        id: 23,
        nome: "Brinco Coração",
        categoria: "brincos",
        preco: 50.00,
        imagem: "brincocoracao.jpeg",
        descricao: "Forma de coração em prata 950, declaração de amor em forma de joia."
    },
    {
        id: 24,
        nome: "Brinco Pedra",
        categoria: "brincos",
        preco: 50.00,
        imagem: "brincopedra.jpeg",
        descricao: "Pedra natural em destaque sobre prata 950, brilho natural que encanta."
    },
    {
        id: 25,
        nome: "Brinco Trio Pedrinhas",
        categoria: "brincos",
        preco: 50.00,
        imagem: "brincotriodepedras.jpeg",
        descricao: "Conjunto harmonioso em prata 950, três pedras que dançam a cada movimento."
    },
    {
        id: 26,
        nome: "Brinco Argola",
        categoria: "brincos",
        preco: 30.00,
        imagem: "brinco.jpeg",
        descricao: "Modelo básico em prata 950, essencial para quem aprecia simplicidade elegante."
    },
    {
        id: 27,
        nome: "Brinco",
        categoria: "brincos",
        preco: 100.00,
        imagem: "brinco1.jpeg",
        descricao: "Brinco em prata 950, design versátil para diversas ocasiões."
    },

    // COLARES
    {
        id: 28,
        nome: "Colar Bolinha",
        categoria: "colares",
        preco: 110.00,
        imagem: "colarbolinha.jpeg",
        descricao: "Bolinhas perfeitas de prata 950, minimalismo que nunca sai de moda."
    },
    {
        id: 29,
        nome: "Colar Coração",
        categoria: "colares",
        preco: 110.00,
        imagem: "colarcoracao.jpeg",
        descricao: "Pingente coração em prata 950, carregue seu amor próximo ao peito."
    },
    {
        id: 30,
        nome: "Colar Nossa Senhora Aparecida",
        categoria: "colares",
        preco: 130.00,
        imagem: "colarnossasenhoraaparecida.jpeg",
        descricao: "Padroeira do Brasil em prata 950, proteção e fé em forma de joia."
    },
    {
        id: 31,
        nome: "Brinco São Bento",
        categoria: "brincos",
        preco: 50.00,
        imagem: "medalhasaobento.jpeg",
        descricao: "Brinco de prata 950, tradição beneditina contra energias negativas."
    },

    // PULSEIRAS
    {
        id: 32,
        nome: "Pulseira Coração",
        categoria: "pulseiras",
        preco: 90.00,
        imagem: "pulseiracoracao.jpeg",
        descricao: "Coração em prata 950, delicadeza que simboliza amor."
    },
    {
        id: 33,
        nome: "Pulseira Cruz",
        categoria: "pulseiras",
        preco: 80.00,
        imagem: "pulseiracruz.jpeg",
        descricao: "Símbolo cristão em prata 950, fé que acompanha seus movimentos."
    },
    {
        id: 34,
        nome: "Pulseira Infinito",
        categoria: "pulseiras",
        preco: 45.00,
        imagem: "pulseirainfinito.jpeg",
        descricao: "Laço infinito em prata 950, conexões que nunca se rompem."
    },
    {
        id: 35,
        nome: "Pulseira Medalha de São Bento",
        categoria: "pulseiras",
        preco: 80.00,
        imagem: "pulseiramedalha.jpeg",
        descricao: "Medalha personalizável em prata 950, transforme em uma joia única."
    },
    {
        id: 36,
        nome: "Pulseira Nossa Senhora Aparecida",
        categoria: "pulseiras",
        preco: 115.00,
        imagem: "pulseiranossasenhoraaparecida.jpeg",
        descricao: "Devocional em prata 950, proteção maternal em seu pulso."
    },
    {
        id: 37,
        nome: "Pulseira Olho Grego",
        categoria: "pulseiras",
        preco: 60.00,
        imagem: "pulseiraolhogrego.jpeg",
        descricao: "Amuleto protetor em prata 950, contra inveja e mau-olhado."
    },
    {
        id: 38,
        nome: "Pulseira Santissimo",
        categoria: "pulseiras",
        preco: 0.00,
        imagem: "pulseirasantissimo.jpeg",
        descricao: "Símbolo eucarístico em prata 950, para fiéis que carregam sua fé."
    },
    {
        id: 39,
        nome: "Pulseira Plaquinhas",
        categoria: "pulseiras",
        preco: 80.00,
        imagem: "pulseira1.jpeg",
        descricao: "Delicado e moderno na mesma peça em prata 950, essencial para colecionadores de joias."
    },
    {
        id: 40,
        nome: "Pulseira Trevo",
        categoria: "pulseiras",
        preco: 90.00,
        imagem: "pulseira2.jpeg",
        descricao: "Um trevinho em prata 950 para quem gosta de delicadeza."
    },
    {
        id: 41,
        nome: "Pulseira Pedrinhas",
        categoria: "pulseiras",
        preco: 75.00,
        imagem: "pulseira3.jpeg",
        descricao: "Pedrinhas para quem gosta de modernidade em prata 950, complete seu conjunto de pulseiras."
    },

    // TRIOS
    {
        id: 42,
        nome: "Trio brinco bolinha",
        categoria: "trios",
        preco: 269.90,
        imagem: "triobrincobolinha.jpeg",
        descricao: "Conjunto de três tamanhos em prata 950, perfeito para múltiplas perfurações."
    },
    {
        id: 43,
        nome: "Trio coração",
        categoria: "trios",
        preco: 289.90,
        imagem: "triocoracao.jpeg",
        descricao: "Três corações em prata 950, declare seu amor em diferentes tamanhos."
    },
    {
        id: 44,
        nome: "Trio pedrinha",
        categoria: "trios",
        preco: 319.90,
        imagem: "triopedrinha.jpeg",
        descricao: "Pedras naturais em três designs em prata 950, harmoniosamente combinados."
    }
];
// Carrinho e Variáveis Globais
let carrinho = [];
let frete = 0;

// Elementos DOM
const gradeProdutos = document.getElementById('grade-produtos');
const botoesFiltro = document.querySelectorAll('.filtros button');
const carrinhoBtn = document.getElementById('carrinho-btn');
const carrinhoOverlay = document.getElementById('carrinho-overlay');
const carrinhoItens = document.getElementById('carrinho-itens');
const carrinhoTotal = document.getElementById('carrinho-total');
const subtotalElement = document.getElementById('subtotal');
const freteValorElement = document.getElementById('frete-valor');
const carrinhoContador = document.getElementById('carrinho-contador');
const fecharCarrinho = document.querySelector('.fechar-carrinho');
const calcularFreteBtn = document.getElementById('calcular-frete-btn');
const cepInput = document.getElementById('cep-input');
const freteResultado = document.getElementById('frete-resultado');
const finalizarWhatsappBtn = document.getElementById('finalizar-whatsapp');

// Carregar Produtos
function carregarProdutos(categoria = 'todos') {
    gradeProdutos.innerHTML = '';
    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(produto => produto.categoria === categoria);

    produtosFiltrados.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.className = 'produto';
        produtoElement.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
                <button class="btn adicionar-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        gradeProdutos.appendChild(produtoElement);
    });

    // Adicionar eventos aos botões
    document.querySelectorAll('.adicionar-carrinho').forEach(btn => {
        btn.addEventListener('click', adicionarAoCarrinho);
    });
}

// Filtros
botoesFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        carregarProdutos(btn.dataset.categoria);
    });
});

// Funções do Carrinho
function adicionarAoCarrinho(e) {
    const id = parseInt(e.target.dataset.id);
    const produto = produtos.find(p => p.id === id);
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    atualizarCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

function removerDoCarrinho(id) {
    const itemIndex = carrinho.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        const produto = carrinho[itemIndex];
        carrinho.splice(itemIndex, 1);
        atualizarCarrinho();
        mostrarNotificacao(`${produto.nome} removido do carrinho!`);
    }
}

function atualizarCarrinho() {
    carrinhoItens.innerHTML = '';
    let subtotal = 0;

    if (carrinho.length === 0) {
        carrinhoItens.innerHTML = '<p>Seu carrinho está vazio</p>';
    } else {
        carrinho.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'carrinho-item';
            itemElement.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="carrinho-item-info">
                    <h4>${item.nome}</h4>
                    <p>R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
                </div>
                <span class="carrinho-item-remover" data-id="${item.id}">&times;</span>
            `;
            carrinhoItens.appendChild(itemElement);
            subtotal += item.preco * item.quantidade;
        });
    }

    subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
    freteValorElement.textContent = `R$ ${frete.toFixed(2)}`;
    carrinhoTotal.textContent = `R$ ${(subtotal + frete).toFixed(2)}`;
    carrinhoContador.textContent = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    atualizarLinkWhatsApp();

    // Adicionar eventos de remover
    document.querySelectorAll('.carrinho-item-remover').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removerDoCarrinho(parseInt(e.target.dataset.id));
        });
    });
}

// Cálculo de Frete
function calcularFrete(cep) {
    // Validação do CEP
    if (!cep || cep.length !== 9) {
        freteResultado.innerHTML = '<p style="color: #ff6b6b;">CEP inválido. Formato: 00000-000</p>';
        return;
    }

    // Simulação de cálculo por região (valores fictícios)
    const regiao = cep.charAt(0);
    let prazo = '';

    // Frete grátis para compras acima de R$ 1500
    const subtotal = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    
    if (subtotal > 1500) {
        frete = 0;
        prazo = '3 dias úteis';
        freteResultado.innerHTML = `
            <p><strong>Frete Grátis!</strong> Sua compra qualifica para entrega gratuita.</p>
            <p>Prazo estimado: ${prazo}</p>
        `;
    } else {
        switch (regiao) {
            case '0': case '1': case '2': case '3':
                frete = 25.90;
                prazo = '3 dias úteis';
                break;
            case '4': case '5':
                frete = 32.50;
                prazo = '5 dias úteis';
                break;
            default:
                frete = 45.90;
                prazo = '7 dias úteis';
        }

        freteResultado.innerHTML = `
            <p><strong>Opção padrão:</strong> R$ ${frete.toFixed(2)}</p>
            <p>Prazo estimado: ${prazo}</p>
        `;
    }

    atualizarCarrinho();
}

// Atualizar link do WhatsApp
function atualizarLinkWhatsApp() {
    const subtotal = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const total = subtotal + frete;
    
    let mensagem = "Olá, gostaria de finalizar minha compra dos seguintes itens:%0A%0A";
    
    carrinho.forEach(item => {
        mensagem += `- ${item.nome} (${item.quantidade}x): R$ ${(item.preco * item.quantidade).toFixed(2)}%0A`;
    });
    
    mensagem += `%0ASubtotal: R$ ${subtotal.toFixed(2)}%0A`;
    mensagem += `Frete: R$ ${frete.toFixed(2)}%0A`;
    mensagem += `Total: R$ ${total.toFixed(2)}%0A%0A`;
    mensagem += "Por favor, confirme a disponibilidade e me envie as instruções para pagamento.";
    
    finalizarWhatsappBtn.href = `https://wa.me/553899959880?text=${mensagem}`;
}

// Máscara para CEP
cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
});

// Notificação
function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao';
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);

    setTimeout(() => {
        notificacao.classList.add('fade-out');
        setTimeout(() => {
            notificacao.remove();
        }, 300);
    }, 3000);
}

// Envio do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    const textoWhatsApp = `Olá, meu nome é ${nome} (${email}). Gostaria de entrar em contato sobre:%0A%0A${mensagem}`;
    
    window.open(`https://wa.me/553899959880?text=${textoWhatsApp}`, '_blank');
    
    // Limpar formulário
    this.reset();
    mostrarNotificacao('Formulário enviado com sucesso!');
});

// Event Listeners
carrinhoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    carrinhoOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

fecharCarrinho.addEventListener('click', () => {
    carrinhoOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

calcularFreteBtn.addEventListener('click', () => {
    calcularFrete(cepInput.value.trim());
});

// Fechar carrinho ao clicar fora
carrinhoOverlay.addEventListener('click', (e) => {
    if (e.target === carrinhoOverlay) {
        carrinhoOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Inicializar
carregarProdutos();

// Adicionar estilo para notificações
const style = document.createElement('style');
style.textContent = `
    .notificacao {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #d4af37;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    }
    
    .notificacao.fade-out {
        animation: fadeOut 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);