import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform } from 'react-native';

const IMAGENS_LOCAIS = {
  'bolo_pao_de_forma.png': require('./img/bolo_pao_de_forma.png'),
  'torta_portuguesa.png': require('./img/torta_portuguesa.png'),
  'bolo_de_chocolate.png': require('./img/bolo_de_chocolate.png'),
  'bolo_de_limao.png': require('./img/bolo_de_limao.png'),
  'red_velvet.png': require('./img/red_velvet.png'),
  'bolo_aipim.png': require('./img/bolo_aipim.png'),
  'bolo_maracuja.png': require('./img/bolo_maracuja.png'),
};

const RECEITAS_INICIAIS = [
  
  { id: "1", nome: 'Bolo de Pão de Forma', img: 'bolo_pao_de_forma.png', ingredientes: {"Massa": ["Pão de forma sem casca", "Frango desfiado ou presunto", "Maionese ou Requeijão", "Cenoura ralada(opcional)", "Milho(opcional)", "Ervilha(opcional)"], "Cobertura": ["Maionese e Batata Palha ou Queijo ralado"], "Recheio": ["Tomate cereja, Azeitona e Folhas verdes"]}, utensilios: ["Faca de serra", "Tábua de corte", "Tigelas", "Colher ou espátula", "Espátula de confeiteiro (opcional)", "Forma ou aro (opcional)", "Plástico filme", "Ralador", "Colher pequena ou pinça"], passos: {"Massa": ["Corte as bordas do pão de forma (se necessário)"], "Cobertura": [ "Misture o recheio", "Forre uma forma com plástico filme", "Faça uma camada de pão", "Adicione o recheio e espalhe", "Repita as camadas", "Finalize com pão Cubra e leve à geladeira por 2 a 4 horas", "Desenforme", "Passe maionese por fora","Cubra com batata palha ou queijo", "Decore"]}, videoUrl: 'https://raw.githubusercontent.com/jerog1971/projeto-mobile/main/videos/chocolate.mp4?raw=true' },

{ id: "2", nome: 'Torta Portuguesa', img: 'torta_portuguesa.png', ingredientes: {"Massa":["3 ovos", "2 xícaras de leite", "½ xícara de óleo", "2 xícaras de farinha de trigo", "1 colher (sopa) de fermento em pó", "Sal a gosto"],"Recheio": ["300 g de presunto picado", "300 g de queijo mussarela","3 ovos cozidos em rodelas", "1 lata de ervilha", "Orégano a gosto (opcional)"]}, utensilios: ["Tigela (bacia)", "Colher de pau ou espátula Batedor (fouet) ou garfo", "Forma de torta/assadeira", "Forno", "Faca", "Tábua de corte"], passos:{"Massa": ["No liquidificador, bata os ovos, leite e óleo.", "Acrescente a farinha de trigo e o sal e bata novamente até ficar homogêneo.", "Misture o fermento delicadamente.", "Despeje metade da massa em uma forma untada.", "1/2 xícara de suco de maracujá 1/2 xícara de açúcar"], "Recheio":["Espalhe todo o recheio.", "Cubra com o restante da massa.", "Finalize com orégano por cima.", "Leve ao forno pré-aquecido a 180°C por 35 a 40 minutos, até dourar."]}, videoUrl: 'https://raw.githubusercontent.com/jerog1971/projeto-mobile/main/videos/fuba.mp4?raw=true' },

{ id: "3", nome: 'Bolo de Chocolate', img: 'bolo_de_chocolate.png', ingredientes:{"Massa":["4 ovos", "2 xícaras (chá) de açúcar", "1 xícara (chá) de óleo", "1 xícara (chá) de água quente ou leite morno", "1 xícara (chá) de chocolate em pó ou achocolatado", "2 xícaras (chá) de farinha de trigo", "1 colher (sopa) de fermento em pó"]}, utensilios: ["Tigela (bacia)", "Colher de pau ou espátula Batedor (fouet) ou garfo", "Forma de bolo", "Forno", "Faca", "Tábua de corte", "Xícara e colher medidora"], passos:{"Massa": ["No liquidificador, bata os ovos, o açúcar, o óleo, a água morna e o cacau em pó até obter uma mistura homogênea.", "Transfira a mistura para uma tigela e adicione a farinha de trigo e o sal aos poucos, misturando delicadamente com um fouet ou espátula.", "Por último, acrescente o fermento em pó e misture suavemente.", "Despeje a massa em uma forma untada e enfarinhada (pode ser uma forma de pudim, como na imagem).", "Asse em forno pré-aquecido a 180°C por cerca de 30 a 35 minutos."], "Cobertura": ["Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga.", "Leve ao fogo baixo, mexendo sempre, até começar a borbulhar e atingir uma consistência cremosa (ponto de brigadeiro de colher).", "Desligue o fogo e adicione o creme de leite, misturando bem até incorporar.", "Deixe a cobertura esfriar um pouco e despeje sobre o bolo já morno ou frio.", "Finalize com granulado por cima."]}, videoUrl: 'https://raw.githubusercontent.com/jerog1971/projeto-mobile/main/videos/cenoura.mp4?raw=true' },

 { id: "4", nome: 'Bolo de Limão', img: 'bolo_de_limao.png', ingredientes:{"Massa": ["4 ovos", "1 xícara de açúcar", "1 xícara de suco de limão", "1 xícara de leite", "½ xícara de óleo", "2 xícaras de farinha de trigo", "1 colher de fermento"], "Calda":["1 caixa de leite condensado", "Suco de 3 limões"]}, utensilios: ["Tigela (bacia)", "Colher de pau ou espátula", "Batedor (fouet) ou garfo", "Forma de bolo", "Forno Ralador (para o limão)", "Espremedor de limão (opcional)", "Xícara e colher medidora"], passos:{"Massa": ["Em uma tigela, bata os ovos com o açúcar até misturar bem.", "Adicione o óleo e o suco de limão, misture novamente.", "Coloque a farinha de trigo aos poucos, mexendo até a massa ficar homogênea.", "Acrescente as raspas de limão (opcional) e misture.", "Por último, adicione o fermento e mexa levemente.", "Despeje a massa em uma forma untada.", "Leve ao forno pré-aquecido a 180°C por cerca de 35 a 40 minutos.", "Espere esfriar um pouco, desenforme e pronto, coloque a calda."]}, videoUrl: 'https://raw.githubusercontent.com/jerog1971/projeto-mobile/main/videos/laranja.mp4?raw=true' },

{ id: "5", nome: 'Red Velvet', img: 'red_velvet.png', ingredientes:{"Massa": ["2 xícaras de farinha de trigo", "1 ½ xícara de açúcar", "2 ovos", "1 xícara de leite", "½ xícara de óleo ou manteiga derretida", "2 colheres (sopa) de cacau em pó", "1 colher (sopa) de corante vermelho", "1 colher (chá) de essência de baunilha", "1 colher (sopa) de vinagre", "1 colher (chá) de bicarbonato de sódio", "1 pitada de sal"], "CALDA":[ "1 caixa de creme de leite", "1 lata de leite condensado", "1 colher (sopa) de manteiga"]}, utensilios: ["Tigela (bacia)", "Colher de pau ou espátula", "Batedor (fouet) ou batedeira", "Forma de bolo", "Forno Peneira (opcional)", "Xícara e colher medidora", "Espátula para cobertura"], passos:{"Massa": ["Em uma tigela, misture os ovos e o açúcar.", "Adicione o óleo (ou manteiga), leite e baunilha, misture bem.", "Acrescente o cacau e o corante vermelho.", "Coloque a farinha e o sal, misturando até ficar homogêneo.", "Em um copo, misture o vinagre com o bicarbonato e adicione à massa.", "Despeje em uma forma untada.", "Asse em forno 180°C por 35–40 minutos."]}, videoUrl: 'https://raw.githubusercontent.com/jerog1971/projeto-mobile/main/videos/laranja.mp4?raw=true' },
 { id: "6", nome: 'Aipim', img: 'bolo_aipim.png', ingredientes:{"Massa": ["1 kg de aipim (mandioca) ralado", "3 ovos", "2 xícaras de açúcar", "200 ml de leite de coco", "2 colheres (sopa) de manteiga", "1 pitada de sal", "100 g de coco ralado (opcional)"]}, utensilios: ["Tigela (bacia)", "Colher de pau ou espátula", "Liquidificador (opcional)", "Ralador", "Forma de bolo", "Forno", "Xícara e colher medidora"], passos: {"Massa":["Descasque e rale o aipim.", "Em uma tigela, misture os ovos, açúcar e manteiga.", "Adicione o leite de coco e misture bem.", "Acrescente o aipim ralado e o coco (se quiser).", "Misture tudo até ficar homogêneo.", "Despeje em uma forma untada.", "Leve ao forno pré-aquecido a 180°C por cerca de 40 a 50 minutos.", "Espere esfriar um pouco e sirva 😋."]}, videoUrl: 'https://raw.githubusercontent.com/jerog1971/projeto-mobile/main/videos/laranja.mp4?raw=true' },

  { id: "7", nome: 'Bolo de Maracujá', img: 'bolo_maracuja.png', ingredientes:{"Massa": ["3 ovos", "1 xícara de açúcar", "1/2 xícara de óleo", "1 xícara de suco de maracujá (natural ou concentrado)", "2 xícaras de farinha de trigo", "1 colher (sopa) de fermento em pó"]}, utensilios: ["Tigela grande", "Liquidificador (ou batedeira)", "Colher ou espátula", "Forma de bolo (redonda ou retangular)", "Forno Peneira (opcional)"], passos: {"Massa":["Pré-aqueça o forno a 180°C.", "No liquidificador, coloque os ovos, o açúcar, o óleo e o suco de maracujá.", "Bata bem.", "Despeje a mistura em uma tigela.", "Acrescente a farinha de trigo aos poucos e misture bem.", "Por último, adicione o fermento e mexa delicadamente.", "Coloque a massa em uma forma untada e enfarinhada.", "Leve ao forno por cerca de 35 a 40 minutos.", "Faça o teste do palito: se sair limpo, está pronto."], "Calda":["(opcional)Calda de Maracujá: 1/2 xícara de suco de maracujá 1/2 xícara de açúcar"]}, videoUrl: 'https://raw.githubusercontent.com/jerog1971/projeto-mobile/main/videos/laranja.mp4?raw=true' },
];


