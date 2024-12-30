import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Animated, ScrollView } from 'react-native';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get('window');

export default function Boca({ navigation }) {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedText, setSelectedText] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'CustomFont': require("../../assets/fonts/JetBrainsMono-Bold.ttf"),
            });
            setFontLoaded(true);
        };
        loadFont();
        loadImages();
    }, []);

    const loadImages = () => {
        const newImages = [
            { id: 1, uri: require('../../assets/103.png'), description: '103 - O sorriso verdadeiro envolve o músculo zigomático maior, que levanta os cantos da boca, e o músculo orbicular, que enruga a área externa dos olhos (pés de galinha), indicando autenticidade.' },
            { id: 2, uri: require('../../assets/104.png'), description: '104 - Sorriso falso - Os cantos da boca só vão até a direção das orelhas e o olhar não tem muita ou nem uma expressão' },
            { id: 3, uri: require('../../assets/105.png'), description: '105 - Sorriso risório simulado (social) – Os lábios ficam contidos, apertados um no outro.' },
            { id: 4, uri: require('../../assets/106.png'), description: '106 - Lábios cheios ou normais – Sinal de satisfação ' },
            { id: 5, uri: require('../../assets/107.png'), description: '107 - Lábios comprimidos ou desaparecendo – Sinal de estresse' },
            { id: 6, uri: require('../../assets/109.png'), description: '109 - Desaparecimento total dos lábios e cantos da boca voltados para baixo – sinal de pouca confiança, emoção frágil e estresse e ansiedade elevadas.' },
            { id: 7, uri: require('../../assets/115.png'), description: '115 - O franzir da testa e sobrancelhas - Demonstra ansiedade, tristeza, concentração, preocupação, confusão ou raiva. Nesse caso também deves ser observado o contexto, para perceber sua intenção.' },
            { id: 8, uri: require('../../assets/110.png'), description: '110 - Fazer bico com os lábios – Sinal de concordância, mas, tem considerações, ou pode estar rejeitando o que foi dito.' },
            { id: 9, uri: require('../../assets/112.png'), description: '112 - Lamber os lábios por secura – Sinal de estresse, desconforto, tentativa de se acalmar.' },
            { id: 10, uri: require('../../assets/ms.jpg'), description: 'Descrição da Imagem 10' },

        ];
        setImages(newImages);
    };

    const openImage = (uri, description) => {
        setSelectedImage(uri);
        setSelectedText(description);
        setModalVisible(true);
        fadeIn();
    };

    const fadeIn = () => {
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    if (!fontLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.exitButton} onPress={() => navigation.goBack()}>
                    <Text style={[styles.exitButtonText, { fontFamily: 'CustomFont' }]}>Sair</Text>
                </TouchableOpacity>
                <Text style={[styles.title, { fontFamily: 'CustomFont' }]}>Galeria - Boca</Text>
            </View>

            <FlatList
                data={images}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => openImage(item.uri, item.description)}>
                        <Image source={item.uri} style={styles.image} />
                    </TouchableOpacity>
                )}
                numColumns={2}
                onEndReached={() => setPage(page + 1)}
                onEndReachedThreshold={0.5}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => {
                    setModalVisible(false);
                    fadeOut();  // Adicionando fadeOut quando o modal é fechado
                }}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => {
                            setModalVisible(false);  // Fechar o modal
                            fadeOut();  // Animação de saída
                        }}
                    >
                        <Text style={styles.closeButtonText}>✕</Text>
                    </TouchableOpacity>

                    <ScrollView contentContainerStyle={styles.modalScrollContainer}>
                        <Animated.Image source={selectedImage} style={[styles.modalImage, { opacity: fadeAnim }]} />
                        <Text style={[styles.modalText, { fontFamily: 'CustomFont' }]}>{selectedText}</Text>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    exitButton: {
        position: 'absolute',
        left: 0,
        padding: 8,
    },
    exitButtonText: {
        fontSize: 16,
        color: '#ff5555',
    },
    title: {
        fontSize: 28,
        color: '#333',
        textAlign: 'center',
    },
    image: {
        width: width / 2 - 24,
        height: 250,
        margin: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: 16,
        borderRadius: 8,
        elevation: 20,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    modalScrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    modalImage: {
        width: width * 0.9,
        height: height * 0.7,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    modalText: {
        marginTop: 16,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    closeButton: {
        position: 'absolute',
        top: height * 0.03, // Proporcional ao tamanho da tela
        left: width * 0.05, // Proporcional ao tamanho da tela
        backgroundColor: '#ff5555',
        width: width * 0.1, // Tamanho do botão ajustado conforme largura da tela
        height: width * 0.1, // Tamanho do botão ajustado conforme altura da tela
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 20,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        zIndex: 1,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
