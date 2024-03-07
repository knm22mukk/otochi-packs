type Props = {
  buttonType: 'button' | 'submit';
  buttonText: string;
};

export function Button({ buttonType, buttonText }: Props) {
  return (
    <button
      type={buttonType}
      className='rounded bg-orange-500 px-8 py-3 text-lg font-bold text-gray-100 hover:bg-orange-600'
    >
      {buttonText}
    </button>
  );
}

export function BorderButton({ buttonType, buttonText }: Props) {
  return (
    <button
      type={buttonType}
      className='rounded border border-orange-500 px-8 py-3 text-lg font-bold text-orange-500 hover:bg-orange-600 hover:text-white'
    >
      {buttonText}
    </button>
  );
}
