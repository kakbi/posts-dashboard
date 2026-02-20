interface Props {
    message?: string;
}

export const ErrorMessage = ({ message }: Props) => {
    return (
        <div style={{ color: '#ff0000' }}>
            {message || 'Something went wrong'}
        </div>
    );
};
