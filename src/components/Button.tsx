interface Props {
  color?: "primary" | "success" | "danger";
  text: string;
  onClose: () => void;
}

const Button = ({ text, color = "primary", onClose }: Props) => {
  return (
    <button type="button" className={"btn mt-5 btn-" + color} onClick={onClose}>
      {text}
    </button>
  );
};

export default Button;
