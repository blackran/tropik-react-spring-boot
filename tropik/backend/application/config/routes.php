<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['Clients/get'] ='ClientsController/getClients';
$route['Clients/post'] ='ClientsController/postClients';
$route['Clients/delete/(:any)'] ='ClientsController/deleteClients/$1';
$route['Clients/put/(:any)'] ='ClientsController/putClients/$1';

$route['Categories/get'] ='CategoriesController/getCategories';
$route['Categories/post'] ='CategoriesController/postCategories';
$route['Categories/delete/(:num)'] ='CategoriesController/deleteCategories/$1';
$route['Categories/put/(:num)'] ='CategoriesController/putCategories/$1';

$route['Chambres/get'] ='ChambresController/getChambres';
$route['Chambres/post'] ='ChambresController/postChambres';
$route['Chambres/delete/(:any)'] ='ChambresController/deleteChambres/$1';
$route['Chambres/put/(:any)'] ='ChambresController/putChambres/$1';

$route['Commander/get'] ='CommanderController/getCommander';
$route['Commander/post'] ='CommanderController/postCommander';
$route['Commander/delete/(:num)'] ='CommanderController/deleteCommander/$1';
$route['Commander/put/(:num)'] ='CommanderController/putCommander/$1';

$route['Concerner/get'] ='ConcernerController/getConcerner';
$route['Concerner/post'] ='ConcernerController/postConcerner';
$route['Concerner/delete/(:num)'] ='ConcernerController/deleteConcerner/$1';
$route['Concerner/put/(:num)'] ='ConcernerController/putConcerner/$1';

$route['Reglements/get'] ='ReglementsController/getReglements';
$route['Reglements/post'] ='ReglementsController/postReglements';
$route['Reglements/delete/(:any)'] ='ReglementsController/deleteReglements/$1';
$route['Reglements/put/(:any)'] ='ReglementsController/putReglements/$1';

$route['Repas/get'] ='RepasController/getRepas';
$route['Repas/post'] ='RepasController/postRepas';
$route['Repas/delete/(:num)'] ='RepasController/deleteRepas/$1';
$route['Repas/put/(:num)'] ='RepasController/putRepas/$1';

$route['Reservation/get'] ='ReservationController/getReservation';
$route['Reservation/post'] ='ReservationController/postReservation';
$route['Reservation/delete/(:num)'] ='ReservationController/deleteReservation/$1';
$route['Reservation/put/(:num)'] ='ReservationController/putReservation/$1';

$route['Responsables/get'] ='ResponsablesController/getResponsables';
$route['Responsables/post'] ='ResponsablesController/postResponsables';
$route['Responsables/delete/(:num)'] ='ResponsablesController/deleteResponsables/$1';
$route['Responsables/put/(:num)'] ='ResponsablesController/putResponsables/$1';

$route['Type/get'] ='TypeController/getType';
$route['Type/post'] ='TypeController/postType';
$route['Type/delete/(:num)'] ='TypeController/deleteClients/$1';
$route['Type/put/(:num)'] ='TypeController/putClients/$1';
