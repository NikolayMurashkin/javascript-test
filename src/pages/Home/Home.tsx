import { Button } from '@/shared';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const onNavigateToTest = () => {
        navigate('/test', {
            replace: true,
        });
    };

    return (
        <div data-testid='Home'>
            <Button onClick={onNavigateToTest}>Пройти тест</Button>
            {/* <Outlet /> */}
        </div>
    );
};

export default Home;
