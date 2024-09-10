import { Link } from "react-router-dom";
import { Type } from "../../interface/pokemonDetail";

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
}

function PokemonCard({ image, name, id, types }: PokemonCardProps) {
  return (
    <div>
      <div className="max-w-[275px] bg-[#243540] rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] m-[auto]">
        <div className="bg-[url('../../../public/images/poke-card-bg.png')] bg-center aspect-square bg-cover w-full rounded-[20px]">
          <Link to={`/detail/${name}`}>
            <img
              className="rounded-t-lg h-[218px] p-[40px] w-full"
              src={image}
              alt=""
            />
          </Link>
        </div>

        <div className="pt-5">
          <div className="flex justify-between">
            <h5 className="mb-2 capitalize text-xl font-bold tracking-tight text-white">
              {name}
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              #{id}
            </h5>
          </div>
          <div className="flex gap-2 justify-end mt-[16px]">
            {types.map((item, index) => {
              return (
                <span
                  className={`badge-type-${item.type.name} capitalize px-[14px] py-1 rounded-xl`}
                  key={index}
                >
                  {item.type.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
