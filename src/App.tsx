import React, { useState } from 'react';
import { Beef, Wine, IceCream, Star, Flame, X, GlassWater } from 'lucide-react';
interface MenuItem {
  title: string;
  description: string;
  price?: string;
  image: string;
  longDescription?: string;
}

interface MenuSection {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const menuSections: MenuSection[] = [
    {
      title: "Rodízio de Carnes",
      icon: <Flame className="w-6 h-6" />,
      items: [
        {
          title: "Rodízio Completo",
          description: "Acesso ilimitado a todas as carnes, buffet de saladas e acompanhamentos",
          price: "R$ 149,90",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Experimente nossa seleção premium de carnes, incluindo mais de 15 cortes diferentes, preparados por nossos mestres churrasqueiros. Acompanha buffet completo com saladas frescas, pratos quentes e guarnições variadas. Serviço contínuo de carnes na mesa, assadas no ponto de sua preferência."
        }
      ]
    },
    {
      title: "Carnes Premium",
      icon: <Beef className="w-6 h-6" />,
      items: [
        {
          title: "Picanha Premium",
          description: "Corte nobre e suculento, preparado no ponto desejado",
          image: "https://images.unsplash.com/photo-1607116176195-b81b1f41f536?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Nossa picanha premium é cuidadosamente selecionada e possui marmoreio perfeito. Assada lentamente, mantendo toda sua suculência e sabor característico. Servida com crosta dourada e interior macio no ponto de sua preferência."
        },
        {
          title: "Costela Premium",
          description: "Assada lentamente por 8 horas, extremamente macia",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Costela premium assada por 8 horas em baixa temperatura, garantindo maciez e sabor incomparáveis. A carne se desprende do osso facilmente, derretendo na boca."
        },
        {
          title: "Fraldinha",
          description: "Corte marmorizado e saboroso",
          image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Fraldinha selecionada com marmoreio ideal, assada lentamente para preservar sua suculência característica. Um dos cortes mais populares da casa."
        },
        {
          title: "Maminha",
          description: "Corte magro e suculento",
          image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Maminha premium, corte magro e saboroso, preparada com temperos especiais e assada no ponto ideal para manter sua suculência."
        },
        {
          title: "Alcatra",
          description: "Corte tradicional e saboroso",
          image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Alcatra especialmente selecionada, com sabor intenso e textura macia. Preparada com maestria por nossos churrasqueiros."
        },
        {
          title: "Cupim",
          description: "Assado lentamente, derrete na boca",
          image: "https://images.unsplash.com/photo-1601356616077-695728ae17cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Cupim assado lentamente até atingir o ponto de derreter na boca. Textura única e sabor incomparável."
        },
        {
          title: "Cordeiro",
          description: "Costelas e pernil temperados com ervas finas",
          image: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Cordeiro premium temperado com mix de ervas finas e assado lentamente. Sabor suave e textura macia característica."
        },
        {
          title: "Picanha de Cordeiro",
          description: "Corte especial com sabor único",
          image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Picanha de cordeiro premium, corte nobre com sabor característico, temperada com ervas finas e assada no ponto."
        },
        {
          title: "Contra Filé",
          description: "Macio e com gordura na medida certa",
          image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Contra filé premium com marmoreio perfeito, garantindo maciez e sabor equilibrado em cada fatia."
        },
        {
          title: "Filé Mignon",
          description: "O corte mais nobre e macio",
          image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "O mais nobre dos cortes, nosso filé mignon é extremamente macio e suculento, preparado no ponto de sua preferência."
        },
        {
          title: "Linguiça Artesanal",
          description: "Preparada com temperos especiais da casa",
          image: "https://images.unsplash.com/photo-1597712679225-5ff5f353c456?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Linguiça artesanal preparada em nossa casa com blend exclusivo de temperos e especiarias."
        },
        {
          title: "Costela de Porco",
          description: "Suculenta e bem temperada",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Costela de porco premium, assada lentamente até atingir o ponto ideal de maciez, com temperos especiais."
        },
        {
          title: "Frango com Bacon",
          description: "Medalhões de frango envoltos em bacon crocante",
          image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Medalhões de frango premium envolvidos em bacon crocante, garantindo sabor e suculência únicos."
        },
        {
          title: "Coração de Frango",
          description: "Temperado com sal grosso e ervas",
          image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Corações de frango selecionados, temperados com sal grosso e ervas finas, preparados no ponto ideal."
        },
        {
          title: "Ancho",
          description: "Corte argentino premium com marmoreio perfeito",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Ancho argentino premium, conhecido por seu marmoreio excepcional e sabor intenso. Assado no ponto de sua preferência."
        }
      ]
    },
    {
      title: "Bebidas",
      icon: <Wine className="w-6 h-6" />,
      items: [
        {
          title: "Caipirinha Premium",
          description: "Cachaça envelhecida, limão e açúcar",
          price: "R$ 32",
          image: "https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Caipirinha preparada com cachaça premium envelhecida em barris de carvalho, limões frescos e açúcar refinado."
        },
        {
          title: "Vinho Malbec Reserva",
          description: "Vinho tinto argentino encorpado",
          price: "R$ 180",
          image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Malbec argentino premium com notas de frutas vermelhas maduras, especiarias e um final longo e elegante."
        },
        {
          title: "Chopp Artesanal",
          description: "Pilsen gelado na pressão ideal",
          price: "R$ 18",
          image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Chopp artesanal pilsen, servido na temperatura ideal com colarinho cremoso e carbonatação perfeita."
        },
        {
          title: "Gin Tônica Especial",
          description: "Gin premium, tônica e especiarias",
          price: "R$ 36",
          image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Gin tônica preparada com gin premium, água tônica especial e mix de especiarias selecionadas."
        },
        {
          title: "Whisky 12 Anos",
          description: "Dose dupla, puro ou com gelo",
          price: "R$ 45",
          image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Whisky 12 anos premium, servido em dose dupla com opção de gelo ou puro."
        },
        {
          title: "Água Mineral",
          description: "Com ou sem gás",
          price: "R$ 8",
          image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Água mineral natural de fonte própria, disponível nas versões com e sem gás."
        },
        {
          title: "Refrigerante",
          description: "Diversas opções",
          price: "R$ 8",
          image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Variedade de refrigerantes premium servidos bem gelados."
        },
        {
          title: "Suco Natural",
          description: "Laranja, limão, abacaxi ou maracujá",
          price: "R$ 12",
          image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Sucos naturais preparados na hora com frutas frescas selecionadas."
        },
        {
          title: "Cerveja Premium",
          description: "Long neck importada",
          price: "R$ 18",
          image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Seleção de cervejas premium importadas em garrafas long neck."
        },
        {
          title: "Drink sem Álcool",
          description: "Diversos sabores refrescantes",
          price: "R$ 22",
          image: "https://images.unsplash.com/photo-1621873495734-5eabf1125b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Drinks especiais sem álcool, preparados com frutas frescas e xaropes artesanais."
        }
      ]
    },
    {
      title: "Sobremesas",
      icon: <IceCream className="w-6 h-6" />,
      items: [
        {
          title: "Pudim de Leite",
          description: "Cremoso com calda de caramelo",
          price: "R$ 22",
          image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Pudim de leite cremoso tradicional com calda de caramelo dourada. Receita da casa há mais de 20 anos."
        },
        {
          title: "Petit Gateau",
          description: "Com sorvete de creme e calda de chocolate",
          price: "R$ 28",
          image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Petit gateau de chocolate belga com centro derretido, acompanhado de sorvete de creme e calda quente de chocolate."
        },
        {
          title: "Papaya com Cassis",
          description: "Cremoso com licor fino",
          price: "R$ 24",
          image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Creme de papaya fresco com licor de cassis importado. Uma sobremesa leve e refrescante."
        },
        {
          title: "Sorvete Gourmet",
          description: "Três sabores com calda e chantilly",
          price: "R$ 25",
          image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Seleção de três sabores de sorvetes artesanais, servidos com calda especial e chantilly fresco."
        },
        {
          title: "Cheesecake",
          description: "Com calda de frutas vermelhas",
          price: "R$ 26",
          image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Cheesecake cremoso com base de biscoito artesanal e calda caseira de frutas vermelhas."
        },
        {
          title: "Cartola",
          description: "Banana grelhada, queijo coalho, canela e sorvete",
          price: "R$ 28",
          image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Sobremesa típica nordestina com banana grelhada na manteiga, queijo coalho derretido, canela e sorvete de creme."
        },
        {
          title: "Brownie",
          description: "Com sorvete de creme e calda quente",
          price: "R$ 26",
          image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Brownie caseiro quentinho com nozes, servido com sorvete de creme e calda quente de chocolate."
        },
        {
          title: "Abacaxi Grelhado",
          description: "Com canela e sorvete de creme",
          price: "R$ 22",
          image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          longDescription: "Fatias de abacaxi grelhadas com açúcar e canela, servidas com sorvete de creme. Opção leve e refrescante."
        }
      ]
    },
    {
      title: "Carta de Vinhos",
      icon: <GlassWater className="w-6 h-6" />,
      items: [
        {
          title: "Cabernet Sauvignon Reserva",
          description: "Vinho tinto chileno encorpado",
          price: "R$ 280",
          image: "https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_434/v1/products/1000000504-standing-front.png",
          longDescription: "Cabernet Sauvignon chileno de Valle Central, 18 meses em barricas de carvalho francês. Taninos sedosos e notas de cassis e cacau."
        },
        {
          title: "Chardonnay Burgundy",
          description: "Branco francês elegante",
          price: "R$ 420",
          image: "https://ak.picdn.net/shutterstock/photos/721060048/watermark_1000/debaf609ffbdd022ebfceaa15645ca45/preview_1000-721060048.jpg",
          longDescription: "Chardonnay da Borgonha com 12 meses em carvalho. Acidez vibrante com notas de maçã verde e amendoado."
        },
        {
          title: "Malbec Mendoza Premium",
          description: "Argentino intenso",
          price: "R$ 320",
          image: "https://www.pexels.com/photo/red-wine-glass-4283291/",
          longDescription: "Malbec de altitude de Mendoza, 24 meses em barris. Frutas escuras e especiarias com final persistente."
        },
        {
          title: "Prosecco Superiore DOCG",
          description: "Espumante italiano brut",
          price: "R$ 260",
          image: "https://www.pexels.com/photo/wine-glasses-on-table-4670467/",
          longDescription: "Espumante italiano da região de Valdobbiadene, perlage fina e notas cítricas."
        },
        {
          title: "Syrah do Vale do São Francisco",
          description: "Brasileiro tropical",
          price: "R$ 190",
          image: "https://www.pexels.com/photo/wine-bottle-on-wine-glass-6294382/",
          longDescription: "Syrah brasileiro com característica tropical, 12 meses em carvalho. Frutas maduras e pimenta rosa."
        },
        {
          title: "Pinot Noir Oregon",
          description: "Americano delicado",
          price: "R$ 380",
          image: "https://www.pexels.com/photo/selective-focus-photo-of-wine-glass-4336084/",
          longDescription: "Pinot Noir do Oregon com envelhecimento em carvalho neutro. Elegância com notas de cereja e trufa."
        },
        {
          title: "Tannat Uruguai",
          description: "Cor intensa e taninos robustos",
          price: "R$ 240",
          image: "https://www.pexels.com/photo/a-bottle-of-red-wine-5341830/",
          longDescription: "Tannat uruguaio de Canelones, 18 meses em carvalho. Estrutura potente com final mineral."
        },
        {
          title: "Sauvignon Blanc Marlborough",
          description: "Branco neozelandês vibrante",
          price: "R$ 310",
          image: "https://www.pexels.com/photo/close-up-photo-of-wine-glass-6193307/",
          longDescription: "Sauvignon Blanc da Nova Zelândia com acidez refrescante e notas de maracujá e capim-limão."
        },
        {
          title: "Carménère Gran Reserva",
          description: "Chileno complexo",
          price: "R$ 350",
          image: "https://www.pexels.com/photo/close-up-photo-of-wine-in-glass-1347017/",
          longDescription: "Carménère de Colchagua Valley, 24 meses em barris. Notas de tabaco e chocolate amargo."
        },
        {
          title: "Porto Vintage 2011",
          description: "Fortificado português",
          price: "R$ 650",
          image: "https://www.pexels.com/photo/wine-glass-1464167/",
          longDescription: "Porto Vintage de ano excepcional, corpo completo com nuances de ameixa e nozes."
        },
        {
          title: "Rioja Gran Reserva",
          description: "Espanhol tradicional",
          price: "R$ 410",
          image: "https://www.pexels.com/photo/close-up-photography-of-wine-bottle-and-glass-1439822/",
          longDescription: "Tempranillo de La Rioja, 36 meses em carvalho americano. Complexidade com tostado e baunilha."
        },
        {
          title: "Rosé Provence",
          description: "Francês elegante",
          price: "R$ 290",
          image: "https://www.pexels.com/photo/rose-wine-in-glass-3098067/",
          longDescription: "Rosé provençal com delicados aromas florais e final mineral refrescante."
        },
        {
          title: "Zinfandel Califórnia",
          description: "Americano ousado",
          price: "R$ 330",
          image: "https://www.pexels.com/photo/close-up-photo-of-wine-glass-1021297/",
          longDescription: "Zinfandel de Sonoma Valley, corpo médio com notas de geléia de amora e pimenta."
        },
        {
          title: "Verdejo Rueda",
          description: "Branco espanhol fresco",
          price: "R$ 220",
          image: "https://www.pexels.com/photo/grape-wine-and-bottle-4065041/",
          longDescription: "Verdejo de Rueda com 6 meses em inox. Acidez vívida e aromas cítricos."
        },
        {
          title: "Barolo DOCG",
          description: "Italiano nobre",
          price: "R$ 780",
          image: "https://www.pexels.com/photo/photo-of-wine-bottles-1066629/",
          longDescription: "Nebbiolo do Piemonte, 5 anos de envelhecimento. Taninos elegantes e aromas de alcatrão e rosas."
        },
        {
          title: "Vinho Verde",
          description: "Português leve",
          price: "R$ 160",
          image: "https://www.pexels.com/photo/photo-of-wine-bottle-on-brown-table-1302401/",
          longDescription: "Branco jovem do Minho com leve effervescence. Perfeito para dias quentes."
        },
        {
          title: "Shiraz Austrália",
          description: "Encorpado e especiado",
          price: "R$ 360",
          image: "https://www.pexels.com/photo/red-wine-glass-2297059/",
          longDescription: "Shiraz de Barossa Valley com 18 meses em carvalho. Notas de pimenta preta e chocolate."
        },
        {
          title: "Gewürztraminer Alsace",
          description: "Francês aromático",
          price: "R$ 400",
          image: "https://www.pexels.com/photo/wine-in-clear-wine-glass-1481011/",
          longDescription: "Branco alsaciano com aromas exóticos de lichia e rosas. Final levemente adocicado."
        },
        {
          title: "Brunello di Montalcino",
          description: "Ícone italiano",
          price: "R$ 920",
          image: "https://www.pexels.com/photo/wine-bottle-and-glass-3819517/",
          longDescription: "Sangiovese Grosso envelhecido 4 anos. Complexidade incomparável com potencial de guarda."
        },
        {
          title: "Merlot Bordeaux",
          description: "Blend francês",
          price: "R$ 380",
          image: "https://www.pexels.com/photo/wine-bottle-on-table-4602750/",
          longDescription: "Blend de Bordeaux com predomínio Merlot. Taninos suaves e notas de ameixa."
        }
      ]
      
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div
          className="relative h-96 bg-no-repeat bg-cover bg-center"
               style={{ backgroundImage: 'url("https://media.istockphoto.com/photos/grilled-picanha-traditional-brazilian-cut-picture-id827646134?k=6&m=827646134&s=612x612&w=0&h=RI2GNF-EPSdeZlp-SSdUbm-QslNkmUvtnFpD_AGMnM8=")' }}>
           <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rossetto Grill</h1>
          <p className="mt-2 text-lg tracking-widest">CARNES NOBRES SELECIONADAS</p>
        </div>
          </div>

          <div className="p-8">
            {menuSections.map((section, index) => (
              <div key={index} className="mb-12 last:mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-rose-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        {item.price && (
                          <div className="mt-2 text-rose-600 font-semibold">
                            {item.price}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8 p-4 bg-rose-50 rounded-xl">
              <div className="flex items-center gap-2 text-rose-600">
                <Star className="w-5 h-5" />
                <span className="font-medium">Rodízio inclui buffet completo de saladas e acompanhamentos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for item details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
              {selectedItem.price && (
                <p className="mt-2 text-xl text-rose-600 font-semibold">{selectedItem.price}</p>
              )}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {selectedItem.longDescription || selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

