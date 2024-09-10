import axios from "axios"
import { Pokemon_Base_URL } from "../utils/constant"
import { IPokemonListResponse } from "../interface/pokemonList"
import { handleResponse, IResponse } from "../utils/handleResponse"

interface IGetPokemonListResponse extends IResponse {
    status: number | undefined
    data?: IPokemonListResponse
}

export const pokemonListServices = {
    getPokemonList : async (
        limit?:number,
        offset?:number):Promise<IGetPokemonListResponse> => {
        try {
            const response = await axios.get(
                `${Pokemon_Base_URL}/pokemon?limit=${limit||151}&offset=${offset||0}`
            )
            return handleResponse.success(response)
        } catch (error :any) {
            return handleResponse.error(error)
        }

    }
}
