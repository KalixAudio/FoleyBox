var app = angular.module('app', []);

app.controller('SoundController', function ($scope) {
  $scope.sounds = [
    {'name': 'Awesome Loop',
     'dateAdded': 'date',
     'snippet': 'Fast just got faster with Nexus S.',
     'url': 'G:\\Audio\\Samples\\BHK Drum n Bass v3\\S.E.3_Drumloops_ACID WAV\\S.E.3_Drml_140 Bpm (1).wav'},
    {'name': 'DnB loop 02',
     'dateAdded': 'date',
     'snippet': 'The Next, Next Generation tablet.',
     'url': 'G:\\Audio\\Samples\\BHK Drum n Bass v3\\S.E.3_Drumloops_ACID WAV\\S.E.3_Drml_140 Bpm (2).wav'},
    {'name': 'Vengeance Essential Gabber Kick 071',
     'dateAdded': 'date',
     'snippet': 'The Next, Next Generation tablet.',
     'url': 'G:\\Audio\\Samples\\BHK Drum n Bass v3\\S.E.3_Drumloops_ACID WAV\\S.E.3_Drml_140 Bpm (3).wav'}
  ];
  $scope.orderProp = 'name';
});

app.directive('draggable', ['$document', function($document) {
  return function(scope, element, attr) {
    element.on('dragstart', function(event) {
      event.originalEvent.dataTransfer.setData('DownloadURL', 'audio/wav:'+scope.sound.name+'.wav:'+scope.sound.url);
    });
    element.on('mouseup', function(event) {
      gui.Shell.showItemInFolder(scope.sound.url);
    });

  };
}]);
