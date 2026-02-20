import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header
            style={{
                padding: '16px',
                background: '#1e1e1e',
                color: '#fff',
            }}
        >
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Posts Dashboard
            </Link>
        </header>
    );
};
