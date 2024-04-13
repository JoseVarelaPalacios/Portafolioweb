export class Tarjeta{
    col = 0;
    nombre = '';
    url = '';
    constructor(c, n, u){
        this.col = c;
        this.nombre = n;
        this. url = u;        
    }
    async mostrar(){
        const img = await getImagen(this.url);
        let card = '<div class="col-md-'+this.col+'">';
        card += '<div class="card">';
        card += '<img class="card-img-top p-2" src="'+img+'" height="150">'
        card += '<div class="card-body">'
        card += '<h5 class="card-title tex-center tex-capitalize">'+this.nombre+'</h5>'
        card += '</div> <br> </div> <br> </div>'
        return card;
    }

}

const getImagen = async(liga) =>{
    const peticion = await fetch(liga);
    if(peticion.ok){
        const data = await peticion.json();
        return data.sprites.other.dream_world.front_default;
        //console.log(data.sprites.other.dream_world.front_default);
    }
}