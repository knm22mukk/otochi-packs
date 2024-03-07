import { BorderButton, Button } from '@/components/Button';

export default function Home() {
  return (
    <>
      <div className='font-bold text-red-500'>ゼロから立ち上げるおとちパックス</div>
      <div className='my-4'>
        <Button buttonType='button' buttonText='ボタン' />
      </div>
      <div>
        <BorderButton buttonType='button' buttonText='ボタン' />
      </div>
    </>
  );
}
