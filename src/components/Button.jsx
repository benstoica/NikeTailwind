const Button = (props) => {
  return (
    <button
      className={`hover:bg-coral-red hover:text-white hover:border-coral-red transition flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        props.backgroundColor
          ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${props.fullWidth && "w-full"}`}
    >
      {" "}
      {props.label}
      {props.iconUrl && (
        <img
          src={props.iconUrl}
          alt="iconUrl"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
