(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    /* @ngInject */
    function ShellController() {
        var vm = this;

        vm.images = [1,2,3,4,5,6,7];
        vm.selectedImages = vm.images[0];
        vm.selectedImage = 'images/large/'+ 1 +'.jpg';
        vm.halfOpacity = 1;
        vm.comment = '';
        vm.username = '';
        vm.comments = JSON.parse(localStorage.getItem('comment')) || [];

        vm.selectImage = selectImage;
        vm.sendComment = sendComment;


        function selectImage(index) {
            vm.selectedImage = 'images/large/'+ index +'.jpg';
            vm.halfOpacity = index;
        }

        function sendComment() {

            if (vm.username !== '' && vm.comment !== '') {
                var comment = {};
                comment.username = vm.username;
                comment.comment = vm.comment;
                vm.comments.push(comment);
                localStorage.setItem('comment', JSON.stringify(vm.comments));
                vm.username = '';
                vm.comment = '';
            }

        }

    }
})();
