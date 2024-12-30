import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Animated, ScrollView } from 'react-native';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get('window');

export default function Tronco({ navigation }) {
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
            { id: 1, uri: require('../../assets/30.png'), description: '30 - Cruzar os braços pode indicar desacordo, proteção ou desconforto, especialmente se feito de forma rígida. Movimentos relaxados podem apenas demonstrar casualidade. Observe mudanças repentinas no tronco para captar aprovação ou reprovação.' },
            { id: 2, uri: require('../../assets/31.png'), description: '31 - Relaxar o tronco sobre um cômodo (esparramento do corpo) – Sinal de relaxamento, mas, também pode significar domínio ou demarcação de território.' },
            { id: 3, uri: require('../../assets/32.png'), description: '32 - Inflar os peitos – Sinal de agressão e desafio' },
            { id: 4, uri: require('../../assets/33.png'), description: '33 - Encolher os ombros – Se for de forma parcial e rápida pode significar que está sendo evasivo ou dissimulado, desonesto, inseguro ou mentindo, mas, se fizer de forma elevada ela está em dúvida ou não sabe a resposta' },
            { id: 5, uri: require('../../assets/ms.jpg'), description: 'Descrição da Imagem 5' },
            { id: 6, uri: require('../../assets/ms.jpg'), description: 'Descrição da Imagem 6' },
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
                <Text style={[styles.title, { fontFamily: 'CustomFont' }]}>Galeria - Tronco</Text>
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
