/**
 * Module/Class description.
 *
 * @author André Cruz <andremiguelcruz@msn.com>
 */
define(['dejavu/Class'], function (Class) {

    'use strict';

    var SomeModule = {
        __a: 4,

        run: function () {
            console.log('base run', this.__a);
        }
    };

    return new Class(SomeModule);
});