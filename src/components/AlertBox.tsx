import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const AlertBox = () => {
    const isEnabled = true;
    return (
        <TouchableOpacity
            style={styles.alertBox}
            onPress={() => { }}
        >
            <Text>$1000</Text>
            <Text>Custom Name For Alert</Text>
            <Switch
                trackColor={{ false: "gray", true: "blue" }}
                thumbColor={isEnabled ? "white" : "white"}
                ios_backgroundColor="gray"
                onValueChange={() => { }}
                value={isEnabled}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    alertBox: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 20,
        marginTop: 0,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
});

export default AlertBox;