type Props = {
  buttonType: 'button' | 'submit';
  buttonText: string;
};

export function Button({ buttonType, buttonText }: Props) {
  return (
    <button
      type={buttonType}
      className='rounded bg-orange-600 px-8 py-3 font-bold text-gray-100'
    >
      {buttonText}
    </button>
  );
}

export function BorderButton({ buttonType, buttonText }: Props) {
  return (
    <button
      type={buttonType}
      className='rounded border border-orange-600 px-8 py-3 font-bold text-orange-600'
    >
      {buttonText}
    </button>
  );
}
