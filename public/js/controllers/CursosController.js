angular.module('ifsp').controller('CursosController',
  function($resource, $scope) {
    $scope.cursos = [];
    $scope.filtro = '';
    var Curso = $resource('/cursos/:id');

    function buscaCursos() {
      console.log('starting buscaCursos')
      Curso.query(
        function(cursos) {
          $scope.cursos = cursos;
          $scope.mensagem = {};
        },
        function(erro) {
          console.log("Não foi possível obter a lista de cursos");
          console.log(erro);
          $scope.mensagem = { texto: "Não foi possível obter a lista de cursos" }
        }
      );
    }
    buscaCursos();

    $scope.remove = function(curso) {
      console.log(curso);
      console.log("Trying to delete course: " + curso._id);
      Curso.delete({ id: curso._id },
        buscaCursos,
        function(erro) {
          console.log("Não foi possível remover o curso");
          console.log(erro);
          $scope.mensagem = { texto: "Não foi possível remover o curso" };
        });
    };
  });