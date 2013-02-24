#[Gandzo Web Team](http://gandzo.com) jQuery Playlist

This plugin is an extension of jquery.videoBG plugin by [Syd Lawrence](www.sydlawrence.com).

As it name states, it enables you to setup a videoBG playlist.

Usage: call playlist on a div element that will serve as a bg container, with an array of video path and file names as an argument.

Example: 

    $('#videos').playlist({videos: ["videos/1","videos/2"], // array of video paths
        loop: true, // [bool] Looping of the whole playlist
        fill: true // [bool] Fill the whole browser background (False fills only parent div)
    });

You should have video files in all three web formats (mp4, ogv and webm), however you only need to input a file name, not its extension as an argument. 

Original videoBG was modified by adding one additional feature: "endVideo" event that is dispatched at the end of each video.