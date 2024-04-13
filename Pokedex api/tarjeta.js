export class Tarjeta {
    col = 0;
    nombre = '';
    url = '';
    constructor(c, n, u) {
        this.col = c;
        this.nombre = n;
        this.url = u;
    }
    async mostrar() {
        const info = await getDetalle(this.url);
        let img = info[0];
        let id = info[1];
        let abilities = info[2];
        let habilidades = '';
        let altura = info[3]; // Acceso a la altura corregido
        abilities.forEach(hab => {
            habilidades += hab.ability.name + ' ';
        });
        let card = '<div class="col-md-' + this.col + '">';
        card += '<div class="card">';
        card += '<img class="card-img-top p-2" src="' + img + '" height="150">';
        card += '<div class="card-body">';
        card += '<h5 class="card-title text-center text-capitalize">';
        card += '<span class="badge text-bg-secondary"> #' + id + '</span> ' + this.nombre + '</h5>';
        card += '<p class="card-text">Habilidades: <b>' + habilidades + '</b></p>';
        card += '<p class="card-text">Altura: ' + altura + '</p>'; // Mostrar la altura correctamente
        card += '</div> </div> </div>';
        return card;
    }

}

const getDetalle = async (liga) => {
    const peticion = await fetch(liga);
    if (peticion.ok) {
        const data = await peticion.json();
        const detalles = [];
        detalles.push(data.sprites.other.dream_world.front_default);
        detalles.push(data.id);
        detalles.push(data.abilities);
        detalles.push(data.height);
        return detalles;
    } else {
        throw new Error('No se pudo obtener la información');
    }
}
