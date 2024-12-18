import { Pressable, StyleSheet, Text } from 'react-native'
import React, { ComponentProps, FC, PropsWithChildren } from 'react'
import { Colors } from '../../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

interface OutlineButtonProps extends PropsWithChildren {
    icon: ComponentProps<typeof Ionicons>['name'];
    onPress: () => void;
}

const OutlineButton: FC<OutlineButtonProps> = ({ icon, children, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={onPress}
        >
            <Ionicons
                style={styles.icon}
                name={icon}
                size={18}
                color={Colors.primary500}
            />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default OutlineButton

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500,
    },
    pressed: {
        opacity: 0.7,
    },
    icon: {
        marginRight: 6,
    },
    text: {
        color: Colors.primary500,
    },
});