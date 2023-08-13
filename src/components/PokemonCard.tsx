import React from 'react';
import { PokemonCardProps } from '../interfaces/pokemon';
import { pokemonType } from '../data/pokemonTypes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonProp }) => {
    const higestStat: number = pokemonProp?.stats.map(elem => elem.base_stat).sort((a, b) => b - a)[0] || 0;
    const principalType: string = pokemonProp?.types[0].type.name || ""
    const principalTypeColor = pokemonType.find(elem => elem.type === principalType)?.color || ""
    const secondaryPrincipalTypeColor = pokemonType.find(elem=> elem.type === principalType)?.secondaryColor || ""

    return (
        <div className='pb-8 w-full'>
            {pokemonProp?.name && (<div>
                <div className='flex justify-center gap-80 items-center w-2/3'>
                    <h2 className='text-5xl text-gray-500'>{pokemonProp.name.toUpperCase()}</h2>
                    <img className="w-96" src={pokemonProp.sprites.other['official-artwork'].front_default} alt="Pokemon default img" />
                </div>

                <div className='flex justify-between pt-8 w-2/3'>
                    {/* 
                    first block */}
                    <div className='text-gray-500 w-1/2 flex flex-col gap-4'>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right">ID</span> <span className='w-2/3 text-left'>{"#" + pokemonProp.id}</span></p>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right" >Height</span> <span className='w-2/3 text-left'>{pokemonProp.height}</span> </p>
                        <p className='flex w-full justify-between'><span className="w-1/4 text-right" >Weight</span> <span className='w-2/3 text-left'>{pokemonProp.weight}</span></p>
                        <div className='flex w-full justify-between'>
                            <p className="w-1/4 text-right" >Abilities</p>
                            <div className='flex w-2/3 gap-2'>
                                <p className={`${principalTypeColor} px-1 border-1 border-solid border-gray-200 rounded-sm`}>{pokemonProp.abilities[0]?.ability?.name.toUpperCase()}</p>
                                <p className={`${secondaryPrincipalTypeColor} px-1 border-1 border-solid border-gray-200 rounded-sm`}>{pokemonProp.abilities[1]?.ability?.name.toUpperCase()}</p>
                            </div>
                        </div>



                        <div className='flex w-full justify-between'>
                            <p className="w-1/4 text-right" >Type</p>
                            <div className='flex w-2/3 gap-2 flex-wrap'>
                                <div className='type and symbol'>
                                    {pokemonProp.types.map((elem,i) => {
                                        const typeColor = pokemonType.find(type => type.type === elem.type.name)!.color;
                                        const typeIcon = pokemonType.find(type => type.type === elem.type.name)!.img;
                                        return (
                                            <div key={i}>
                                                <p className={`${typeColor} px-1 border-1 border-solid border-${typeColor} rounded-sm`}>{elem.type.name} <FontAwesomeIcon icon={typeIcon} /></p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* the second block */}
                    <div className='text-gray-500 w-1/2 flex flex-col gap-4'>
                        {pokemonProp.stats.map((elem) => {
                            return (
                                <div className='flex justify-between'>
                                    <p className='w-1/3 text-left'>{elem.stat.name}</p>
                                    <div className={'bg-gray-400 w-2/3'}>
                                        <div className={`${secondaryPrincipalTypeColor} text-right pr-1 text-slate-600`} style={{ width: `${elem.base_stat / higestStat! * 100}%` }}>{elem.base_stat}</div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>)}
        </div>
    );
};

export default PokemonCard;