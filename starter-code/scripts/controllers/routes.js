/* TODO: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */
    page('/', articleController.reveal);
    page('/about', aboutController.reveal);

// TODO: What function do we call to activate page.js?
    page();
