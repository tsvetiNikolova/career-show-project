import { useTimer } from '../components/TimerContext';

function useNavViewmodel() {
    const { seconds } = useTimer();
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return{formattedTime}
}

export default useNavViewmodel;