exports.mostrarTrabajos = (req, res) => {
     res.render('home', {
          nombrePagina : 'DevJobs | powered by Alexis Loza',
          tagline: 'find the job of your dreams | publish the last available vacancies!',
          barra : true,
          boton: true,
          nombrePagina: 'Dev Job'
     })
}