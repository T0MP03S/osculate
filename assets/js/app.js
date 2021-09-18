$(document).ready(() => {
    $('[data-action="unlock"]').on('click', function (e) {
        const uuid = '8906f54a-10dc-11ec-82a8-0242ac130003';

        location.href="assets/images/" + uuid + ".jpg";
    });
});