// angular.module('ifsp').controller('CursoController',
// 	function($scope, $routeParams) {
// 		console.log($routeParams.cursoId);
// 	});


angular.module('ifsp').controller('CursoController',
  function($scope, $routeParams, $resource) {
    console.log('startig CursoController');
    console.log($routeParams);
    console.log($routeParams.cursoId)
    var Curso = $resource('/cursos/:id');
    Curso.get({ id: $routeParams.cursoId },
      function(curso) {
        $scope.curso = curso;
      },
      function(erro) {
        $scope.mensagem = {
          texto: 'Não foi possível obter o contato.'
        };
        console.log($routeParams.cursoId);
      }
    );
  });