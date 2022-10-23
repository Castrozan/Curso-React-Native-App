import AsyncStorage from '@react-native-async-storage/async-storage';

export const jogador = async (Nome, Posicao)=>{
    try{
            //await AsyncStorage.removeItem('@jogadores')
            let lista = await AsyncStorage.getItem('@jogadores');
            if(lista!==null){
                const data = JSON.parse(lista)
                data.push({nome:Nome, posicao:Posicao})
                await AsyncStorage.setItem('@jogadores', JSON.stringify(data))
                console.log(data)
            }
            else{   
                console.log('Lista vazia!')
                await AsyncStorage.setItem('@jogadores', JSON.stringify([{nome: Nome, posicao:Posicao}]))
                console.log('inserido', `${Nome, Posicao}`)
            }
        }
        
    catch(error){
        console.log(error)
    }
}

export const getJogadores = {listar: async ()=>{
    const jogadores = await AsyncStorage.getItem('@jogadores')
    const lista = JSON.parse(jogadores)
    return lista
}}