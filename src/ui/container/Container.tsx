import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Container = ({ children }: Props) => {
    return (
        <div
            style={{
                maxWidth: 900,
                margin: '0 auto',
                padding: '24px',
            }}
        >
            {children}
        </div>
    );
};
