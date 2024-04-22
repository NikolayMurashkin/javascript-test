import { Button } from '@/shared';
import { useNavigate } from 'react-router-dom';

const Test = () => {
    const navigate = useNavigate();

    const onNavigateToHome = () => {
        navigate('/', {
            replace: true,
        });
    };
    return (
        <div>
            <Button onClick={onNavigateToHome}>Вернуться назад</Button>
        </div>
    );
};

export default Test;
