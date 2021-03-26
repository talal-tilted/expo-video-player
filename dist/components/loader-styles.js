import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slider: {
        marginHorizontal: 10,
        flex: 1
    },
    loader: Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }),
    video: {
        height: '100%',
        width: '100%',
    },
});
export default styles;
