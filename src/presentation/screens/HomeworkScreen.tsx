import { StyleSheet, View } from 'react-native';

export default function HomeworkScreen() {
    return (
        <View style={ styles.container } >
            <View style={ [ styles.box, styles.purpleBox ] } />
            <View style={ [ styles.box, styles.orangeBox ] } />
            <View style={ [ styles.box, styles.blueBox ] } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        // Tarea-2
        // justifyContent: 'center',
        // Tarea-3
        justifyContent: 'center',
        // Tarea-4
        // justifyContent: 'space-between',
        // Tarea-5
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // Tarea-7
        // justifyContent: 'center',
        // alignItems: 'center',
        // Tarea-8
        // justifyContent: 'center',
        // alignItems: 'center',
        // Tarea-9
        // justifyContent: 'center',
        // alignItems: 'center',
        // Tarea-10
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row'
    },
    box: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        // Tarea-3
        alignSelf: 'flex-end',
        // Tarea-4
        // alignSelf: 'flex-end',
        // Tarea-5
        // height: '100%',
        // Tarea-6
        // flex: 1,
        // width: 'auto',
        // Tarea-9
        // top: 100,
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        // Tarea-1
        // flex: 1,
        // Tarea-4
        // alignSelf: 'center',
        // Tarea-5
        // height: '100%',
        // Tarea-6
        // flex: 1,
        // width: 'auto',
        // Tarea-8
        // left: 100,
        // Tarea-9
        // left: 100,
        // Tarea-10
        // top: 50,
    },
    blueBox: {
        backgroundColor: '#28c4d9',
        // Tarea-2
        // width: 'auto',
        // Tarea-3
        alignSelf: 'center',
        // Tarea-5
        // height: '100%',
        // Tarea-6
        // flex: 2,
        // width: 'auto',
    },
})