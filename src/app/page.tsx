import { BorderButton, Button } from '@/components/Button';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <div className='font-bold text-blue-500'>ゼロから立ち上げるおとちパックス</div>
      <div className='my-4'>
        <Button buttonType='button' buttonText='ボタン' />
      </div>
      <div>
        <BorderButton buttonType='button' buttonText='ボタン' />
      </div>
    </Container>
  );
}
