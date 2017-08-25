angular.module('mpApp.controllers', [])

        /* Driver controller */

        .controller('pokemonController', function ($scope, $log, $http) {

            $scope.getPokemon = function () {
                $scope.name = '';
                $scope.peso = '';
                $scope.altura = '';
                $scope.experiencia_base = '';
                $scope.categorias = [];

                var url = "http://pokeapi.co/api/v2/pokemon/" + $scope.search;

                $http({method: 'GET',
                    url: url})
                        .then(function success(response) {
                            $scope.name = response.data.name;
                            $scope.peso = response.data.weight;
                            $scope.altura = response.data.height;
                            $scope.experiencia_base = response.data.base_experience;
                            $scope.categorias = response.data.types;
                            $log.warn("Facts encontrados" + response.data.total);

                        }, function error(response) {
                            $scope.name = '';
                            $scope.peso = '';
                            $scope.altura = '';
                            $scope.experiencia_base = '';
                            $scope.categorias = [];
                        });

                $scope.dev = {};
            };

        });


