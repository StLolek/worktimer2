
import root from '../root.svelte';
import { set_assets, set_building, set_private_env, set_public_env, set_version } from '../../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_version("1693665751313");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: true,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link\n      rel=\"apple-touch-icon\"\n      sizes=\"180x180\"\n      href=\"" + assets + "/apple-touch-icon.png\"\n    />\n    <link\n      rel=\"icon\"\n      type=\"image/png\"\n      sizes=\"16x16\"\n      color=\"#5bbad5\"\n      href=\"" + assets + "/favicon.png\"\n    />\n    <link rel=\"manifest\" href=\"" + assets + "/site.webmanifest\" />\n    <link\n      rel=\"mask-icon\"\n      href=\"" + assets + "/safari-pinned-tab.svg\"\n      color=\"#5bbad5\"\n    />\n    <meta name=\"msapplication-TileColor\" content=\"#da532c\" />\n    <meta name=\"theme-color\" content=\"#5bbad5\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div>" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	}
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