export default function HomeScreen({ navigation }) {
  const [receitas, setReceitas] = useState(RECEITAS_INICIAIS);
  const [carregando, setCarregando] = useState(false);

  const sincronizarReceitas = async () => {
    setCarregando(true);
    try {
      const response = await fetch('https://raw.githubusercontent.com/jerog1971/projeto-mobile/refs/heads/main/receitas.json');
      const receitasDoServidor = await response.json();

      const novas = receitasDoServidor.filter(resServidor =>
        !receitas.some(resLocal => resLocal.id === resServidor.id)
      );

      if (novas.length === 0) {
        alert("Você já possui todas as receitas disponíveis!");
      } else {
        setReceitas(prev => [...prev, ...novas]);
        alert("Novas receitas adicionadas com sucesso!");
      }
    } catch (error) {
      alert("Erro ao conectar ao servidor.");
    } finally {
      setCarregando(false);
    }
  };

  const deletarReceita = (id) => {
    const confirmar = Platform.OS === 'web' ? window.confirm("Deseja remover?") : true;
    if (confirmar) {
      setReceitas(prev => prev.filter(r => r.id !== id));
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.headerTitle}>Minhas Receitas 🍰</Text>

        <TouchableOpacity style={styles.btnSync} onPress={sincronizarReceitas} disabled={carregando}>
          {carregando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.btnText}>Baixar Novidades ☁️</Text>
          )}
        </TouchableOpacity>

        <View style={styles.vitrine}>
          {receitas.map((receita) => (
            <View key={receita.id} style={styles.cardContainer}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Ingredientes', { receitaCompleta: receita })}
              >
                <Image
                  source={IMAGENS_LOCAIS[receita.img] || { uri: receita.imgUrl }}
                  style={styles.image}
                />
                <View style={styles.cardOverlay}>
                  <Text style={styles.recipeTitle}>{receita.nome}</Text>
                </View>
              </TouchableOpacity>

              {!["1", "2", "3", "4"].includes(receita.id) && (
                <TouchableOpacity style={styles.deleteBtn} onPress={() => deletarReceita(receita.id)}>
                  <Text style={styles.deleteText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e8e814',
    height: Platform.OS === 'web' ? 'auto' : '100%',
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
  },
  scrollView: {
    flex: 1,
    overflow: Platform.OS === 'web' ? 'visible' : 'scroll',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
    alignItems: 'stretch',
  },
  headerTitle: { fontSize: 26, fontWeight: 'bold', padding: 20 },
  btnSync: { backgroundColor: '#f4511e', margin: 20, padding: 15, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' },
  vitrine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10
  },
  cardContainer: { width: '46%', marginBottom: 20, position: 'relative' },
  card: { width: '100%', height: 160, borderRadius: 15, overflow: 'hidden', backgroundColor: '#eee' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  cardOverlay: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', padding: 8 },
  recipeTitle: { color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
  deleteBtn: { position: 'absolute', top: -10, right: -10, backgroundColor: '#ff4444', width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center', zIndex: 99 },
  deleteText: { color: '#fff', fontWeight: 'bold' }
});