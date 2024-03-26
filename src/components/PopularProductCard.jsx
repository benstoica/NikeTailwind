import { star } from "../assets/icons";

const PopularProductCard = (props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={props.imgURL}
        alt={props.name}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl leading-normal font-semibold ">
        {props.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
        {props.price}
      </p>
    </div>
  );
};

export default PopularProductCard;