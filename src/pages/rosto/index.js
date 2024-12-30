import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Animated, ScrollView } from 'react-native';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get('window');

export default function Rosto({ navigation }) {
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
            { id: 1, uri: require('../../assets/ms.jpg'), description: 'Descrição da Imagem 1.' },
            { id: 2, uri: require('../../assets/88.png'), description: '88 - A dilatação da pupila dos olhos – Demonstram que gostamos de algo.' },
            { id: 3, uri: require('../../assets/91.png'), description: '91 - Franzir as sobrancelhas – Pode ter muitas interpretações de acordo com o contexto- Dependendo do tempo ou intensidade ou contexto.'},
            { id: 4, uri: require('../../assets/92.png'), description: '92 - Elevação das sobrancelhas e arregalar os olhos – Demonstra autoconfiança, satisfação e sentimentos positivos. Geralmente são acompanhados de um sorriso.' },
            { id: 5, uri: require('../../assets/95.png'), description: '95 - Olhos fixos podem expressar curiosidade e interesse, mas também intimidar ou demonstrar ódio. A interpretação depende do contexto: se acompanhados de um sorriso relaxado, indicam interesse positivo; caso contrário, com mandíbula contraída e lábios comprimidos, sinalizam uma intenção negativa.' },
            { id: 6, uri: require('../../assets/96.png'), description: '96 - Desviar o olhar para cima ou lados – Contrário do que é dito, não é, rejeição, desinteresse, decepção ou grosseria e sim, de conforto, relaxamento e melhora os pensamentos (relaxa). Não se sente ameaçado.' },
            { id: 7, uri: require('../../assets/ms.jpg'), description: 'Descrição da Imagem 7' },
            { id: 8, uri: require('../../assets/ms.jpg'), description: 'Descrição da Imagem 8' },
            { id: 9, uri: require('../../assets/ms.jpg'), description: 'Descrição da Imagem 9' },
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
                <Text style={[styles.title, { fontFamily: 'CustomFont' }]}>Galeria - Rosto</Text>
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
