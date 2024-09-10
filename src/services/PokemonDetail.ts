import axios from "axios"
import { Pokemon_Base_URL } from "../utils/constant"
import { IPokemonDetailResponse } from "../interface/pokemonDetail"
import { handleResponse, IResponse } from "../utils/handleResponse"


interface IGetPokemonDetailResponse extends IResponse{
    status: number | undefined
    data?: IPokemonDetailResponse
}

export const pokemonDetailServices = {
    getPokemonDetail : async (
        pokemonName:string
    ):Promise<IGetPokemonDetailResponse> => {
        try {
            const response = await axios.get(`${Pokemon_Base_URL}/pokemon/${pokemonName}`)
            return handleResponse.success(response)
        } catch (error :any) {
            return handleResponse.error(error)
        }
    }
}
