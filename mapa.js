Highcharts.mapChart('container', {
    chart: {
        //map: 'countries/mx/mx-all'
        map: Highcharts.maps["countries/mx/mx-all"],
        backgroundColor: '#e0c9a3'
    },
    exporting:false,

    title: {
        text: '<h2>ENTIDADES FEDERATIVAS</h2>',
        useHTML:true,
        style: {
            font: '16px "Montserrat", Verdana, sans-serif'
        }
    },
    mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    legend: {
        enabled: true,
    },
    colors:
    ['#ffffff'],
    colorAxis: {
        dataClasses: [{
            from: 1,
            to: 1,
            color: '#2A4E43',
            name: 'Primera Etapa 2020'
        }, {
            from: 2,
            to: 2,
            color: '#37856D',
            name: 'Segunda Etapa 2021'
        },{
            from: 3,
            to: 3,
            color: '#82CACE',
            name: 'Tercera Etapa 2022'
        }
        ]
    },
    tooltip: {
        enabled: true,
        formatter:function(){
            return this.key;
        }
    },
    series: [{
        data: datamap,
        name: 'Entidad',
        states: {
            hover: {
                color: 'red'
            }
        },
        point: {
            events: {
                click: function(){
                    var row = this.options.row,
                        $div = $('<div class="ventana">' +
                            '<div class="titulo" >'+this.nombre+'</div>'+
                            '<div class="fecha" ><p class="pnegritas">Fecha de creación:</p> <p>'+this.fechaCreacion+'</p></div>'+
                            '<div class="fecha" ><p class="pnegritas" >Planes y Programas</p></div>'+
                            '<div class="planes" >'+this.planes+'</div>'+
                            '</div>')
                            .dialog({
                                title: this.name,
                                width: 370,
                                height: 400
                            });

                }
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}',
            style: {
                color: '#245c4d',
                font: '16px "Montserrat", Verdana, sans-serif'
            }
        }

    }]
}, function(chart) {

});
