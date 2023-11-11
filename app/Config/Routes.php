<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('/registerData', 'UserController::registerData');
$routes->post('/register', 'UserController::register');
$routes->post('/loginAuth', 'UserController::loginAuth');


$routes->post('/deleteUser', 'UserController::deleteUser');