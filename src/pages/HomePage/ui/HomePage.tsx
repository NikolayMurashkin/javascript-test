import { Button } from '@/shared';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const onNavigateToTest = () => {
        navigate('/test', {
            replace: true,
        });
    };

    return (
        <section data-testid='Home'>
            <Button onClick={onNavigateToTest}>Пройти тест</Button>
        </section>
    );
};

export default Home;
