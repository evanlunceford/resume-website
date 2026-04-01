
type HomeButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function HomeButton({ label, onClick }: HomeButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
