import { type ReactNode } from 'react';
import { Header } from '../header/Header';
import { Container } from '../container/Container';

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Container>{children}</Container>
        </>
    );
};
