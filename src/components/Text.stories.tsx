import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    },
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
    },
};

export const Custom: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p> // can pass any text tag
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
};