import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pokemonDetailServices } from "../../services";
import { IPokemonDetailResponse } from "../../interface/pokemonDetail";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

function DetailPage() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name);

    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };

  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div>
      <div className=" w-[90%] m-[auto] max-w-[1100px]">
        <div className="flex justify-center">
          <img
            src="/images/logo.webp"
            alt=""
            className="max-h-[80px] mt-[20px]"
          />
        </div>
        <div className="w-[90%] max-w-[600px] m-[auto]">
          <Link
            to={"/"}
            className="bg-[#a8e6ff] text-xl pl-[20px] pr-[5px] rounded-l-[50%]"
          >
            Back
          </Link>
          {pokemon.data && (
            <div>
              <div className="overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] m-[auto]">
                <div className="bg-center aspect-square bg-cover w-full rounded-[20px] relative h-[400px] ">
                  <img
                    className="absolute h-auto max-h-[400px] aspect-square translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                    src="../../../public/images/pokemon_bg.png"
                    alt=""
                  />
                  <img
                    className="absolute rounded-t-lg h-[50%] sm:h-[250px] p-[40px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                    src={pokemon.data?.image}
                    alt=""
                  />
                </div>

                <div className="pt-5 bg-[#243540] rounded-[20px] p-[20px] mt-[20px]">
                  <div className="flex justify-between">
                    <h5 className="mb-2 capitalize text-xl font-bold tracking-tight text-white">
                      {pokemon.data?.name}
                    </h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                      #{pokemon.data?.id}
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
                    <div>
                      <div className="flex gap-[10px]">
                        <div className="text-[#a8e6ff] font-bold">Height</div>
                        <div className="text-white">
                          {(pokemon.data.height / 10).toFixed(2)} m
                        </div>
                      </div>
                      <div className="flex gap-[10px]">
                        <div className="text-[#a8e6ff] font-bold">Weight</div>
                        <div className="text-white">
                          {(pokemon.data.weight / 10).toFixed(2)} kg
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-start sm:justify-end mt-[16px]">
                      {pokemon.data?.types.map((item) => {
                        return (
                          <span
                            className={`badge-type-${item.type.name} capitalize px-[14px] py-1 rounded-xl`}
                          >
                            {item.type.name}
                          </span>
                        );
                      })}
                    </div>
                    <div>
                      <div className="text-[#a8e6ff] text-[18px] font-bold mb-[8px]">
                        Ability
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-[6px] gap-x-[8px]">
                        {pokemon.data?.abilities.map((item) => {
                          return (
                            <div
                              className={`bg-[#0d61a6] text-white capitalize px-[14px] py-1 rounded-xl`}
                            >
                              {item.ability.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#a8e6ff] text-[18px] font-bold mb-[8px]">
                        States
                      </div>
                      {pokemon.data?.stats.map((item) => {
                        return (
                          <div className="flex gap-[10px] justify-between">
                            <div className="text-[#a8e6ff] font-bold">
                              {item.stat.name}
                            </div>
                            <div className="text-white">{item.base_stat}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
